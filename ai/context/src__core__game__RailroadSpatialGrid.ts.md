# src/core/game/RailroadSpatialGrid.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2287 bytes
- Dependencies: ./GameMap, ./Railroad
- Public interfaces: RailSpatialGrid
- Important implementation details: Classes: RailSpatialGrid Functions/methods: RailSpatialGrid.constructor, RailSpatialGrid.register, RailSpatialGrid.unregister, RailSpatialGrid.query, RailSpatialGrid.key, RailSpatialGrid.cellOf Content notes: import { GameMap, TileRef } from "./GameMap"; import { Railroad } from "./Railroad"; export class RailSpatialGrid { private cells = new Map<string, Set<Railroad>>(); private railToCells = new Map<Railroad, Set<string>>(); constructor( private game: GameMap, private cellSize: number,

