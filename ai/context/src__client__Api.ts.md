# src/client/Api.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7978 bytes
- Dependencies: resources/news.json, zod, ../core/ApiSchemas, ../core/ApiSchemas, ../core/Schemas, ./Auth
- Public interfaces: fetchPlayerById, getUserMe, invalidateUserMe, purchaseWithCurrency, createCheckoutSession, getApiBase, getAudience, hasLinkedAccount, fetchGameById, fetchPlayerLeaderboard, getNews
- Important implementation details: Functions/methods: fetchPlayerById, getUserMe, invalidateUserMe, purchaseWithCurrency, createCheckoutSession, getApiBase, getAudience, hasLinkedAccount, fetchGameById, fetchPlayerLeaderboard, getNews Content notes: import newsItemsFallback from "resources/news.json"; import { z } from "zod"; import type { NewsItem } from "../core/ApiSchemas"; import { NewsItemSchema, PlayerProfile, PlayerProfileSchema, RankedLeaderboardResponse,

