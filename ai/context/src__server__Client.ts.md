# src/server/Client.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 779 bytes
- Dependencies: ws, ../core/ApiSchemas, ../core/game/Game, ../core/Schemas
- Public interfaces: Client
- Important implementation details: Classes: Client Functions/methods: Client.constructor Content notes: import WebSocket from "ws"; import { TokenPayload } from "../core/ApiSchemas"; import { Tick } from "../core/game/Game"; import { ClientID, PlayerCosmetics, Winner } from "../core/Schemas"; export class Client { public lastPing: number = Date.now(); public hashes: Map<Tick, number> = new Map(); public reportedWinner: Winner | null = null;

