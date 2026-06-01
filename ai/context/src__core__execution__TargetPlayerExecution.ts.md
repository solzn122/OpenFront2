# src/core/execution/TargetPlayerExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 848 bytes
- Dependencies: ../game/Game
- Public interfaces: TargetPlayerExecution
- Important implementation details: Classes: TargetPlayerExecution Functions/methods: TargetPlayerExecution.constructor, TargetPlayerExecution.init, TargetPlayerExecution.tick, TargetPlayerExecution.isActive, TargetPlayerExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, PlayerID } from "../game/Game"; export class TargetPlayerExecution implements Execution { private target: Player; private active = true; constructor( private requestor: Player, private targetID: PlayerID, ) {}

