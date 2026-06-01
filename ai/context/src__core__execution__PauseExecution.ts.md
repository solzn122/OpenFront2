# src/core/execution/PauseExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 549 bytes
- Dependencies: ../game/Game
- Public interfaces: PauseExecution
- Important implementation details: Classes: PauseExecution Functions/methods: PauseExecution.constructor, PauseExecution.isActive, PauseExecution.activeDuringSpawnPhase, PauseExecution.init, PauseExecution.tick Content notes: import { Execution, Game, GameType, Player } from "../game/Game"; export class PauseExecution implements Execution { constructor( private player: Player, private paused: boolean, ) {} isActive(): boolean { return false;

