# src/core/pathfinding/transformers/SmoothingWaterTransformer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9589 bytes
- Dependencies: ../../game/GameMap, ../../utilities/DebugSpan, ../algorithms/AStar.WaterBounded, ../types
- Public interfaces: SmoothingWaterTransformer
- Important implementation details: Classes: SmoothingWaterTransformer Functions/methods: SmoothingWaterTransformer.constructor, SmoothingWaterTransformer.findPath, SmoothingWaterTransformer.smooth, SmoothingWaterTransformer.losSmooth, SmoothingWaterTransformer.refineEndpoints, SmoothingWaterTransformer.findTileAtDistance, SmoothingWaterTransformer.refineSegment, SmoothingWaterTransformer.canSee, SmoothingWaterTransformer.tracePath, SmoothingWaterTransformer.manhattanDist Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; import { AStarWaterBounded, SearchBounds, } from "../algorithms/AStar.WaterBounded"; import { PathFinder } from "../types"; const ENDPOINT_REFINEMENT_TILES = 50;

