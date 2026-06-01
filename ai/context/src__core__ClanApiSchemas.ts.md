# src/core/ClanApiSchemas.ts

- Purpose: Project file.
- Category: source
- Size: 4275 bytes
- Dependencies: zod, ./Schemas
- Public interfaces: ClanLeaderboardEntrySchema, ClanLeaderboardResponseSchema, ClanInfoSchema, ClanBrowseResponseSchema, ClanMemberWLSchema, ClanMemberStatsSchema, TEAM_BREAKDOWN_KEYS, RANKED_BREAKDOWN_KEYS, ClanMemberSchema, ClanMembersResponseSchema, ClanJoinRequestSchema, ClanRequestsResponseSchema, ClanBanSchema, ClanBansResponseSchema, JoinClanResponseSchema, ClanStatsSchema
- Important implementation details: Content notes: import { z } from "zod"; import { ClanTagSchema } from "./Schemas"; const RequiredClanTagSchema = ClanTagSchema.unwrap(); export const ClanLeaderboardEntrySchema = z.object({ clanTag: RequiredClanTagSchema, games: z.number(), wins: z.number(), losses: z.number(),

