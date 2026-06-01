# src/core/execution/DefensePostExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2927 bytes
- Dependencies: ../game/Game, ./ShellExecution
- Public interfaces: DefensePostExecution
- Important implementation details: Classes: DefensePostExecution Functions/methods: DefensePostExecution.constructor, DefensePostExecution.init, DefensePostExecution.shoot, DefensePostExecution.tick, DefensePostExecution.isActive, DefensePostExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Unit } from "../game/Game"; import { ShellExecution } from "./ShellExecution"; export class DefensePostExecution implements Execution { private mg: Game; private active: boolean = true; private target: Unit | null = null; private lastShellAttack = 0; private alreadySentShell = new Set<Unit>();

