# src/core/execution/RecomputeRailClusterExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 445 bytes
- Dependencies: ../game/Game, ../game/RailNetwork
- Public interfaces: RecomputeRailClusterExecution
- Important implementation details: Classes: RecomputeRailClusterExecution Functions/methods: RecomputeRailClusterExecution.constructor, RecomputeRailClusterExecution.isActive, RecomputeRailClusterExecution.activeDuringSpawnPhase, RecomputeRailClusterExecution.init, RecomputeRailClusterExecution.tick Content notes: import { Execution, Game } from "../game/Game"; import { RailNetwork } from "../game/RailNetwork"; export class RecomputeRailClusterExecution implements Execution { constructor(private railNetwork: RailNetwork) {} isActive(): boolean { return true; } activeDuringSpawnPhase(): boolean {

