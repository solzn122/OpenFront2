# src/core/execution/NoOpExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 279 bytes
- Dependencies: ../game/Game
- Public interfaces: NoOpExecution
- Important implementation details: Classes: NoOpExecution Functions/methods: NoOpExecution.isActive, NoOpExecution.activeDuringSpawnPhase, NoOpExecution.init, NoOpExecution.tick Content notes: import { Execution, Game } from "../game/Game"; export class NoOpExecution implements Execution { isActive(): boolean { return false; } activeDuringSpawnPhase(): boolean { return false; }

