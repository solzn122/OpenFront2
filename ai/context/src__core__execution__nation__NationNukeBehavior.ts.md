# src/core/execution/nation/NationNukeBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 36523 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../pathfinding/PathFinder, ../../PseudoRandom, ../../Util, ../NukeExecution, ../UpgradeStructureExecution, ../Util, ../utils/AiAttackBehavior, ./NationEmojiBehavior, ./NationUtils
- Public interfaces: NationNukeBehavior
- Important implementation details: Classes: NationNukeBehavior Functions/methods: NationNukeBehavior.constructor, NationNukeBehavior.maybeSendNuke, NationNukeBehavior.findBestNukeTarget, NationNukeBehavior.isRichestNation, NationNukeBehavior.findHighDensityTarget, NationNukeBehavior.findFFACrownTarget, NationNukeBehavior.findStrongestTeamTarget, NationNukeBehavior.getPerceivedNukeCost, NationNukeBehavior.isUnderHeavyAttack, NationNukeBehavior.removeOldNukeEvents, NationNukeBehavior.isTeammateAlreadyNukingThisSpot, NationNukeBehavior.isTrajectoryInterceptableBySam, NationNukeBehavior.isValidNukeTile, NationNukeBehavior.nukeTileScore, NationNukeBehavior.sendNuke, NationNukeBehavior.maybeDestroyEnemySam, NationNukeBehavior.findEnemySamsCoveringTile, NationNukeBehavior.maybeUpgradeHelpfulSilo, NationNukeBehavior.cost Content notes: import { Difficulty, Game, GameMode, Gold, Player, PlayerType, Relation,

