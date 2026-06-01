# src/core/execution/EmbargoExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 848 bytes
- Dependencies: ../game/Game
- Public interfaces: EmbargoExecution
- Important implementation details: Classes: EmbargoExecution Functions/methods: EmbargoExecution.constructor, EmbargoExecution.init, EmbargoExecution.tick, EmbargoExecution.isActive, EmbargoExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, PlayerID } from "../game/Game"; export class EmbargoExecution implements Execution { private active = true; private target: Player; constructor( private player: Player, private targetID: PlayerID, private readonly action: "start" | "stop",

