# src/server/RuntimeAssetManifest.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 987 bytes
- Dependencies: fs, path, url, ../core/AssetUrls
- Public interfaces: getRuntimeAssetManifest, clearRuntimeAssetManifestCache
- Important implementation details: Functions/methods: getRuntimeAssetManifest, clearRuntimeAssetManifestCache Content notes: import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; import type { AssetManifest } from "../core/AssetUrls"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const staticDir = path.join(__dirname, "../../static"); const manifestPath = path.join(staticDir, "asset-manifest.json");

