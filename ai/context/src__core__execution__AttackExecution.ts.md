# src/core/execution/AttackExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10946 bytes
- Dependencies: ../../client/Utils, ../game/Game, ../game/GameMap, ../PseudoRandom, ../Util, ./utils/FlatBinaryHeap
- Public interfaces: AttackExecution
- Important implementation details: Classes: AttackExecution Functions/methods: AttackExecution.constructor, AttackExecution.targetID, AttackExecution.activeDuringSpawnPhase, AttackExecution.init, AttackExecution.refreshToConquer, AttackExecution.retreat, AttackExecution.tick, AttackExecution.rejectIncomingAllianceRequests, AttackExecution.addNeighbors, AttackExecution.handleDeadDefender, AttackExecution.owner, AttackExecution.isActive Content notes: import { renderTroops } from "../../client/Utils"; import { Attack, Difficulty, Execution, Game, MessageType, Player,

