# src/core/WorkerSchemas.ts

- Purpose: Project file.
- Category: source
- Size: 263 bytes
- Dependencies: zod, ./Schemas
- Public interfaces: CreateGameInputSchema, GameInputSchema
- Important implementation details: Content notes: import { z } from "zod"; import { GameConfigSchema } from "./Schemas"; export const CreateGameInputSchema = GameConfigSchema.or( z .object({}) .strict() .transform((val) => undefined), );

