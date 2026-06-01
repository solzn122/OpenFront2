# src/core/pathfinding/algorithms/AStar.WaterHierarchical.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14071 bytes
- Dependencies: ../../game/GameMap, ../../utilities/DebugSpan, ../types, ./AStar.AbstractGraph, ./AStar.WaterBounded, ./AbstractGraph, ./BFS.Grid, ./ConnectedComponents
- Public interfaces: AStarWaterHierarchical
- Important implementation details: Classes: AStarWaterHierarchical, SourceResolver Functions/methods: AStarWaterHierarchical.constructor, AStarWaterHierarchical.findPath, AStarWaterHierarchical.findPathMultiSource, AStarWaterHierarchical.tryShortPathMultiSource, AStarWaterHierarchical.findPathSingle, AStarWaterHierarchical.findNearestNode, AStarWaterHierarchical.findAbstractPath, AStarWaterHierarchical.findLocalPath, SourceResolver.constructor, SourceResolver.resolveTarget, SourceResolver.resolveSourcesToNodes, SourceResolver.getClusterNode Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; import { PathFinder } from "../types"; import { AbstractGraphAStar } from "./AStar.AbstractGraph"; import { AStarWaterBounded } from "./AStar.WaterBounded"; import { AbstractGraph, AbstractNode } from "./AbstractGraph"; import { BFSGrid } from "./BFS.Grid"; import { LAND_MARKER } from "./ConnectedComponents";

