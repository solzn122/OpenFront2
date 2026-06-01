# src/core/execution/FactoryExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1171 bytes
- Dependencies: ../game/Game, ./TrainStationExecution
- Public interfaces: FactoryExecution
- Important implementation details: Classes: FactoryExecution Functions/methods: FactoryExecution.constructor, FactoryExecution.init, FactoryExecution.tick, FactoryExecution.isActive, FactoryExecution.activeDuringSpawnPhase, FactoryExecution.createStation Content notes: import { Execution, Game, Unit, UnitType } from "../game/Game"; import { TrainStationExecution } from "./TrainStationExecution"; export class FactoryExecution implements Execution { private active: boolean = true; private game: Game; private stationCreated = false; constructor(private factory: Unit) {} init(mg: Game, ticks: number): void {

