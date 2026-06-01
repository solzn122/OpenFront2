# src/core/game/GameMapLoader.ts

- Purpose: Project file.
- Category: source
- Size: 371 bytes
- Dependencies: ./Game, ./TerrainMapLoader
- Public interfaces: none detected
- Important implementation details: Content notes: import { GameMapType } from "./Game"; import { MapManifest } from "./TerrainMapLoader"; export interface GameMapLoader { getMapData(map: GameMapType): MapData; } export interface MapData { mapBin: () => Promise<Uint8Array>; map4xBin: () => Promise<Uint8Array>;

