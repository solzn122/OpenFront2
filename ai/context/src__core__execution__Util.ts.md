# src/core/execution/Util.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7584 bytes
- Dependencies: ../configuration/Config, ../game/Game, ../game/GameMap, ../game/GameView
- Public interfaces: computeNukeBlastCounts, wouldNukeBreakAlliance, listNukeBreakAlliance, getSpawnTiles, getSpawnTiles, getSpawnTiles, closestTile, closestTwoTiles, calculateTerritoryCenter
- Important implementation details: Functions/methods: computeNukeBlastCounts, wouldNukeBreakAlliance, listNukeBreakAlliance, getSpawnTiles, getSpawnTiles, getSpawnTiles, isInvalid, closestTile, closestTwoTiles, calculateTerritoryCenter Content notes: import { NukeMagnitude } from "../configuration/Config"; import { Game, Player, Structures } from "../game/Game"; import { euclDistFN, GameMap, TileRef } from "../game/GameMap"; import { GameView } from "../game/GameView"; export interface NukeBlastParams { gm: GameMap; targetTile: TileRef; magnitude: NukeMagnitude;

