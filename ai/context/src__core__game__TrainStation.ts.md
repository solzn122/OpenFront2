# src/core/game/TrainStation.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6575 bytes
- Dependencies: ../execution/TrainExecution, ../PseudoRandom, ./Game, ./GameMap, ./GameUpdates, ./Railroad
- Public interfaces: createTrainStopHandlers, TrainStation, Cluster
- Important implementation details: Classes: TradeStationStopHandler, FactoryStopHandler, TrainStation, Cluster Functions/methods: TradeStationStopHandler.onStop, FactoryStopHandler.onStop, createTrainStopHandlers, TrainStation.constructor, TrainStation.tradeAvailable, TrainStation.clearRailroads, TrainStation.addRailroad, TrainStation.removeRailroad, TrainStation.removeNeighboringRails, TrainStation.neighbors, TrainStation.tile, TrainStation.isActive, TrainStation.getRailroads, TrainStation.getRailroadTo, TrainStation.setCluster, TrainStation.getCluster, TrainStation.onTrainStop, Cluster.isTradeStation, Cluster.has, Cluster.addStation, Cluster.removeStation, Cluster.addStations, Cluster.merge, Cluster.hasAnyTradeDestination, Cluster.randomTradeDestination, Cluster.availableForTrade, Cluster.size, Cluster.clear, rel Content notes: import { TrainExecution } from "../execution/TrainExecution"; import { PseudoRandom } from "../PseudoRandom"; import { Game, Player, Unit, UnitType } from "./Game"; import { TileRef } from "./GameMap"; import { GameUpdateType } from "./GameUpdates"; import { Railroad } from "./Railroad"; /** interface TrainStopHandler {

