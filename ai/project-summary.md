# Project Summary

Generated: 2026-06-01T07:09:43.453Z

## Architecture Overview

This repository is a TypeScript browser game stack for OpenFront. It is organized around a Vite client, a clustered Node server, and shared deterministic game logic in `src/core`.

- `src/client`: browser entrypoint, UI components, matchmaking/lobbies, Pixi-style game rendering layers, sound, local persistence, and client transport.
- `src/core`: shared simulation, schemas, configuration, map loading, pathfinding, validations, workers, game actions, units, alliances, win checks, and execution pipeline.
- `src/server`: master/worker server processes, WebSocket and lobby orchestration, API/static serving, game previews, JWT/security support, telemetry, and asset manifest runtime support.
- `resources`: public game assets and data including maps, flags, localization, images, sounds, sprites, legal pages, changelog, and manifest files.
- `proprietary`: branded assets, logo/font files, and music.
- `.github`: CI, deploy, release, and contribution automation.

## Major Systems

- Game simulation: `src/core/game`, `src/core/execution`, `src/core/pathfinding`, and `src/core/validations`.
- Rendering and in-game UI: `src/client/graphics` and `src/client/graphics/layers`.
- Shell UI and modals: `src/client/components` plus top-level client modal modules.
- Multiplayer transport and lobbies: `src/client/Transport.ts`, `src/client/LobbySocket.ts`, `src/server/Master*.ts`, `src/server/Worker*.ts`, and `src/server/GameServer.ts`.
- Asset pipeline: `vite.config.ts`, `src/core/AssetUrls.ts`, `src/server/PublicAssetManifest.ts`, `src/server/RuntimeAssetManifest.ts`, and `resources`/ `proprietary`.
- Internationalization/content data: `resources/lang`, `resources/QuickChat.json`, `resources/news.json`, and `resources/changelog.md`.

## Database and Schema Notes

No SQL DDL or first-party database migration directory was detected in this checkout. Runtime contract schemas are primarily TypeScript/Zod-style schemas in files such as `src/core/Schemas.ts`, `src/core/ApiSchemas.ts`, `src/core/ClanApiSchemas.ts`, `src/core/CosmeticSchemas.ts`, `src/core/StatsSchemas.ts`, and `src/server/IPCBridgeSchema.ts`. Schema-like constructs are indexed in `ai/function-index.json` under `databaseSchemas`.

## Critical Files

- `src/client/Main.ts`: browser application entrypoint and UI bootstrapping.
- `src/server/Server.ts`: server entrypoint selecting master or worker process.
- `src/core/GameRunner.ts`: creates and ticks game instances.
- `src/core/game/Game.ts` and `src/core/game/GameImpl.ts`: core game contracts and implementation.
- `src/core/execution/ExecutionManager.ts`: maps player turns/actions into executable game mutations.
- `vite.config.ts`: dev server, Vite build, CDN asset rewrites, hashed public assets, and proxy configuration.
- `package.json`: scripts and dependency declarations.
- `Dockerfile`: production container build/runtime definition.

## Likely Entrypoints

- Client: `src/client/Main.ts` via Vite and `index.html`.
- Server: `src/server/Server.ts`.
- Dev command: `cross-env GAME_ENV=dev concurrently "npm run start:client" "npm run start:server-dev"`.
- Production build: `concurrently --kill-others-on-fail "tsc --noEmit" "vite build"`.
- Tests: `vitest run && vitest run tests/server`.

## Build Pipeline

- TypeScript type checking runs with `tsc --noEmit`.
- Vite builds client assets into `static`.
- Production mode disables `publicDir`, generates hashed public assets, writes an asset manifest, and rewrites bundle references for CDN/runtime prefixing.
- Tailwind is integrated through the Vite plugin.
- Manual Vite chunks split vendor libraries including `pixi.js`, `howler`, `zod`, and `protobufjs`.

## Deployment Pipeline

- GitHub Actions include build, tests with coverage, ESLint, Prettier, deploy, release, PR metadata, and stale PR automation.
- Docker uses Node 24 slim, builds assets in a build stage, installs production dependencies in a separate stage, then runs nginx and supervisor.
- The Dockerfile expects runtime nginx/supervisor configuration files and copies built `static` assets plus source/server files into the final image.

## Static Analysis Counts

- Directories indexed: 4400
- Files indexed: 39698
- Source files parsed: 351
- Functions/methods found: 3903
- Classes found: 377
- API endpoints found: 11
- Event-related calls found: 489

## Generated Index Files

- `ai/project-map.json`: folder/module/asset/config/API/event overview.
- `ai/file-index.json`: complete file inventory with categories and semantic counts.
- `ai/function-index.json`: definitions, calls, classes, imports, exports, events, endpoints, and schema-like constructs.
- `ai/dependency-graph.json`: graph nodes and edges for modules, calls, imports, inheritance, events, and endpoints.
- `ai/context/`: per-project-file summaries. Dependency directories and build output are indexed but not expanded into context summaries.

## Static Analysis Boundaries

`node_modules`, `.git`, and `static` are included in the file/folder inventory where present, but their internals are not expanded into per-file AI context summaries. Function call resolution is static and name-based, so overloaded functions, dynamic imports, reflection, and framework callbacks may require source confirmation before edits.
