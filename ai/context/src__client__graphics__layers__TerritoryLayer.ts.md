# src/client/graphics/layers/TerritoryLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 21715 bytes
- Dependencies: @datastructures-js/priority-queue, colord, ../../../core/configuration/Config, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../../core/PseudoRandom, ../../InputHandler, ../FrameProfiler, ../TransformHandler, ./Layer
- Public interfaces: TerritoryLayer
- Important implementation details: Classes: TerritoryLayer Functions/methods: TerritoryLayer.constructor, TerritoryLayer.shouldTransform, TerritoryLayer.paintPlayerBorder, TerritoryLayer.tick, TerritoryLayer.spawnHighlight, TerritoryLayer.drawFocusedPlayerHighlight, TerritoryLayer.drawTeammateHighlights, TerritoryLayer.init, TerritoryLayer.onMouseOver, TerritoryLayer.updateHighlightedTerritory, TerritoryLayer.getTerritoryAtCell, TerritoryLayer.redraw, TerritoryLayer.redrawBorder, TerritoryLayer.initImageData, TerritoryLayer.renderLayer, TerritoryLayer.renderTerritory, TerritoryLayer.paintTerritory, TerritoryLayer.alternateViewColor, TerritoryLayer.paintAlternateViewTile, TerritoryLayer.paintTile, TerritoryLayer.clearTile, TerritoryLayer.clearAlternativeTile, TerritoryLayer.enqueueTile, TerritoryLayer.enqueuePlayerBorder, TerritoryLayer.paintHighlightTile, TerritoryLayer.clearHighlightTile, TerritoryLayer.drawBreathingRing Events: MouseOverEvent, AlternateViewEvent, DragEvent Content notes: import { PriorityQueue } from "@datastructures-js/priority-queue"; import { Colord } from "colord"; import { Theme } from "../../../core/configuration/Config"; import { EventBus } from "../../../core/EventBus"; import { Cell, ColoredTeams, PlayerType,

