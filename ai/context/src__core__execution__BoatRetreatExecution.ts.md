# src/core/execution/BoatRetreatExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 854 bytes
- Dependencies: ../game/Game
- Public interfaces: BoatRetreatExecution
- Important implementation details: Classes: BoatRetreatExecution Functions/methods: BoatRetreatExecution.constructor, BoatRetreatExecution.init, BoatRetreatExecution.tick, BoatRetreatExecution.owner, BoatRetreatExecution.isActive, BoatRetreatExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, UnitType } from "../game/Game"; export class BoatRetreatExecution implements Execution { private active = true; constructor( private player: Player, private unitID: number, ) {} init(mg: Game, ticks: number): void {}

