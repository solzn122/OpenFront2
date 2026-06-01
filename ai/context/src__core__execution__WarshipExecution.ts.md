# src/core/execution/WarshipExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 23716 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../pathfinding/PathFinder, ../pathfinding/types, ../PseudoRandom, ../Util, ./ShellExecution
- Public interfaces: WarshipExecution
- Important implementation details: Classes: WarshipExecution Functions/methods: WarshipExecution.constructor, WarshipExecution.init, WarshipExecution.tick, WarshipExecution.healWarship, WarshipExecution.isFullyHealed, WarshipExecution.shouldStartRepairRetreat, WarshipExecution.findNearestPort, WarshipExecution.findRetreatAggroTarget, WarshipExecution.findTargetUnit, WarshipExecution.findBestTarget, WarshipExecution.startRepairRetreat, WarshipExecution.cancelRepairRetreat, WarshipExecution.handleManualPatrolOverride, WarshipExecution.handleRepairRetreat, WarshipExecution.refreshRetreatPortTile, WarshipExecution.isPortFullOfHealing, WarshipExecution.dockedShipsAtPort, WarshipExecution.applyActiveDockedHealing, WarshipExecution.currentRetreatPort, WarshipExecution.nearestAvailablePortTile, WarshipExecution.findNearestAvailablePort, WarshipExecution.findBetterPortTile, WarshipExecution.findNearestAvailablePortTile, WarshipExecution.shootTarget, WarshipExecution.huntDownTradeShip, WarshipExecution.bestNeighborToward, WarshipExecution.patrol, WarshipExecution.isActive, WarshipExecution.isDocked, WarshipExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, isUnit, OwnerComp, Unit, UnitParams, UnitType,

