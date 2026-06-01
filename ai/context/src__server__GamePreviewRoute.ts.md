# src/server/GamePreviewRoute.ts

- Purpose: Server route/API module.
- Category: source
- Size: 5737 bytes
- Dependencies: express, fs/promises, node-html-parser, path, winston, zod, ../core/configuration/Config, ../core/Schemas, ../core/Util, ./GameManager, ./GamePreviewBuilder, ./NoStoreHeaders, ./RenderHtml
- Public interfaces: registerGamePreviewRoute
- Important implementation details: Functions/methods: requestOrigin, registerGamePreviewRoute, fetchPublicGameInfo API endpoints: GET /game/:id Content notes: import type { Express, Request } from "express"; import fsPromises from "fs/promises"; import { parse } from "node-html-parser"; import path from "path"; import type { Logger } from "winston"; import { z } from "zod"; import type { ServerConfig } from "../core/configuration/Config"; import { GAME_ID_REGEX, GameInfo } from "../core/Schemas";

