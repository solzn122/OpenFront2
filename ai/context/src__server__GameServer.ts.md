# src/server/GameServer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 37772 bytes
- Dependencies: ip-anonymize, winston, ws, zod, ../core/ApiSchemas, ../core/configuration/Config, ../core/game/Game, ../core/Schemas, ../core/Util, ./Archive, ./Client, ./ClientMsgRateLimiter
- Public interfaces: GameServer
- Important implementation details: Classes: GameServer Functions/methods: GameServer.constructor, GameServer.updateGameConfig, GameServer.isKicked, GameServer.getClientIdForPersistentId, GameServer.joinClient, GameServer.rejoinClient, GameServer.addListeners, GameServer.setStartsAt, GameServer.numClients, GameServer.numDesyncedClients, GameServer.prestart, GameServer.startLobbyInfoBroadcast, GameServer.stopLobbyInfoBroadcast, GameServer.broadcastLobbyInfo, GameServer.start, GameServer.addIntent, GameServer.sendStartGameMsg, GameServer.endTurn, GameServer.end, GameServer.phase, GameServer.hasStarted, GameServer.gameInfo, GameServer.isPublic, GameServer.kickClient, GameServer.checkDisconnectedStatus, GameServer.isClientDisconnected, GameServer.markClientDisconnected, GameServer.archiveGame, GameServer.handleSynchronization, GameServer.findOutOfSyncClients Events: message, close, error Content notes: import ipAnonymize from "ip-anonymize"; import { Logger } from "winston"; import WebSocket from "ws"; import { z } from "zod"; import { isAdminRole } from "../core/ApiSchemas"; import { GameEnv, ServerConfig } from "../core/configuration/Config"; import { GameType } from "../core/game/Game"; import {

