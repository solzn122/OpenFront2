# src/core/worker/WorkerClient.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8154 bytes
- Dependencies: ../AssetUrls, ../game/Game, ../game/GameMap, ../game/GameUpdates, ../Schemas, ../Util, ./WorkerMessages, ./Worker.worker.ts?worker&inline
- Public interfaces: WorkerClient
- Important implementation details: Classes: WorkerClient Functions/methods: WorkerClient.constructor, WorkerClient.handleWorkerMessage, WorkerClient.initialize, WorkerClient.start, WorkerClient.sendTurn, WorkerClient.playerProfile, WorkerClient.playerBorderTiles, WorkerClient.playerInteraction, WorkerClient.playerBuildables, WorkerClient.attackClusteredPositions, WorkerClient.transportShipSpawn, WorkerClient.cleanup Events: message Content notes: import { getCdnBase } from "../AssetUrls"; import { BuildableUnit, Cell, PlayerActions, PlayerBorderTiles, PlayerBuildableUnitType, PlayerID,

