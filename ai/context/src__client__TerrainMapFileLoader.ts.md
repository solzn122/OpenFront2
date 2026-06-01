# src/client/TerrainMapFileLoader.ts

- Purpose: Project file.
- Category: source
- Size: 217 bytes
- Dependencies: ../core/AssetUrls, ../core/game/FetchGameMapLoader
- Public interfaces: terrainMapFileLoader
- Important implementation details: Content notes: import { assetUrl } from "../core/AssetUrls"; import { FetchGameMapLoader } from "../core/game/FetchGameMapLoader"; export const terrainMapFileLoader = new FetchGameMapLoader((path) => assetUrl(`maps/${path}`), );

