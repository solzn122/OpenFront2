# src/core/pathfinding/algorithms/AbstractGraph.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 21015 bytes
- Dependencies: ../../game/GameMap, ../../utilities/DebugSpan, ./BFS.Grid, ./ConnectedComponents
- Public interfaces: AbstractGraph, AbstractGraphBuilder
- Important implementation details: Classes: AbstractGraph, AbstractGraphBuilder Functions/methods: AbstractGraph.constructor, AbstractGraph.getNode, AbstractGraph.getAllNodes, AbstractGraph.getEdge, AbstractGraph.getNodeEdges, AbstractGraph.getEdgeBetween, AbstractGraph.getOtherNode, AbstractGraph.getAllEdges, AbstractGraph.getCachedPath, AbstractGraph.setCachedPath, AbstractGraph._initPathCache, AbstractGraph.setWaterComponents, AbstractGraph.getComponentId, AbstractGraph.getClusterKey, AbstractGraph.getCluster, AbstractGraph.getClusterNodes, AbstractGraph.getNearbyClusterNodes, AbstractGraph._addNode, AbstractGraph._addEdge, AbstractGraph._setCluster, AbstractGraph._addNodeToCluster, AbstractGraphBuilder.constructor, AbstractGraphBuilder.build, AbstractGraphBuilder.getOrCreateNode, AbstractGraphBuilder.addNodeToCluster, AbstractGraphBuilder.processCluster, AbstractGraphBuilder.findNodesOnVerticalEdge, tryAddNode, AbstractGraphBuilder.findNodesOnHorizontalEdge, tryAddNode Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; import { BFSGrid } from "./BFS.Grid"; import { ConnectedComponents } from "./ConnectedComponents"; export interface AbstractNode { id: number; x: number; y: number;

