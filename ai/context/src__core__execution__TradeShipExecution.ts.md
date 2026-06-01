# src/core/execution/TradeShipExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6599 bytes
- Dependencies: ../../client/Utils, ../game/Game, ../game/GameMap, ../pathfinding/PathFinder, ../pathfinding/types, ../Util
- Public interfaces: TradeShipExecution
- Important implementation details: Classes: TradeShipExecution Functions/methods: TradeShipExecution.constructor, TradeShipExecution.init, TradeShipExecution.tick, TradeShipExecution.complete, TradeShipExecution.isActive, TradeShipExecution.activeDuringSpawnPhase, TradeShipExecution.dstPort Content notes: import { renderNumber } from "../../client/Utils"; import { Execution, Game, MessageType, Player, Unit, UnitType,

