# src/server/IPCBridgeSchema.ts

- Purpose: Project file.
- Category: source
- Size: 1871 bytes
- Dependencies: zod, ../core/Schemas
- Public interfaces: WorkerMessageSchema, MasterMessageSchema
- Important implementation details: Content notes: import { z } from "zod"; import { GameConfigSchema, PublicGameInfoSchema, PublicGamesSchema, PublicGameTypeSchema, } from "../core/Schemas"; export type WorkerLobbyList = z.infer<typeof WorkerLobbyListSchema>;

