# src/core/execution/DeleteUnitExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2164 bytes
- Dependencies: ../game/Game
- Public interfaces: DeleteUnitExecution
- Important implementation details: Classes: DeleteUnitExecution Functions/methods: DeleteUnitExecution.constructor, DeleteUnitExecution.activeDuringSpawnPhase, DeleteUnitExecution.init, DeleteUnitExecution.tick, DeleteUnitExecution.isActive Content notes: import { Execution, Game, MessageType, Player, Unit } from "../game/Game"; export class DeleteUnitExecution implements Execution { private active: boolean = true; private mg: Game; private unit: Unit | null = null; constructor( private player: Player, private unitId: number,

