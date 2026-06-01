# src/server/WorkerLobbyService.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4659 bytes
- Dependencies: http, ws, ../core/Schemas, ./GameManager, ./IPCBridgeSchema, ./Logger
- Public interfaces: WorkerLobbyService
- Important implementation details: Classes: WorkerLobbyService Functions/methods: WorkerLobbyService.constructor, WorkerLobbyService.setupIPCListener, WorkerLobbyService.sendReady, WorkerLobbyService.sendMyLobbiesToMaster, WorkerLobbyService.setupUpgradeHandler, WorkerLobbyService.setupLobbiesWebSocket, WorkerLobbyService.broadcastLobbiesToClients Events: message, upgrade, connection, connection, connection, message, close, error Content notes: import http from "http"; import { WebSocket, WebSocketServer } from "ws"; import { PublicGameInfo, PublicGames } from "../core/Schemas"; import { GameManager } from "./GameManager"; import { MasterMessageSchema, WorkerLobbyList, WorkerReady,

