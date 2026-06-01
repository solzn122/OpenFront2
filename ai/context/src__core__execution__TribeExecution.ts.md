# src/core/execution/TribeExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3894 bytes
- Dependencies: ../game/Game, ../PseudoRandom, ../Util, ./alliance/AllianceExtensionExecution, ./DeleteUnitExecution, ./utils/AiAttackBehavior
- Public interfaces: TribeExecution
- Important implementation details: Classes: TribeExecution Functions/methods: TribeExecution.constructor, TribeExecution.activeDuringSpawnPhase, TribeExecution.init, TribeExecution.tick, TribeExecution.acceptAllAllianceRequests, TribeExecution.deleteNextStructure, TribeExecution.maybeAttack, TribeExecution.isActive Content notes: import { Execution, Game, Player, Structures } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { simpleHash } from "../Util"; import { AllianceExtensionExecution } from "./alliance/AllianceExtensionExecution"; import { DeleteUnitExecution } from "./DeleteUnitExecution"; import { AiAttackBehavior } from "./utils/AiAttackBehavior"; export class TribeExecution implements Execution { private active = true;

