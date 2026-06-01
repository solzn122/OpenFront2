# src/core/game/TerrainSearchMap.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1442 bytes
- Dependencies: none detected
- Public interfaces: TerrainSearchMap
- Important implementation details: Classes: TerrainSearchMap Functions/methods: TerrainSearchMap.constructor, TerrainSearchMap.node, TerrainSearchMap.neighbors, TerrainSearchMap.getWidth, TerrainSearchMap.getHeight Content notes: export enum SearchMapTileType { Land, Shore, Water, } export class TerrainSearchMap { private width: number; private height: number;

