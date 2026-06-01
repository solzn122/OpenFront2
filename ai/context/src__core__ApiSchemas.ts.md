# src/core/ApiSchemas.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6222 bytes
- Dependencies: zod, ./Base64, ./Schemas, ./StatsSchemas, ./game/Game
- Public interfaces: RefreshResponseSchema, TokenPayloadSchema, ADMIN_ROLES, isAdminRole, DiscordUserSchema, UserMeResponseSchema, PlayerStatsLeafSchema, PlayerStatsTreeSchema, PlayerGameSchema, PlayerProfileSchema, PlayerLeaderboardEntrySchema, PlayerLeaderboardResponseSchema, RankedLeaderboardEntrySchema, RankedLeaderboardResponseSchema, NewsItemSchema
- Important implementation details: Functions/methods: stripClanTagFromUsername, isAdminRole Content notes: import { z } from "zod"; import { base64urlToUuid } from "./Base64"; import { ClanTagSchema } from "./Schemas"; import { BigIntStringSchema, PlayerStatsSchema } from "./StatsSchemas"; import { Difficulty, GameMode, GameType, RankedType } from "./game/Game"; function stripClanTagFromUsername(username: string): string { return username.replace(/^\s*\[[a-zA-Z0-9]{2,5}\]\s*/u, "").trim(); }

