# src/core/game/TerrainMapLoader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2999 bytes
- Dependencies: ./Game, ./GameMap, ./GameMapLoader
- Public interfaces: loadTerrainMap, genTerrainFromBin
- Important implementation details: Functions/methods: loadTerrainMap, genTerrainFromBin Content notes: import { GameMapSize, GameMapType, TeamGameSpawnAreas } from "./Game"; import { GameMap, GameMapImpl } from "./GameMap"; import { GameMapLoader } from "./GameMapLoader"; export type TerrainMapData = { nations: Nation[]; gameMap: GameMap; miniGameMap: GameMap; teamGameSpawnAreas?: TeamGameSpawnAreas;

