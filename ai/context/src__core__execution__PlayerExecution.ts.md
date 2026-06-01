# src/core/execution/PlayerExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 11604 bytes
- Dependencies: ../configuration/Config, ../game/Game, ../game/GameMap, ../Util
- Public interfaces: PlayerExecution
- Important implementation details: Classes: PlayerExecution Functions/methods: PlayerExecution.constructor, PlayerExecution.activeDuringSpawnPhase, PlayerExecution.init, PlayerExecution.tick, PlayerExecution.removeClusters, PlayerExecution.surroundedBySamePlayer, PlayerExecution.isSurrounded, PlayerExecution.removeCluster, PlayerExecution.getCapturingPlayer, PlayerExecution.calculateClusters, PlayerExecution.owner, PlayerExecution.isActive, PlayerExecution.traversalState, PlayerExecution.bumpGeneration, PlayerExecution.floodFillWithGen, PlayerExecution.removeOnDeath Content notes: import { Config } from "../configuration/Config"; import { Cell, Execution, Game, Player, Structures, UnitType,

