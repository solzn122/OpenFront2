# src/core/execution/TrainStationExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2897 bytes
- Dependencies: ../game/Game, ../game/TrainStation, ../PseudoRandom, ./TrainExecution
- Public interfaces: TrainStationExecution
- Important implementation details: Classes: TrainStationExecution Functions/methods: TrainStationExecution.constructor, TrainStationExecution.isActive, TrainStationExecution.init, TrainStationExecution.tick, TrainStationExecution.shouldSpawnTrain, TrainStationExecution.spawnTrain, TrainStationExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Unit, UnitType } from "../game/Game"; import { TrainStation } from "../game/TrainStation"; import { PseudoRandom } from "../PseudoRandom"; import { TrainExecution } from "./TrainExecution"; export class TrainStationExecution implements Execution { private mg: Game; private active: boolean = true; private random: PseudoRandom;

