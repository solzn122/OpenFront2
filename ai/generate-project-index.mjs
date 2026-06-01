import fs from "fs";
import path from "path";
import ts from "../node_modules/typescript/lib/typescript.js";

const root = path.resolve(".");
const aiDir = path.join(root, "ai");
const contextDir = path.join(aiDir, "context");
const now = new Date().toISOString();

const ignoredContextDirs = new Set(["node_modules", ".git", "ai"]);
const externalDirs = new Set(["node_modules", ".git"]);
const buildDirs = new Set(["static"]);
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const textExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".html",
  ".css",
  ".yml",
  ".yaml",
  ".txt",
  ".xml",
]);
const assetExtensions = new Set([
  ".svg",
  ".png",
  ".webp",
  ".mp3",
  ".bin",
  ".woff",
  ".ttf",
]);

function rel(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/") || ".";
}

function posixJoin(...parts) {
  return parts.join("/").replace(/\/+/g, "/");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function safeContextName(relativePath) {
  return `${relativePath.replace(/[^a-zA-Z0-9._-]+/g, "__")}.md`;
}

function readText(filePath, maxBytes = 512_000) {
  const stat = fs.statSync(filePath);
  if (stat.size > maxBytes) return "";
  return fs.readFileSync(filePath, "utf8");
}

function classify(relativePath, ext) {
  const parts = relativePath.split("/");
  if (parts[0] === "node_modules") return "dependency";
  if (parts[0] === ".git") return "vcs";
  if (parts[0] === ".github") return "ci";
  if (parts[0] === "static") return "build-output";
  if (parts[0] === "resources") return assetExtensions.has(ext) ? "asset" : "resource-data";
  if (parts[0] === "proprietary") return assetExtensions.has(ext) ? "proprietary-asset" : "proprietary-data";
  if (parts[0] === "src") return sourceExtensions.has(ext) ? "source" : "source-support";
  if (["package.json", "tsconfig.json", "vite.config.ts", "Dockerfile", ".gitmodules"].includes(relativePath)) return "configuration";
  return assetExtensions.has(ext) ? "asset" : "project-file";
}

function walk(dir, entries = { dirs: [], files: [] }) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    const relativePath = rel(full);
    if (item.isDirectory()) {
      entries.dirs.push({
        path: relativePath,
        name: item.name,
        parent: rel(path.dirname(full)),
        category: externalDirs.has(item.name) ? "external" : buildDirs.has(item.name) ? "build-output" : "project",
      });
      walk(full, entries);
    } else if (item.isFile()) {
      const stat = fs.statSync(full);
      const ext = path.extname(item.name);
      entries.files.push({
        path: relativePath,
        name: item.name,
        parent: rel(path.dirname(full)),
        extension: ext || null,
        bytes: stat.size,
        modified: stat.mtime.toISOString(),
        category: classify(relativePath, ext),
        isTextCandidate: textExtensions.has(ext) || item.name === "Dockerfile" || item.name.startsWith("."),
        isAsset: assetExtensions.has(ext),
      });
    }
  }
  return entries;
}

function lineOf(sourceFile, node) {
  return sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
}

function textOf(node, sourceFile) {
  return node.getText(sourceFile);
}

function nameOf(node, sourceFile) {
  if (!node) return null;
  if (ts.isIdentifier(node) || ts.isPrivateIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
    return node.text;
  }
  return textOf(node, sourceFile);
}

function expressionName(expr, sourceFile) {
  if (!expr) return null;
  if (ts.isIdentifier(expr)) return expr.text;
  if (ts.isPropertyAccessExpression(expr)) return `${expressionName(expr.expression, sourceFile)}.${expr.name.text}`;
  if (ts.isElementAccessExpression(expr)) return `${expressionName(expr.expression, sourceFile)}[]`;
  if (ts.isCallExpression(expr)) return `${expressionName(expr.expression, sourceFile)}()`;
  return textOf(expr, sourceFile).slice(0, 160);
}

function literalArg(arg, sourceFile) {
  if (!arg) return null;
  if (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg)) return arg.text;
  return textOf(arg, sourceFile).slice(0, 160);
}

function exported(node) {
  return Boolean(node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword));
}

function summarizeText(text) {
  const compact = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("//") && !line.startsWith("*"))
    .slice(0, 8)
    .join(" ");
  return compact.slice(0, 700);
}

