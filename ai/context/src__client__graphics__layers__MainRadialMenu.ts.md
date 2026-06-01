# src/client/graphics/layers/MainRadialMenu.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5488 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameView, ../TransformHandler, ../UIState, ./BuildMenu, ./ChatIntegration, ./EmojiTable, ./Layer, ./PlayerActionHandler, ./PlayerPanel, ./RadialMenu, ./RadialMenuElements, ../../InputHandler
- Public interfaces: MainRadialMenu
- Important implementation details: Classes: MainRadialMenu Functions/methods: MainRadialMenu.getTickIntervalMs, MainRadialMenu.constructor, MainRadialMenu.init, MainRadialMenu.updatePlayerActions, MainRadialMenu.tick, MainRadialMenu.renderLayer, MainRadialMenu.shouldTransform, MainRadialMenu.closeMenu Events: ContextMenuEvent Content notes: import { LitElement } from "lit"; import { customElement } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { PlayerActions } from "../../../core/game/Game"; import { TileRef } from "../../../core/game/GameMap"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { TransformHandler } from "../TransformHandler";

