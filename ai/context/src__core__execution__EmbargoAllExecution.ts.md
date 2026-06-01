# src/core/execution/EmbargoAllExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 886 bytes
- Dependencies: ../game/Game
- Public interfaces: EmbargoAllExecution
- Important implementation details: Classes: EmbargoAllExecution Functions/methods: EmbargoAllExecution.constructor, EmbargoAllExecution.init, EmbargoAllExecution.tick, EmbargoAllExecution.isActive, EmbargoAllExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, PlayerType } from "../game/Game"; export class EmbargoAllExecution implements Execution { constructor( private readonly player: Player, private readonly action: "start" | "stop", ) {} init(mg: Game, _: number): void { if (!this.player.canEmbargoAll()) {

