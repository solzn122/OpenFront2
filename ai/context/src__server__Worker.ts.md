# src/server/Worker.ts

- Purpose: Server route/API module.
- Category: source
- Size: 19591 bytes
- Dependencies: compression, express, express-rate-limit, http, ip-anonymize, path, url, ws, zod, ../core/configuration/ConfigLoader, ../core/game/Game, ../core/Schemas, ../core/Util, ../core/WorkerSchemas, ./Archive, ./Client, ./GameManager, ./GamePreviewRoute, ./jwt, ./Logger, ../core/configuration/Config, ./MapPlaylist, ./NoStoreHeaders, ./PollingLoop, ./PrivilegeRefresher, ./StaticAssetCache, ./Turnstile, ./WorkerLobbyService, ./WorkerMetrics
- Public interfaces: startWorker
- Important implementation details: Functions/methods: startWorker, startMatchmakingPolling, generateGameIdForWorker, getClientIp API endpoints: USE /maps, USE /api, POST /api/create_game/:id, GET /api/game/:id/exists, GET /api/game/:id, POST /api/archive_singleplayer_game Events: connection, message, error, close, uncaughtException, unhandledRejection Content notes: import compression from "compression"; import express, { NextFunction, Request, Response } from "express"; import rateLimit from "express-rate-limit"; import http from "http"; import ipAnonymize from "ip-anonymize"; import path from "path"; import { fileURLToPath } from "url"; import { WebSocket, WebSocketServer } from "ws";

