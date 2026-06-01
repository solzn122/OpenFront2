# src/core/execution/MoveWarshipExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1361 bytes
- Dependencies: ../game/Game, ../game/GameMap
- Public interfaces: MoveWarshipExecution
- Important implementation details: Classes: MoveWarshipExecution Functions/methods: MoveWarshipExecution.constructor, MoveWarshipExecution.init, MoveWarshipExecution.tick, MoveWarshipExecution.isActive, MoveWarshipExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, UnitType } from "../game/Game"; import { TileRef } from "../game/GameMap"; export class MoveWarshipExecution implements Execution { constructor( private readonly owner: Player, private readonly unitIds: number[], private readonly position: TileRef, ) {}

