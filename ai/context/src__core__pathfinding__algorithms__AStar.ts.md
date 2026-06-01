# src/core/pathfinding/algorithms/AStar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3758 bytes
- Dependencies: ../types, ./PriorityQueue
- Public interfaces: AStar
- Important implementation details: Classes: AStar Functions/methods: AStar.constructor, AStar.findPath, AStar.buildPath Content notes: import { PathFinder } from "../types"; import { BucketQueue, PriorityQueue } from "./PriorityQueue"; export interface AStarAdapter { neighbors(node: number, buffer: Int32Array): number; cost(from: number, to: number, prev?: number): number; heuristic(node: number, goal: number): number; numNodes(): number; maxPriority(): number;

