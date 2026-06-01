# src/server/Turnstile.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1842 bytes
- Dependencies: zod, ../core/configuration/Config
- Public interfaces: verifyTurnstileToken
- Important implementation details: Functions/methods: verifyTurnstileToken Content notes: import { z } from "zod"; import { ServerConfig } from "../core/configuration/Config"; const TurnstileVerdictSchema = z.discriminatedUnion("status", [ z.object({ status: z.literal("approved") }), z.object({ status: z.literal("rejected"), reason: z.string() }), ]); type TurnstileVerdict = z.infer<typeof TurnstileVerdictSchema>; export type TurnstileResponse =

