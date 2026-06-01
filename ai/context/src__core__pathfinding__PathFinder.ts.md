# src/core/pathfinding/PathFinder.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5850 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../game/TrainStation, ./algorithms/AStar.Rail, ./algorithms/AStar.Water, ./PathFinder.Air, ./PathFinder.Parabola, ./PathFinder.Station, ./PathFinderBuilder, ./PathFinderStepper, ./transformers/ComponentCheckTransformer, ./transformers/MiniMapTransformer, ./transformers/ShoreCoercingTransformer, ./transformers/SmoothingWaterTransformer, ./types
- Public interfaces: UniversalPathFinding, PathFinding, WaterPathFinder
- Important implementation details: Classes: UniversalPathFinding, PathFinding, WaterPathFinder Functions/methods: UniversalPathFinding.Parabola, PathFinding.Water, componentCheckFn, PathFinding.WaterSimple, PathFinding.Rail, PathFinding.Stations, PathFinding.Air, WaterPathFinder.constructor, WaterPathFinder.ensureFresh, WaterPathFinder.next, WaterPathFinder.findPath, WaterPathFinder.invalidate, tileStepperConfig Content notes: import { Game } from "../game/Game"; import { GameMap, TileRef } from "../game/GameMap"; import { TrainStation } from "../game/TrainStation"; import { AStarRail } from "./algorithms/AStar.Rail"; import { AStarWater } from "./algorithms/AStar.Water"; import { AirPathFinder } from "./PathFinder.Air"; import { ParabolaOptions,

