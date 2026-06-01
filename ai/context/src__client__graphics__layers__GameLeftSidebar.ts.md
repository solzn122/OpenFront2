# src/client/graphics/layers/GameLeftSidebar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7129 bytes
- Dependencies: colord, lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../Platform, ../../Utils, ./ImmunityTimer, ./Layer, ./SpawnTimer
- Public interfaces: GameLeftSidebar
- Important implementation details: Classes: GameLeftSidebar Functions/methods: GameLeftSidebar.createRenderRoot, GameLeftSidebar.init, GameLeftSidebar.tick, GameLeftSidebar.toggleLeaderboard, GameLeftSidebar.toggleTeamLeaderboard, GameLeftSidebar.render Events: SpawnBarVisibleEvent, ImmunityBarVisibleEvent Content notes: import { Colord } from "colord"; import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { GameMode, Team } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { Platform } from "../../Platform";

