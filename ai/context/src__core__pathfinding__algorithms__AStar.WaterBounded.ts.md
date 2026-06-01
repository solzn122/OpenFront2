# src/core/pathfinding/algorithms/AStar.WaterBounded.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10766 bytes
- Dependencies: ../../game/GameMap, ../types, ./PriorityQueue
- Public interfaces: AStarWaterBounded
- Important implementation details: Classes: AStarWaterBounded Functions/methods: getMagnitudePenalty, AStarWaterBounded.constructor, AStarWaterBounded.findPath, AStarWaterBounded.searchBounded, toLocal, toGlobal, crossTieBreaker, AStarWaterBounded.buildPath Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { PathFinder } from "../types"; import { MinHeap } from "./PriorityQueue"; const LAND_BIT = 7; const MAGNITUDE_MASK = 0x1f; const COST_SCALE = 100; const BASE_COST = 1 * COST_SCALE; function getMagnitudePenalty(magnitude: number): number {

