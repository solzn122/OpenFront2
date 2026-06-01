# src/core/game/GameMap.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15806 bytes
- Dependencies: ./Game
- Public interfaces: GameMapImpl, euclDistFN, manhattanDistFN, rectDistFN, isometricDistFN, hexDistFN, andFN
- Important implementation details: Classes: GameMapImpl Functions/methods: GameMapImpl.constructor, GameMapImpl.numTilesWithFallout, GameMapImpl.ref, GameMapImpl.isValidRef, GameMapImpl.x, GameMapImpl.y, GameMapImpl.cell, GameMapImpl.width, GameMapImpl.height, GameMapImpl.numLandTiles, GameMapImpl.isValidCoord, GameMapImpl.isLand, GameMapImpl.isOceanShore, GameMapImpl.isOcean, GameMapImpl.isShoreline, GameMapImpl.magnitude, GameMapImpl.terrainByte, GameMapImpl.setWater, GameMapImpl.setShorelineBit, GameMapImpl.clearShorelineBit, GameMapImpl.setOcean, GameMapImpl.setMagnitude, GameMapImpl.ownerID, GameMapImpl.hasOwner, GameMapImpl.setOwnerID, GameMapImpl.hasFallout, GameMapImpl.setFallout, GameMapImpl.isOnEdgeOfMap, GameMapImpl.isBorder, GameMapImpl.hasDefenseBonus Content notes: import { Cell, TerrainType } from "./Game"; export type TileRef = number; export interface GameMap { ref(x: number, y: number): TileRef; isValidRef(ref: TileRef): boolean; x(ref: TileRef): number; y(ref: TileRef): number; cell(ref: TileRef): Cell;

