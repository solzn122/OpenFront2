# src/server/Archive.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3099 bytes
- Dependencies: zod, ../core/configuration/ConfigLoader, ../core/game/Game, ../core/Schemas, ../core/Util, ./Logger
- Public interfaces: archive, readGameRecord, finalizeGameRecord
- Important implementation details: Functions/methods: archive, readGameRecord, finalizeGameRecord, stripUntrustedFlagUrls Content notes: import z from "zod"; import { getServerConfigFromServer } from "../core/configuration/ConfigLoader"; import { GameType } from "../core/game/Game"; import { GameID, GameRecord, GameRecordSchema, ID,

