# src/core/pathfinding/transformers/ShoreCoercingTransformer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2750 bytes
- Dependencies: ../../game/GameMap, ../types
- Public interfaces: ShoreCoercingTransformer
- Important implementation details: Classes: ShoreCoercingTransformer Functions/methods: ShoreCoercingTransformer.constructor, ShoreCoercingTransformer.findPath, ShoreCoercingTransformer.coerceToWater, ShoreCoercingTransformer.countWaterNeighbors Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { PathFinder } from "../types"; /** export class ShoreCoercingTransformer implements PathFinder<number> { constructor( private inner: PathFinder<number>, private map: GameMap, ) {}

