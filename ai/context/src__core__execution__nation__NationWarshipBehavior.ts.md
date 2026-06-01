# src/core/execution/nation/NationWarshipBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14112 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../PseudoRandom, ../ConstructionExecution, ./NationEmojiBehavior
- Public interfaces: NationWarshipBehavior
- Important implementation details: Classes: NationWarshipBehavior Functions/methods: NationWarshipBehavior.constructor, NationWarshipBehavior.maybeSpawnWarship, NationWarshipBehavior.warshipSpawnTile, NationWarshipBehavior.trackShipsAndRetaliate, NationWarshipBehavior.trackTransportShipsAndRetaliate, NationWarshipBehavior.trackTradeShipsAndRetaliate, NationWarshipBehavior.trackIncomingTransportsAndRetaliate, NationWarshipBehavior.maybeRetaliateWithWarship, NationWarshipBehavior.maybeMoveWarship, NationWarshipBehavior.counterWarshipInfestation, NationWarshipBehavior.shouldCounterWarshipInfestation, NationWarshipBehavior.isRichPlayer, NationWarshipBehavior.findWarshipInfestationCounterTarget, NationWarshipBehavior.findTeamGameWarshipTarget, NationWarshipBehavior.findFreeForAllWarshipTarget, NationWarshipBehavior.buildCounterWarship, NationWarshipBehavior.cost Content notes: import { AllPlayers, Difficulty, Game, Gold, Player, PlayerType, Unit,

