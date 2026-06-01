# src/core/execution/nation/NationMIRVBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9441 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../PseudoRandom, ../../Util, ../MIRVExecution, ../Util, ./NationEmojiBehavior
- Public interfaces: NationMIRVBehavior
- Important implementation details: Classes: NationMIRVBehavior Functions/methods: NationMIRVBehavior.constructor, NationMIRVBehavior.considerMIRV, NationMIRVBehavior.selectCounterMirvTarget, NationMIRVBehavior.selectVictoryDenialTarget, NationMIRVBehavior.selectSteamrollStopTarget, NationMIRVBehavior.wasRecentlyMirved, NationMIRVBehavior.recordMirvHit, NationMIRVBehavior.getValidMirvTargetPlayers, NationMIRVBehavior.isInboundMIRVFrom, NationMIRVBehavior.maybeSendMIRV, NationMIRVBehavior.countCities, NationMIRVBehavior.calculateTerritoryCenter, NationMIRVBehavior.cost Content notes: import { AllPlayers, Difficulty, Game, Gold, Player, PlayerID, PlayerType,

