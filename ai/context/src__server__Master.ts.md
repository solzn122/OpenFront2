# src/server/Master.ts

- Purpose: Server route/API module.
- Category: source
- Size: 4531 bytes
- Dependencies: cluster, crypto, express, express-rate-limit, http, path, url, ../core/configuration/Config, ../core/configuration/ConfigLoader, ./Logger, ./MapPlaylist, ./MasterLobbyService, ./NoStoreHeaders, ./RenderHtml, ./StaticAssetCache
- Public interfaces: startMaster
- Important implementation details: Functions/methods: startMaster API endpoints: USE /api, GET /api/health, GET /api/instance, GET /{*splat} Events: exit Content notes: import cluster from "cluster"; import crypto from "crypto"; import express from "express"; import rateLimit from "express-rate-limit"; import http from "http"; import path from "path"; import { fileURLToPath } from "url"; import { GameEnv } from "../core/configuration/Config";

