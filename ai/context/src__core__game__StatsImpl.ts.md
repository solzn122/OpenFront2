# src/core/game/StatsImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8068 bytes
- Dependencies: ../Schemas, ../StatsSchemas, ./Game, ./Stats
- Public interfaces: StatsImpl
- Important implementation details: Classes: StatsImpl Functions/methods: _bigint, StatsImpl.numMirvsLaunched, StatsImpl.getPlayerStats, StatsImpl.stats, StatsImpl._makePlayerStats, StatsImpl._addAttack, StatsImpl._addBetrayal, StatsImpl._addBoat, StatsImpl._addBomb, StatsImpl._addGold, StatsImpl._addOtherUnit, StatsImpl._addConquest, StatsImpl._addPlayerKilled, StatsImpl.attack, StatsImpl.attackCancel, StatsImpl.betray, StatsImpl.boatSendTrade, StatsImpl.boatArriveTrade, StatsImpl.boatCapturedTrade, StatsImpl.boatDestroyTrade, StatsImpl.boatSendTroops, StatsImpl.boatArriveTroops, StatsImpl.boatDestroyTroops, StatsImpl.bombLaunch, StatsImpl.bombLand, StatsImpl.bombIntercept, StatsImpl.goldWork, StatsImpl.goldWar, StatsImpl.unitBuild, StatsImpl.unitCapture Content notes: import { AllPlayersStats } from "../Schemas"; import { ATTACK_INDEX_CANCEL, ATTACK_INDEX_RECV, ATTACK_INDEX_SENT, BOAT_INDEX_ARRIVE, BOAT_INDEX_CAPTURE, BOAT_INDEX_DESTROY,

