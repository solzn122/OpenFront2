# src/server/GamePreviewBuilder.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9098 bytes
- Dependencies: zod, ../core/AssetUrls, ../core/Schemas, ../core/Util, ../core/game/Game, ./RuntimeAssetManifest
- Public interfaces: PlayerInfoSchema, ExternalGameInfoSchema, escapeHtml, buildPreview
- Important implementation details: Functions/methods: formatDuration, normalizeTimestamp, formatDateTimeParts, parseWinner, countActivePlayers, escapeHtml, buildPreview, buildAbsoluteAssetUrl Content notes: import { z } from "zod"; import { buildAssetUrl } from "../core/AssetUrls"; import { ClanTagSchema, GameInfo, UsernameSchema } from "../core/Schemas"; import { formatPlayerDisplayName } from "../core/Util"; import { GameMode } from "../core/game/Game"; import { getRuntimeAssetManifest } from "./RuntimeAssetManifest"; export const PlayerInfoSchema = z.object({ clientID: z.string().optional(),

