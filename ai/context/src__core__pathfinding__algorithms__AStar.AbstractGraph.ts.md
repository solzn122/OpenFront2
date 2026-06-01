# src/core/pathfinding/algorithms/AStar.AbstractGraph.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7494 bytes
- Dependencies: ../types, ./AbstractGraph, ./PriorityQueue
- Public interfaces: AbstractGraphAStar
- Important implementation details: Classes: AbstractGraphAStar Functions/methods: AbstractGraphAStar.constructor, AbstractGraphAStar.findPath, AbstractGraphAStar.findPathSingle, AbstractGraphAStar.findPathMultiSource, AbstractGraphAStar.buildPathFromGoal Content notes: import { PathFinder } from "../types"; import { AbstractGraph } from "./AbstractGraph"; import { BucketQueue, MinHeap, PriorityQueue } from "./PriorityQueue"; export interface AbstractGraphAStarConfig { heuristicWeight?: number; maxIterations?: number; useMinHeap?: boolean; // Use MinHeap instead of BucketQueue (better for variable costs) }

