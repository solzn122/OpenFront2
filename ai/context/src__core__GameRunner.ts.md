# src/core/GameRunner.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8410 bytes
- Dependencies: ../client/graphics/NameBoxCalculator, ./configuration/ConfigLoader, ./execution/ExecutionManager, ./execution/RecomputeRailClusterExecution, ./execution/WinCheckExecution, ./game/Game, ./game/GameImpl, ./game/GameMap, ./game/GameMapLoader, ./game/GameUpdates, ./game/NationCreation, ./game/TerrainMapLoader, ./PseudoRandom, ./Schemas, ./Util
- Public interfaces: createGameRunner, GameRunner
- Important implementation details: Classes: GameRunner Functions/methods: createGameRunner, GameRunner.constructor, GameRunner.init, GameRunner.addTurn, GameRunner.executeNextTick, GameRunner.pendingTurns, GameRunner.playerBuildables, GameRunner.playerActions, GameRunner.playerProfile, GameRunner.playerBorderTiles, GameRunner.attackClusteredPositions, GameRunner.bestTransportShipSpawn Content notes: import { placeName } from "../client/graphics/NameBoxCalculator"; import { getGameLogicConfig } from "./configuration/ConfigLoader"; import { Executor } from "./execution/ExecutionManager"; import { RecomputeRailClusterExecution } from "./execution/RecomputeRailClusterExecution"; import { WinCheckExecution } from "./execution/WinCheckExecution"; import { AllPlayers, BuildableUnit,