function parseSource(filePath, relativePath) {
  const text = readText(filePath, 2_000_000);
  const sourceFile = ts.createSourceFile(relativePath, text, ts.ScriptTarget.Latest, true);
  const imports = [];
  const exports = [];
  const functions = [];
  const classes = [];
  const calls = [];
  const events = [];
  const apiEndpoints = [];
  const dbSchemas = [];
  const currentStack = [];

  function addFunction(kind, name, node, extra = {}) {
    const id = `${relativePath}#${name || "<anonymous>"}:${lineOf(sourceFile, node)}`;
    functions.push({
      id,
      file: relativePath,
      name: name || "<anonymous>",
      kind,
      line: lineOf(sourceFile, node),
      exported: exported(node),
      async: Boolean(node.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword)),
      parameters: node.parameters?.map((p) => nameOf(p.name, sourceFile)) ?? [],
      ...extra,
    });
    return id;
  }

  function visit(node) {
    if (ts.isImportDeclaration(node)) {
      imports.push({
        source: node.moduleSpecifier.text,
        line: lineOf(sourceFile, node),
        bindings: node.importClause ? textOf(node.importClause, sourceFile) : null,
      });
    }
    if (ts.isExportDeclaration(node)) {
      exports.push({
        source: node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier) ? node.moduleSpecifier.text : null,
        line: lineOf(sourceFile, node),
        bindings: node.exportClause ? textOf(node.exportClause, sourceFile) : "*",
      });
    }
    if (ts.isVariableStatement(node) && exported(node)) {
      for (const declaration of node.declarationList.declarations) {
        exports.push({ source: null, line: lineOf(sourceFile, declaration), bindings: nameOf(declaration.name, sourceFile) });
      }
    }
    if (ts.isFunctionDeclaration(node)) {
      const id = addFunction("function", node.name?.text, node);
      if (exported(node)) exports.push({ source: null, line: lineOf(sourceFile, node), bindings: node.name?.text ?? "<anonymous>" });
      currentStack.push(id);
      ts.forEachChild(node, visit);
      currentStack.pop();
      return;
    }
    if (ts.isVariableDeclaration(node) && node.initializer && (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer))) {
      const id = addFunction(ts.isArrowFunction(node.initializer) ? "arrow-function" : "function-expression", nameOf(node.name, sourceFile), node.initializer);
      currentStack.push(id);
      ts.forEachChild(node.initializer, visit);
      currentStack.pop();
      return;
    }
    if (ts.isClassDeclaration(node)) {
      const className = node.name?.text ?? "<anonymous>";
      const heritage = [];
      node.heritageClauses?.forEach((clause) => {
        clause.types.forEach((type) => {
          heritage.push({
            kind: clause.token === ts.SyntaxKind.ExtendsKeyword ? "extends" : "implements",
            target: textOf(type.expression, sourceFile),
          });
        });
      });
      classes.push({
        file: relativePath,
        name: className,
        line: lineOf(sourceFile, node),
        exported: exported(node),
        heritage,
        decorators: node.modifiers?.filter((m) => m.kind === ts.SyntaxKind.Decorator).map((m) => textOf(m, sourceFile)) ?? [],
      });
      if (exported(node)) exports.push({ source: null, line: lineOf(sourceFile, node), bindings: className });
    }
    if (ts.isMethodDeclaration(node) || ts.isConstructorDeclaration(node)) {
      const parent = ts.isClassLike(node.parent) ? node.parent.name?.text : null;
      const methodName = ts.isConstructorDeclaration(node) ? "constructor" : nameOf(node.name, sourceFile);
      const id = addFunction("method", `${parent ?? "<class>"}.${methodName}`, node, { className: parent });
      currentStack.push(id);
      ts.forEachChild(node, visit);
      currentStack.pop();
      return;
    }
    if (ts.isCallExpression(node)) {
      const callee = expressionName(node.expression, sourceFile);
      const first = literalArg(node.arguments[0], sourceFile);
      calls.push({
        file: relativePath,
        line: lineOf(sourceFile, node),
        callee,
        args: node.arguments.slice(0, 4).map((arg) => literalArg(arg, sourceFile)),
        inFunction: currentStack.at(-1) ?? null,
      });
      if (callee?.endsWith(".addEventListener") || callee?.endsWith(".dispatchEvent") || callee?.includes("EventBus") || callee?.endsWith(".emit") || callee?.endsWith(".on")) {
        events.push({
          file: relativePath,
          line: lineOf(sourceFile, node),
          operation: callee,
          event: first,
          inFunction: currentStack.at(-1) ?? null,
        });
      }
      const routeMatch = callee?.match(/\.(get|post|put|patch|delete|use|ws)$/);
      if (routeMatch && first && first.startsWith("/")) {
        apiEndpoints.push({
          file: relativePath,
          line: lineOf(sourceFile, node),
          method: routeMatch[1].toUpperCase(),
          path: first,
          handler: node.arguments[1] ? textOf(node.arguments[1], sourceFile).slice(0, 180) : null,
        });
      }
      if (callee?.startsWith("z.") || callee?.includes(".object") || callee?.includes("Schema")) {
        dbSchemas.push({
          file: relativePath,
          line: lineOf(sourceFile, node),
          expression: textOf(node, sourceFile).slice(0, 240),
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return {
    file: relativePath,
    imports,
    exports,
    functions,
    classes,
    calls,
    events,
    apiEndpoints,
    dbSchemas,
    textSummary: summarizeText(text),
  };
}

function resolveImport(fromFile, specifier) {
  if (!specifier || !specifier.startsWith(".")) return specifier;
  const base = path.dirname(fromFile);
  return posixJoin(base, specifier);
}

function writeJson(name, data) {
  fs.writeFileSync(path.join(aiDir, name), `${JSON.stringify(data, null, 2)}\n`);
}

function buildFolderStats(files, dirs) {
  const stats = new Map();
  for (const dir of dirs) {
    stats.set(dir.path, { path: dir.path, files: 0, folders: 0, bytes: 0, categories: {} });
  }
  stats.set(".", { path: ".", files: 0, folders: dirs.length, bytes: 0, categories: {} });
  for (const file of files) {
    const parent = file.parent || ".";
    if (!stats.has(parent)) stats.set(parent, { path: parent, files: 0, folders: 0, bytes: 0, categories: {} });
    const stat = stats.get(parent);
    stat.files += 1;
    stat.bytes += file.bytes;
    stat.categories[file.category] = (stat.categories[file.category] ?? 0) + 1;
  }
  for (const dir of dirs) {
    const parent = dir.parent || ".";
    if (!stats.has(parent)) stats.set(parent, { path: parent, files: 0, folders: 0, bytes: 0, categories: {} });
    stats.get(parent).folders += 1;
  }
  return [...stats.values()].sort((a, b) => a.path.localeCompare(b.path));
}

function summarizeFile(file, semantic) {
  const lines = [];
  lines.push(`# ${file.path}`);
  lines.push("");
  lines.push(`- Purpose: ${purposeFor(file, semantic)}`);
  lines.push(`- Category: ${file.category}`);
  lines.push(`- Size: ${file.bytes} bytes`);
  if (semantic?.imports?.length) lines.push(`- Dependencies: ${semantic.imports.map((i) => i.source).join(", ")}`);
  else lines.push("- Dependencies: none detected");
  if (semantic?.exports?.length) lines.push(`- Public interfaces: ${semantic.exports.map((e) => e.bindings).join(", ")}`);
  else if (semantic?.functions?.length || semantic?.classes?.length) lines.push(`- Public interfaces: internal classes/functions (${semantic.classes.length} classes, ${semantic.functions.length} functions/methods)`);
  else lines.push("- Public interfaces: none detected");
  const details = [];
  if (semantic?.classes?.length) details.push(`Classes: ${semantic.classes.map((c) => c.name).slice(0, 20).join(", ")}`);
  if (semantic?.functions?.length) details.push(`Functions/methods: ${semantic.functions.map((f) => f.name).slice(0, 30).join(", ")}`);
  if (semantic?.apiEndpoints?.length) details.push(`API endpoints: ${semantic.apiEndpoints.map((e) => `${e.method} ${e.path}`).join(", ")}`);
  if (semantic?.events?.length) details.push(`Events: ${semantic.events.map((e) => e.event || e.operation).slice(0, 30).join(", ")}`);
  if (semantic?.textSummary) details.push(`Content notes: ${semantic.textSummary}`);
  if (!details.length && file.isAsset) details.push(`Asset file used by runtime or content pipeline. Extension: ${file.extension || "none"}.`);
  if (!details.length) details.push("No deeper semantic structure detected by static analysis.");
  lines.push(`- Important implementation details: ${details.join(" ")}`);
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function purposeFor(file, semantic) {
  if (semantic?.apiEndpoints?.length) return "Server route/API module.";
  if (semantic?.classes?.length || semantic?.functions?.length) return "Source module containing application logic.";
  if (file.path === "package.json") return "NPM package metadata, scripts, and dependencies.";
  if (file.path === "vite.config.ts") return "Vite build, dev server, asset manifest, and proxy configuration.";
  if (file.path === "Dockerfile") return "Container build and runtime definition.";
  if (file.path.startsWith("resources/maps/")) return "Game map asset or map metadata.";
  if (file.path.startsWith("resources/lang/")) return "Localization data.";
  if (file.path.startsWith("resources/flags/")) return "Flag SVG asset.";
  if (file.path.startsWith("resources/")) return "Runtime resource asset or data file.";
  if (file.path.startsWith("proprietary/")) return "Brand/proprietary runtime asset.";
  if (file.path.startsWith(".github/")) return "GitHub automation or collaboration metadata.";
  return "Project file.";
}

ensureDir(aiDir);
ensureDir(contextDir);

const inventory = walk(root);
const files = inventory.files.filter((f) => !f.path.startsWith("ai/"));
const dirs = inventory.dirs.filter((d) => !d.path.startsWith("ai"));
const semanticFiles = files.filter((f) => sourceExtensions.has(f.extension ?? "") && !f.path.startsWith("node_modules/") && !f.path.startsWith("static/"));
const semantics = [];
for (const file of semanticFiles) {
  try {
    semantics.push(parseSource(path.join(root, file.path), file.path));
  } catch (error) {
    semantics.push({ file: file.path, error: error instanceof Error ? error.message : String(error), imports: [], exports: [], functions: [], classes: [], calls: [], events: [], apiEndpoints: [], dbSchemas: [] });
  }
}

const semanticByFile = new Map(semantics.map((s) => [s.file, s]));
const definitionsByName = new Map();
for (const semantic of semantics) {
  for (const fn of semantic.functions) {
    if (!definitionsByName.has(fn.name)) definitionsByName.set(fn.name, []);
    definitionsByName.get(fn.name).push(fn);
  }
}

const callsByTarget = [];
for (const semantic of semantics) {
  for (const call of semantic.calls) {
    const simple = call.callee?.split(".").at(-1);
    const candidates = simple ? definitionsByName.get(simple) ?? [] : [];
    callsByTarget.push({ ...call, possibleDefinitions: candidates.map((c) => c.id).slice(0, 20) });
  }
}

const modules = semantics.map((s) => ({
  file: s.file,
  imports: s.imports.map((i) => ({ ...i, resolved: resolveImport(s.file, i.source) })),
  exports: s.exports,
  classes: s.classes.map((c) => c.name),
  functions: s.functions.map((f) => f.name),
  apiEndpointCount: s.apiEndpoints.length,
  eventCount: s.events.length,
}));

const fileIndex = files.map((file) => ({
  ...file,
  summaryPath: !file.path.startsWith("node_modules/") && !file.path.startsWith(".git/") && !file.path.startsWith("static/") ? `ai/context/${safeContextName(file.path)}` : null,
  semantic: semanticByFile.has(file.path)
    ? {
        functions: semanticByFile.get(file.path).functions.length,
        classes: semanticByFile.get(file.path).classes.length,
        imports: semanticByFile.get(file.path).imports.length,
        exports: semanticByFile.get(file.path).exports.length,
        apiEndpoints: semanticByFile.get(file.path).apiEndpoints.length,
        events: semanticByFile.get(file.path).events.length,
      }
    : null,
}));

const allFunctions = semantics.flatMap((s) => s.functions);
const allClasses = semantics.flatMap((s) => s.classes);
const allApiEndpoints = semantics.flatMap((s) => s.apiEndpoints);
const allEvents = semantics.flatMap((s) => s.events);
const allDbSchemas = semantics.flatMap((s) => s.dbSchemas);

const dependencyGraph = {
  generatedAt: now,
  nodes: [
    ...modules.map((m) => ({ id: m.file, type: "module" })),
    ...allFunctions.map((f) => ({ id: f.id, type: "function", name: f.name, file: f.file })),
    ...allClasses.map((c) => ({ id: `${c.file}#${c.name}`, type: "class", name: c.name, file: c.file })),
    ...allApiEndpoints.map((e) => ({ id: `${e.file}:${e.line}:${e.method}:${e.path}`, type: "api-endpoint", method: e.method, path: e.path, file: e.file })),
  ],
  edges: [
    ...modules.flatMap((m) => m.imports.map((i) => ({ from: m.file, to: i.resolved, type: "imports", line: i.line }))),
    ...allClasses.flatMap((c) => c.heritage.map((h) => ({ from: `${c.file}#${c.name}`, to: h.target, type: h.kind, line: c.line }))),
    ...callsByTarget.flatMap((c) => c.possibleDefinitions.map((d) => ({ from: c.inFunction ?? c.file, to: d, type: "calls", line: c.line, callee: c.callee }))),
    ...allEvents.map((e) => ({ from: e.inFunction ?? e.file, to: e.event ?? e.operation, type: "event", line: e.line, operation: e.operation })),
    ...allApiEndpoints.map((e) => ({ from: e.file, to: `${e.method} ${e.path}`, type: "api-endpoint", line: e.line })),
  ],
};

const projectMap = {
  generatedAt: now,
  root,
  counts: {
    directories: dirs.length,
    files: files.length,
    sourceFiles: semanticFiles.length,
    functions: allFunctions.length,
    classes: allClasses.length,
    apiEndpoints: allApiEndpoints.length,
    events: allEvents.length,
  },
  folders: buildFolderStats(files, dirs),
  topLevel: fs.readdirSync(root, { withFileTypes: true }).map((d) => ({ name: d.name, type: d.isDirectory() ? "directory" : "file" })),
  modules,
  assets: files
    .filter((f) => f.isAsset && !f.path.startsWith("node_modules/"))
    .map((f) => ({ path: f.path, type: f.extension, bytes: f.bytes, category: f.category })),
  configurationFiles: files.filter((f) => f.category === "configuration" || f.category === "ci").map((f) => f.path),
  databaseSchemas: allDbSchemas,
  apiEndpoints: allApiEndpoints,
  eventSystems: allEvents,
};

const functionIndex = {
  generatedAt: now,
  definitions: allFunctions,
  classes: allClasses,
  calls: callsByTarget,
  apiEndpoints: allApiEndpoints,
  events: allEvents,
  databaseSchemas: allDbSchemas,
  imports: semantics.flatMap((s) => s.imports.map((i) => ({ file: s.file, ...i, resolved: resolveImport(s.file, i.source) }))),
  exports: semantics.flatMap((s) => s.exports.map((e) => ({ file: s.file, ...e }))),
};

writeJson("project-map.json", projectMap);
writeJson("file-index.json", { generatedAt: now, files: fileIndex });
writeJson("function-index.json", functionIndex);
writeJson("dependency-graph.json", dependencyGraph);

for (const file of files) {
  if (file.path.startsWith("node_modules/") || file.path.startsWith(".git/") || file.path.startsWith("static/")) continue;
  const semantic = semanticByFile.get(file.path);
  const out = path.join(contextDir, safeContextName(file.path));
  fs.writeFileSync(out, summarizeFile(file, semantic));
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const summary = `# Project Summary

Generated: ${now}

## Architecture Overview

This repository is a TypeScript browser game stack for OpenFront. It is organized around a Vite client, a clustered Node server, and shared deterministic game logic in \`src/core\`.

- \`src/client\`: browser entrypoint, UI components, matchmaking/lobbies, Pixi-style game rendering layers, sound, local persistence, and client transport.
- \`src/core\`: shared simulation, schemas, configuration, map loading, pathfinding, validations, workers, game actions, units, alliances, win checks, and execution pipeline.
- \`src/server\`: master/worker server processes, WebSocket and lobby orchestration, API/static serving, game previews, JWT/security support, telemetry, and asset manifest runtime support.
- \`resources\`: public game assets and data including maps, flags, localization, images, sounds, sprites, legal pages, changelog, and manifest files.
- \`proprietary\`: branded assets, logo/font files, and music.
- \`.github\`: CI, deploy, release, and contribution automation.

## Major Systems

- Game simulation: \`src/core/game\`, \`src/core/execution\`, \`src/core/pathfinding\`, and \`src/core/validations\`.
- Rendering and in-game UI: \`src/client/graphics\` and \`src/client/graphics/layers\`.
- Shell UI and modals: \`src/client/components\` plus top-level client modal modules.
- Multiplayer transport and lobbies: \`src/client/Transport.ts\`, \`src/client/LobbySocket.ts\`, \`src/server/Master*.ts\`, \`src/server/Worker*.ts\`, and \`src/server/GameServer.ts\`.
- Asset pipeline: \`vite.config.ts\`, \`src/core/AssetUrls.ts\`, \`src/server/PublicAssetManifest.ts\`, \`src/server/RuntimeAssetManifest.ts\`, and \`resources\`/ \`proprietary\`.
- Internationalization/content data: \`resources/lang\`, \`resources/QuickChat.json\`, \`resources/news.json\`, and \`resources/changelog.md\`.

## Database and Schema Notes

No SQL DDL or first-party database migration directory was detected in this checkout. Runtime contract schemas are primarily TypeScript/Zod-style schemas in files such as \`src/core/Schemas.ts\`, \`src/core/ApiSchemas.ts\`, \`src/core/ClanApiSchemas.ts\`, \`src/core/CosmeticSchemas.ts\`, \`src/core/StatsSchemas.ts\`, and \`src/server/IPCBridgeSchema.ts\`. Schema-like constructs are indexed in \`ai/function-index.json\` under \`databaseSchemas\`.

## Critical Files

- \`src/client/Main.ts\`: browser application entrypoint and UI bootstrapping.
- \`src/server/Server.ts\`: server entrypoint selecting master or worker process.
- \`src/core/GameRunner.ts\`: creates and ticks game instances.
- \`src/core/game/Game.ts\` and \`src/core/game/GameImpl.ts\`: core game contracts and implementation.
- \`src/core/execution/ExecutionManager.ts\`: maps player turns/actions into executable game mutations.
- \`vite.config.ts\`: dev server, Vite build, CDN asset rewrites, hashed public assets, and proxy configuration.
- \`package.json\`: scripts and dependency declarations.
- \`Dockerfile\`: production container build/runtime definition.

## Likely Entrypoints

- Client: \`src/client/Main.ts\` via Vite and \`index.html\`.
- Server: \`src/server/Server.ts\`.
- Dev command: \`${packageJson.scripts.dev}\`.
- Production build: \`${packageJson.scripts["build-prod"]}\`.
- Tests: \`${packageJson.scripts.test}\`.

## Build Pipeline

- TypeScript type checking runs with \`tsc --noEmit\`.
- Vite builds client assets into \`static\`.
- Production mode disables \`publicDir\`, generates hashed public assets, writes an asset manifest, and rewrites bundle references for CDN/runtime prefixing.
- Tailwind is integrated through the Vite plugin.
- Manual Vite chunks split vendor libraries including \`pixi.js\`, \`howler\`, \`zod\`, and \`protobufjs\`.

## Deployment Pipeline

- GitHub Actions include build, tests with coverage, ESLint, Prettier, deploy, release, PR metadata, and stale PR automation.
- Docker uses Node 24 slim, builds assets in a build stage, installs production dependencies in a separate stage, then runs nginx and supervisor.
- The Dockerfile expects runtime nginx/supervisor configuration files and copies built \`static\` assets plus source/server files into the final image.

## Static Analysis Counts

- Directories indexed: ${dirs.length}
- Files indexed: ${files.length}
- Source files parsed: ${semanticFiles.length}
- Functions/methods found: ${allFunctions.length}
- Classes found: ${allClasses.length}
- API endpoints found: ${allApiEndpoints.length}
- Event-related calls found: ${allEvents.length}

## Generated Index Files

- \`ai/project-map.json\`: folder/module/asset/config/API/event overview.
- \`ai/file-index.json\`: complete file inventory with categories and semantic counts.
- \`ai/function-index.json\`: definitions, calls, classes, imports, exports, events, endpoints, and schema-like constructs.
- \`ai/dependency-graph.json\`: graph nodes and edges for modules, calls, imports, inheritance, events, and endpoints.
- \`ai/context/\`: per-project-file summaries. Dependency directories and build output are indexed but not expanded into context summaries.

## Static Analysis Boundaries

\`node_modules\`, \`.git\`, and \`static\` are included in the file/folder inventory where present, but their internals are not expanded into per-file AI context summaries. Function call resolution is static and name-based, so overloaded functions, dynamic imports, reflection, and framework callbacks may require source confirmation before edits.
`;

fs.writeFileSync(path.join(aiDir, "project-summary.md"), summary);

console.log(JSON.stringify(projectMap.counts, null, 2));
