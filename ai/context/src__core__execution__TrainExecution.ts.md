# src/core/execution/TrainExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7456 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../game/MotionPlans, ../game/RailNetwork, ../game/Railroad, ../game/TrainStation
- Public interfaces: TrainExecution
- Important implementation details: Classes: TrainExecution Functions/methods: TrainExecution.constructor, TrainExecution.owner, TrainExecution.tradeStopsVisited, TrainExecution.init, TrainExecution.tick, TrainExecution.loadCargo, TrainExecution.targetReached, TrainExecution.createTrainUnits, TrainExecution.deleteTrain, TrainExecution.activeSourceOrDestination, TrainExecution.saveTraversedTiles, TrainExecution.saveTile, TrainExecution.updateCarsPositions, TrainExecution.nextStation, TrainExecution.canTradeWithDestination, TrainExecution.getNextTile, TrainExecution.stationReached, TrainExecution.isActive, TrainExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, TrainType, Unit, UnitType, } from "../game/Game";

