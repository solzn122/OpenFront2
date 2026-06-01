# src/server/MasterLobbyService.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5519 bytes
- Dependencies: cluster, winston, ../core/configuration/Config, ../core/Schemas, ../core/Util, ./IPCBridgeSchema, ./Logger, ./MapPlaylist, ./PollingLoop
- Public interfaces: MasterLobbyService
- Important implementation details: Classes: MasterLobbyService Functions/methods: MasterLobbyService.constructor, MasterLobbyService.registerWorker, MasterLobbyService.removeWorker, MasterLobbyService.isHealthy, MasterLobbyService.handleWorkerReady, MasterLobbyService.getAllLobbies, MasterLobbyService.broadcastLobbies, MasterLobbyService.maybeScheduleLobby, MasterLobbyService.sendMessageToWorker Events: message Content notes: import { Worker } from "cluster"; import winston from "winston"; import { ServerConfig } from "../core/configuration/Config"; import { PublicGameInfo, PublicGameType } from "../core/Schemas"; import { generateID } from "../core/Util"; import { MasterCreateGame, MasterLobbiesBroadcast,

