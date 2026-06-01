# src/core/execution/MarkDisconnectedExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 463 bytes
- Dependencies: ../game/Game
- Public interfaces: MarkDisconnectedExecution
- Important implementation details: Classes: MarkDisconnectedExecution Functions/methods: MarkDisconnectedExecution.constructor, MarkDisconnectedExecution.init, MarkDisconnectedExecution.tick, MarkDisconnectedExecution.isActive, MarkDisconnectedExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player } from "../game/Game"; export class MarkDisconnectedExecution implements Execution { constructor( private player: Player, private isDisconnected: boolean, ) {} init(mg: Game, ticks: number): void { this.player.markDisconnected(this.isDisconnected);

