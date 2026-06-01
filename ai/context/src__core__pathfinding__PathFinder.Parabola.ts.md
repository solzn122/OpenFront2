# src/core/pathfinding/PathFinder.Parabola.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2697 bytes
- Dependencies: ../game/GameMap, ../Util, ../utilities/Line, ./types
- Public interfaces: ParabolaUniversalPathFinder
- Important implementation details: Classes: ParabolaUniversalPathFinder Functions/methods: ParabolaUniversalPathFinder.constructor, ParabolaUniversalPathFinder.createCurve, ParabolaUniversalPathFinder.findPath, ParabolaUniversalPathFinder.next, ParabolaUniversalPathFinder.invalidate, ParabolaUniversalPathFinder.currentIndex Content notes: import { GameMap, TileRef } from "../game/GameMap"; import { within } from "../Util"; import { DistanceBasedBezierCurve } from "../utilities/Line"; import { PathResult, PathStatus, SteppingPathFinder } from "./types"; export interface ParabolaOptions { increment?: number; distanceBasedHeight?: boolean; directionUp?: boolean;

