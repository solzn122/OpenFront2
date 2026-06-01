# src/core/game/GameImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 33346 bytes
- Dependencies: ../../client/Utils, ../configuration/Config, ../execution/nation/SharedWaterCache, ../pathfinding/algorithms/AbstractGraph, ../pathfinding/types, ../Schemas, ../StatsSchemas, ../Util, ./AllianceImpl, ./AllianceRequestImpl, ./Game, ./GameMap, ./GameUpdates, ./GameView, ./MotionPlans, ./PlayerImpl, ./RailNetwork, ./RailNetworkImpl, ./Stats, ./StatsImpl, ./TeamAssignment, ./TerraNulliusImpl, ./UnitGrid, ./WaterManager
- Public interfaces: createGame, GameImpl
- Important implementation details: Classes: GameImpl Functions/methods: createGame, GameImpl.constructor, GameImpl.populateTeams, GameImpl.addPlayers, GameImpl.isOnEdgeOfMap, GameImpl.owner, GameImpl.alliances, GameImpl.playerBySmallID, GameImpl.map, GameImpl.miniMap, GameImpl.addUpdate, GameImpl.nextUnitID, GameImpl.setFallout, GameImpl.setWater, GameImpl.queueWaterConversion, GameImpl.unit, GameImpl.units, GameImpl.unitCount, GameImpl.unitInfo, GameImpl.nations, GameImpl.createAllianceRequest, GameImpl.acceptAllianceRequest, GameImpl.rejectAllianceRequest, GameImpl.hasPlayer, GameImpl.config, GameImpl.isPaused, GameImpl.setPaused, GameImpl.inSpawnPhase, GameImpl.ticks, GameImpl.executeNextTick Content notes: import { renderNumber } from "../../client/Utils"; import { Config } from "../configuration/Config"; import { SharedWaterCache } from "../execution/nation/SharedWaterCache"; import { AbstractGraph } from "../pathfinding/algorithms/AbstractGraph"; import { PathFinder } from "../pathfinding/types"; import { AllPlayersStats, ClientID, Winner } from "../Schemas"; import { ATTACK_INDEX_SENT } from "../StatsSchemas"; import { simpleHash } from "../Util";

