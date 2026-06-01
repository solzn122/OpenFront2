# src/core/execution/RetreatExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 880 bytes
- Dependencies: ../game/Game
- Public interfaces: RetreatExecution
- Important implementation details: Classes: RetreatExecution Functions/methods: RetreatExecution.constructor, RetreatExecution.init, RetreatExecution.tick, RetreatExecution.owner, RetreatExecution.isActive, RetreatExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player } from "../game/Game"; const cancelDelay = 20; export class RetreatExecution implements Execution { private active = true; private retreatOrdered = false; private startTick: number; private mg: Game; constructor(

