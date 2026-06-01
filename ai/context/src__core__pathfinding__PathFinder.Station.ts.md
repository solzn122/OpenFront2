# src/core/pathfinding/PathFinder.Station.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2095 bytes
- Dependencies: ../game/Game, ../game/RailNetworkImpl, ../game/TrainStation, ./algorithms/AStar, ./types
- Public interfaces: StationPathFinder
- Important implementation details: Classes: StationPathFinder, StationGraphAdapter Functions/methods: StationPathFinder.constructor, StationPathFinder.findPath, StationGraphAdapter.constructor, StationGraphAdapter.numNodes, StationGraphAdapter.maxNeighbors, StationGraphAdapter.maxPriority, StationGraphAdapter.neighbors, StationGraphAdapter.cost, StationGraphAdapter.heuristic Content notes: import { Game } from "../game/Game"; import { StationManager } from "../game/RailNetworkImpl"; import { TrainStation } from "../game/TrainStation"; import { AStar, AStarAdapter } from "./algorithms/AStar"; import { PathFinder } from "./types"; export class StationPathFinder implements PathFinder<TrainStation> { private manager: StationManager; private aStar: AStar;

