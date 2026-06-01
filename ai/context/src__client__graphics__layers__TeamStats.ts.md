# src/client/graphics/layers/TeamStats.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8332 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../Utils, ./Layer
- Public interfaces: TeamStats
- Important implementation details: Classes: TeamStats Functions/methods: TeamStats.createRenderRoot, TeamStats.init, TeamStats.getTickIntervalMs, TeamStats.tick, TeamStats.updateTeamStats, TeamStats.renderLayer, TeamStats.shouldTransform, TeamStats.render Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { EventBus } from "../../../core/EventBus"; import { GameMode, Team, UnitType } from "../../../core/game/Game"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { formatPercentage, renderNumber,

