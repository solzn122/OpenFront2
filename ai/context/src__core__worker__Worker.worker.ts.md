# src/core/worker/Worker.worker.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8110 bytes
- Dependencies: ../AssetUrls, ../GameRunner, ../game/FetchGameMapLoader, ../game/GameUpdates, ./WorkerMessages
- Public interfaces: internal classes/functions (0 classes, 6 functions/methods)
- Important implementation details: Functions/methods: scheduleDrain, drain, onTickUpdate, gameUpdate, sendGameUpdateBatch, sendMessage Events: message, error, unhandledrejection Content notes: import { assetUrl } from "../AssetUrls"; import { createGameRunner, GameRunner } from "../GameRunner"; import { FetchGameMapLoader } from "../game/FetchGameMapLoader"; import { ErrorUpdate, GameUpdateViewData } from "../game/GameUpdates"; import { AttackClusteredPositionsResultMessage, InitializedMessage, MainThreadMessage,

