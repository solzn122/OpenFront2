# src/core/game/RailNetworkImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13094 bytes
- Dependencies: ../pathfinding/PathFinder, ./Game, ./GameMap, ./GameUpdates, ./RailNetwork, ./Railroad, ./RailroadSpatialGrid, ./TrainStation
- Public interfaces: StationManagerImpl, createRailNetwork, RailNetworkImpl
- Important implementation details: Classes: StationManagerImpl, RailPathFinderServiceImpl, RailNetworkImpl Functions/methods: StationManagerImpl.addStation, StationManagerImpl.removeStation, StationManagerImpl.findStation, StationManagerImpl.getAll, StationManagerImpl.getById, StationManagerImpl.count, RailPathFinderServiceImpl.constructor, RailPathFinderServiceImpl.findTilePath, RailPathFinderServiceImpl.findStationsPath, createRailNetwork, RailNetworkImpl.constructor, RailNetworkImpl.stationManager, RailNetworkImpl.connectStation, RailNetworkImpl.recomputeClusters, RailNetworkImpl.removeStation, RailNetworkImpl.findStationsPath, RailNetworkImpl.connectToExistingRails, RailNetworkImpl.overlappingRailroads, RailNetworkImpl.canSnapToExistingRailway, RailNetworkImpl.computeGhostRailPaths, RailNetworkImpl.connectToNearbyStations, RailNetworkImpl.disconnectFromNetwork, RailNetworkImpl.deleteCluster, RailNetworkImpl.connect, RailNetworkImpl.distanceFrom, RailNetworkImpl.computeCluster, RailNetworkImpl.mergeClusters Content notes: import { PathFinding } from "../pathfinding/PathFinder"; import { Game, Unit, UnitType } from "./Game"; import { TileRef } from "./GameMap"; import { GameUpdateType } from "./GameUpdates"; import { RailNetwork } from "./RailNetwork"; import { Railroad } from "./Railroad"; import { RailSpatialGrid } from "./RailroadSpatialGrid"; import { Cluster, TrainStation } from "./TrainStation";

