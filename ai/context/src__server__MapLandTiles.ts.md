# src/server/MapLandTiles.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2098 bytes
- Dependencies: fs/promises, path, src/core/AssetUrls, src/core/game/Game, url, ./Logger, ./RuntimeAssetManifest
- Public interfaces: getMapLandTiles
- Important implementation details: Functions/methods: mapDirName, readManifestFile, getMapLandTiles Content notes: import fs from "fs/promises"; import path from "path"; import { normalizeAssetPath } from "src/core/AssetUrls"; import { GameMapType } from "src/core/game/Game"; import { fileURLToPath } from "url"; import { logger } from "./Logger"; import { getRuntimeAssetManifest } from "./RuntimeAssetManifest"; const log = logger.child({ component: "MapLandTiles" });

