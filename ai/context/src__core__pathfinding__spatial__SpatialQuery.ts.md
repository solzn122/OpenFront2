# src/core/pathfinding/spatial/SpatialQuery.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5878 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../utilities/DebugSpan, ../PathFinder, ../algorithms/AStar.WaterBounded
- Public interfaces: SpatialQuery
- Important implementation details: Classes: SpatialQuery Functions/methods: SpatialQuery.constructor, SpatialQuery.getBoundedAStar, SpatialQuery.bfsNearest, SpatialQuery.closestShore, isValidTile, SpatialQuery.closestShoreByWater, isValidTile, SpatialQuery.refineStartTile Content notes: import { Game, Player, TerraNullius } from "../../game/Game"; import { TileRef } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; import { PathFinding } from "../PathFinder"; import { AStarWaterBounded } from "../algorithms/AStar.WaterBounded"; type Owner = Player | TerraNullius; const REFINE_MAX_SEARCH_AREA = 100 * 100; export class SpatialQuery {

