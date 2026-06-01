# src/client/LobbySocket.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4343 bytes
- Dependencies: ../core/configuration/ConfigLoader, ../core/Schemas
- Public interfaces: PublicLobbySocket
- Important implementation details: Classes: PublicLobbySocket Functions/methods: getRandomWorkerPath, PublicLobbySocket.constructor, PublicLobbySocket.start, PublicLobbySocket.stop, PublicLobbySocket.connectWebSocket, PublicLobbySocket.handleOpen, PublicLobbySocket.handleMessage, PublicLobbySocket.handleClose, PublicLobbySocket.handleError, PublicLobbySocket.handleConnectError, PublicLobbySocket.scheduleReconnect, PublicLobbySocket.disconnectWebSocket Events: open, message, close, error Content notes: import { getRuntimeClientServerConfig } from "../core/configuration/ConfigLoader"; import { PublicGames, PublicGamesSchema } from "../core/Schemas"; interface LobbySocketOptions { reconnectDelay?: number; maxWsAttempts?: number; pollIntervalMs?: number; } function getRandomWorkerPath(numWorkers: number): string {

