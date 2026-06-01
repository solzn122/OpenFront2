# vite.config.ts

- Purpose: Source module containing application logic.
- Category: configuration
- Size: 8297 bytes
- Dependencies: @tailwindcss/vite, fs, mrmime, path, url, vite, vite-plugin-html, vite-tsconfig-paths, ./src/core/AssetUrls, ./src/server/PublicAssetManifest
- Public interfaces: internal classes/functions (0 classes, 7 functions/methods)
- Important implementation details: Functions/methods: serveProprietaryDir, <class>.configureServer, injectCdnBaseTemplate, syncHashedPublicAssets, <class>.writeBundle, <class>.closeBundle, devGameHtmlBypass Content notes: import tailwindcss from "@tailwindcss/vite"; import fs from "fs"; import { lookup as lookupMime } from "mrmime"; import path from "path"; import { fileURLToPath } from "url"; import { defineConfig, loadEnv, type Plugin } from "vite"; import { createHtmlPlugin } from "vite-plugin-html"; import tsconfigPaths from "vite-tsconfig-paths";

