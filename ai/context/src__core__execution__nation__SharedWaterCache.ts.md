# src/core/execution/nation/SharedWaterCache.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3296 bytes
- Dependencies: ../../game/Game
- Public interfaces: SharedWaterCache
- Important implementation details: Classes: SharedWaterCache Functions/methods: SharedWaterCache.constructor, SharedWaterCache.get, SharedWaterCache.build Content notes: import { Game, Player, PlayerType } from "../../game/Game"; /** const TTL_TICKS = 30; /** Sentinel added to a player's shared-water set to signal "touches ocean". */ const OCEAN_SENTINEL = -1; export class SharedWaterCache { private tick: number = -Infinity; private byPlayer: Map<Player, Set<number> | null> | null = null;

