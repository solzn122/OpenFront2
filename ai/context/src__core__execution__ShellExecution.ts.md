# src/core/execution/ShellExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2428 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../pathfinding/PathFinder, ../pathfinding/types, ../PseudoRandom
- Public interfaces: ShellExecution
- Important implementation details: Classes: ShellExecution Functions/methods: ShellExecution.constructor, ShellExecution.init, ShellExecution.tick, ShellExecution.effectOnTarget, ShellExecution.getEffectOnTargetForTesting, ShellExecution.isActive, ShellExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, Unit, UnitType } from "../game/Game"; import { TileRef } from "../game/GameMap"; import { PathFinding } from "../pathfinding/PathFinder"; import { PathStatus, SteppingPathFinder } from "../pathfinding/types"; import { PseudoRandom } from "../PseudoRandom"; export class ShellExecution implements Execution { private active = true; private pathFinder: SteppingPathFinder<TileRef>;

