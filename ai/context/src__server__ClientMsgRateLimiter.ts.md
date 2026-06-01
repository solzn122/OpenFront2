# src/server/ClientMsgRateLimiter.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1809 bytes
- Dependencies: limiter, ../core/Schemas
- Public interfaces: ClientMsgRateLimiter
- Important implementation details: Classes: ClientMsgRateLimiter Functions/methods: ClientMsgRateLimiter.check, ClientMsgRateLimiter.getOrCreate Content notes: import { RateLimiter } from "limiter"; import { ClientID } from "../core/Schemas"; const INTENTS_PER_SECOND = 10; const INTENTS_PER_MINUTE = 150; const MAX_INTENT_SIZE = 2000; const TOTAL_BYTES = 2 * 1024 * 1024; // 2MB per client export type RateLimitResult = "ok" | "limit" | "kick"; interface ClientBucket {

