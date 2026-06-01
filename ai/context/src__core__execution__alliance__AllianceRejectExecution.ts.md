# src/core/execution/alliance/AllianceRejectExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1320 bytes
- Dependencies: ../../game/Game
- Public interfaces: AllianceRejectExecution
- Important implementation details: Classes: AllianceRejectExecution Functions/methods: AllianceRejectExecution.constructor, AllianceRejectExecution.init, AllianceRejectExecution.tick, AllianceRejectExecution.isActive, AllianceRejectExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, PlayerID } from "../../game/Game"; export class AllianceRejectExecution implements Execution { private active = true; constructor( private requestorID: PlayerID, private recipient: Player, ) {} init(mg: Game, ticks: number): void {

