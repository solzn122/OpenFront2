# src/core/CosmeticSchemas.ts

- Purpose: Project file.
- Category: source
- Size: 2672 bytes
- Dependencies: jose, zod/v4, ./PatternDecoder, ./Schemas
- Public interfaces: ProductSchema, CosmeticNameSchema, PatternDataSchema, ColorPaletteSchema, PatternSchema, FlagSchema, PackSchema, CosmeticsSchema, DefaultPattern
- Important implementation details: Content notes: import { base64url } from "jose"; import { z } from "zod/v4"; import { decodePatternData } from "./PatternDecoder"; import { PlayerPattern } from "./Schemas"; export type Cosmetics = z.infer<typeof CosmeticsSchema>; export type Pattern = z.infer<typeof PatternSchema>; export type Flag = z.infer<typeof FlagSchema>; export type Pack = z.infer<typeof PackSchema>;

