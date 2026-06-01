# src/core/execution/CityExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 988 bytes
- Dependencies: ../game/Game, ./TrainStationExecution
- Public interfaces: CityExecution
- Important implementation details: Classes: CityExecution Functions/methods: CityExecution.constructor, CityExecution.init, CityExecution.tick, CityExecution.isActive, CityExecution.activeDuringSpawnPhase, CityExecution.createStation Content notes: import { Execution, Game, Unit, UnitType } from "../game/Game"; import { TrainStationExecution } from "./TrainStationExecution"; export class CityExecution implements Execution { private mg: Game; private active: boolean = true; private stationCreated = false; constructor(private city: Unit) {} init(mg: Game, ticks: number): void {

