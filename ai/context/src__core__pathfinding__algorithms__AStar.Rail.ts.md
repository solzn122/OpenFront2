# src/core/pathfinding/algorithms/AStar.Rail.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2977 bytes
- Dependencies: ../../game/GameMap, ../../utilities/DebugSpan, ../types, ./AStar
- Public interfaces: AStarRail
- Important implementation details: Classes: AStarRail, RailAdapter Functions/methods: AStarRail.constructor, AStarRail.findPath, RailAdapter.constructor, RailAdapter.numNodes, RailAdapter.maxNeighbors, RailAdapter.maxPriority, RailAdapter.neighbors, RailAdapter.isTraversable, RailAdapter.cost, RailAdapter.heuristic Content notes: import { GameMap } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; import { PathFinder } from "../types"; import { AStar, AStarAdapter } from "./AStar"; export class AStarRail implements PathFinder<number> { private readonly aStar: AStar; constructor(gameMap: GameMap) { const adapter = new RailAdapter(gameMap);

