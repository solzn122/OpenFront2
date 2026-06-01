# src/core/pathfinding/algorithms/AStar.Water.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8220 bytes
- Dependencies: ../../game/GameMap, ../types, ./PriorityQueue
- Public interfaces: AStarWater
- Important implementation details: Classes: AStarWater Functions/methods: getMagnitudePenalty, AStarWater.constructor, AStarWater.findPath, crossTieBreaker, AStarWater.buildPath Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { PathFinder } from "../types"; import { MinHeap, PriorityQueue } from "./PriorityQueue"; const LAND_BIT = 7; // Bit 7 in terrain indicates land const MAGNITUDE_MASK = 0x1f; const COST_SCALE = 100; const BASE_COST = 1 * COST_SCALE; function getMagnitudePenalty(magnitude: number): number {

