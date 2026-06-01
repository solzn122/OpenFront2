# src/core/execution/UpgradeStructureExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1035 bytes
- Dependencies: ../game/Game
- Public interfaces: UpgradeStructureExecution
- Important implementation details: Classes: UpgradeStructureExecution Functions/methods: UpgradeStructureExecution.constructor, UpgradeStructureExecution.init, UpgradeStructureExecution.tick, UpgradeStructureExecution.isActive, UpgradeStructureExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, Unit } from "../game/Game"; export class UpgradeStructureExecution implements Execution { private structure: Unit | undefined; private cost: bigint; constructor( private player: Player, private unitId: number, ) {}

