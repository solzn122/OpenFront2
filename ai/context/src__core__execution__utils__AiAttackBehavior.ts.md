# src/core/execution/utils/AiAttackBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 32962 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../game/TransportShipUtils, ../../PseudoRandom, ../../Util, ../AttackExecution, ../DonateTroopExecution, ../nation/NationAllianceBehavior, ../nation/NationEmojiBehavior, ../TransportShipExecution, ../Util
- Public interfaces: AiAttackBehavior
- Important implementation details: Classes: AiAttackBehavior Functions/methods: AiAttackBehavior.constructor, AiAttackBehavior.maybeAttack, AiAttackBehavior.attackWithRandomBoat, AiAttackBehavior.findRandomBoatTarget, AiAttackBehavior.attackBestTarget, AiAttackBehavior.getAttackStrategies, retaliate, bots, assist, traitor, afk, betray, nuked, victim, hated, veryWeak, weakest, island, donate, AiAttackBehavior.hasNeighboringBotWithStructures, AiAttackBehavior.hasReserveRatioTroops, AiAttackBehavior.hasTriggerRatioTroops, AiAttackBehavior.findIncomingAttackPlayer, AiAttackBehavior.attackBots, density, ownsStructures, AiAttackBehavior.getBotAttackMaxParallelism, AiAttackBehavior.assistAllies, AiAttackBehavior.findTraitor, AiAttackBehavior.maybeBetrayAndAttack Content notes: import { Difficulty, Game, GameMode, GameType, HumansVsNations, Player, PlayerID,

