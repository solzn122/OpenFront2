# src/core/game/GameView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 37800 bytes
- Dependencies: colord, jose, ../configuration/Config, ../CosmeticSchemas, ../PatternDecoder, ../Schemas, ../Util, ../worker/WorkerClient, ./Game, ./GameMap, ./GameUpdates, ./MotionPlans, ./TerrainMapLoader, ./TerraNulliusImpl, ./UnitGrid, ./UserSettings
- Public interfaces: UnitView, PlayerView, GameView
- Important implementation details: Classes: UnitView, PlayerView, GameView Functions/methods: UnitView.constructor, UnitView.createdAt, UnitView.wasUpdated, UnitView.lastTiles, UnitView.lastTile, UnitView.update, UnitView.applyDerivedPosition, UnitView.id, UnitView.targetable, UnitView.markedForDeletion, UnitView.type, UnitView.troops, UnitView.warshipState, UnitView.updateWarshipState, UnitView.isInCombat, UnitView.touch, UnitView.transportShipState, UnitView.updateTransportShipState, UnitView.tile, UnitView.owner, UnitView.isActive, UnitView.reachedTarget, UnitView.hasHealth, UnitView.health, UnitView.isUnderConstruction, UnitView.targetUnitId, UnitView.targetTile, UnitView.missileReadinesss, UnitView.level, UnitView.hasTrainStation Content notes: import { Colord, colord } from "colord"; import { base64url } from "jose"; import { Config } from "../configuration/Config"; import { ColorPalette } from "../CosmeticSchemas"; import { PatternDecoder } from "../PatternDecoder"; import { ClientID, GameID, Player, PlayerCosmetics } from "../Schemas"; import { createRandomName, formatPlayerDisplayName } from "../Util"; import { WorkerClient } from "../worker/WorkerClient";

