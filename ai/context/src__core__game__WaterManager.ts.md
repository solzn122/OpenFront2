# src/core/game/WaterManager.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15004 bytes
- Dependencies: ../pathfinding/algorithms/AbstractGraph, ../pathfinding/algorithms/AStar.WaterHierarchical, ../pathfinding/types, ./GameMap
- Public interfaces: WaterManager
- Important implementation details: Classes: WaterManager Functions/methods: WaterManager.constructor, WaterManager.queueTile, WaterManager.tick, WaterManager.waterGraphVersion, WaterManager.miniWaterHPA, WaterManager.miniWaterGraph, WaterManager.getWaterComponent, WaterManager.hasWaterComponent, WaterManager.finalizeWaterChanges, pushNeighbors Content notes: import { AbstractGraph, AbstractGraphBuilder, } from "../pathfinding/algorithms/AbstractGraph"; import { AStarWaterHierarchical } from "../pathfinding/algorithms/AStar.WaterHierarchical"; import { PathFinder } from "../pathfinding/types"; import { GameMap, TileRef } from "./GameMap"; const WATER_GRAPH_REBUILD_INTERVAL = 20;

