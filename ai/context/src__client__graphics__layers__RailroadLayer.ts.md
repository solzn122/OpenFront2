# src/client/graphics/layers/RailroadLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15382 bytes
- Dependencies: colord, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../InputHandler, ../TransformHandler, ../UIState, ./Layer, ./RailroadSprites, ./RailroadView
- Public interfaces: RailTileChangedEvent, RailroadLayer
- Important implementation details: Classes: RailTileChangedEvent, RailroadLayer Functions/methods: RailTileChangedEvent.constructor, RailroadLayer.constructor, RailroadLayer.shouldTransform, RailroadLayer.tick, RailroadLayer.updatePendingRailroads, RailroadLayer.updateRailColors, RailroadLayer.init, RailroadLayer.redraw, RailroadLayer.highlightOverlappingRailroads, RailroadLayer.renderLayer, RailroadLayer.renderGhostRailroads, RailroadLayer.onRailroadSnapEvent, RailroadLayer.drawRemainingTiles, RailroadLayer.onRailroadConstruction, RailroadLayer.onRailroadDestruction, RailroadLayer.addRailroad, RailroadLayer.removeRailroad, RailroadLayer.paintRailTile, RailroadLayer.clearRailroad, RailroadLayer.removeRailTile, RailroadLayer.paintRail, RailroadLayer.paintRailRects, RailroadLayer.paintBridge Events: new RailTileChangedEvent(railTile.tile), AlternateViewEvent, new RailTileChangedEvent(railTile.tile) Content notes: import { colord } from "colord"; import { EventBus, GameEvent } from "../../../core/EventBus"; import { PlayerID, UnitType } from "../../../core/game/Game"; import { TileRef } from "../../../core/game/GameMap"; import { GameUpdateType, RailroadConstructionUpdate, RailroadDestructionUpdate,

