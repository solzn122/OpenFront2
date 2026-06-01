# src/client/LocalPersistantStats.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1330 bytes
- Dependencies: ../core/Schemas, ../core/Util
- Public interfaces: startGame, startTime, endGame
- Important implementation details: Functions/methods: getStats, save, startGame, startTime, endGame Content notes: import { GameConfig, GameID, PartialGameRecord } from "../core/Schemas"; import { replacer } from "../core/Util"; export interface LocalStatsData { [key: GameID]: { lobby: Partial<GameConfig>; gameRecord?: PartialGameRecord; }; }

