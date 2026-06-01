# src/core/execution/NationExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10938 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../PseudoRandom, ../Schemas, ../Util, ./nation/NationAllianceBehavior, ./nation/NationEmojiBehavior, ./nation/NationMIRVBehavior, ./nation/NationNukeBehavior, ./nation/NationStructureBehavior, ./nation/NationWarshipBehavior, ./SpawnExecution, ./utils/AiAttackBehavior
- Public interfaces: NationExecution
- Important implementation details: Classes: NationExecution Functions/methods: NationExecution.constructor, NationExecution.init, NationExecution.getAttackRate, NationExecution.tick, NationExecution.initializeBehaviors, NationExecution.randomSpawnLand, NationExecution.updateRelationsFromEmbargos, NationExecution.handleEmbargoesToHostileNations, NationExecution.isActive, NationExecution.activeDuringSpawnPhase Content notes: import { Difficulty, Execution, Game, GameMode, Nation, Player, PlayerID,

