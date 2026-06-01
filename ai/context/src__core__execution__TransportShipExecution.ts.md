# src/core/execution/TransportShipExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9631 bytes
- Dependencies: ../../client/Utils, ../game/Game, ../game/GameMap, ../game/MotionPlans, ../game/TransportShipUtils, ../pathfinding/PathFinder, ../pathfinding/types, ./AttackExecution
- Public interfaces: TransportShipExecution
- Important implementation details: Classes: TransportShipExecution Functions/methods: TransportShipExecution.constructor, TransportShipExecution.activeDuringSpawnPhase, TransportShipExecution.init, TransportShipExecution.tick, TransportShipExecution.owner, TransportShipExecution.isActive, TransportShipExecution.rejectIncomingAllianceRequests Content notes: import { renderTroops } from "../../client/Utils"; import { Execution, Game, MessageType, Player, PlayerType, TerraNullius,

