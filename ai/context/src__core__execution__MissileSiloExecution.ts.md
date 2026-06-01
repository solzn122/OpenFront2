# src/core/execution/MissileSiloExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 838 bytes
- Dependencies: ../game/Game
- Public interfaces: MissileSiloExecution
- Important implementation details: Classes: MissileSiloExecution Functions/methods: MissileSiloExecution.constructor, MissileSiloExecution.init, MissileSiloExecution.tick, MissileSiloExecution.isActive, MissileSiloExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Unit } from "../game/Game"; export class MissileSiloExecution implements Execution { private active = true; private mg: Game; private silo: Unit; constructor(silo: Unit) { this.silo = silo; }

