# src/client/graphics/layers/Leaderboard.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9034 bytes
- Dependencies: lit, lit/decorators.js, lit/directives/repeat.js, ../../../client/Utils, ../../../core/EventBus, ../../../core/game/GameView, ../../Utils, ../TransformHandler, ./Layer
- Public interfaces: Leaderboard
- Important implementation details: Classes: Leaderboard Functions/methods: Leaderboard.createRenderRoot, Leaderboard.init, Leaderboard.willUpdate, Leaderboard.getTickIntervalMs, Leaderboard.tick, Leaderboard.setSort, Leaderboard.updateLeaderboard, compare, maxTroops, Leaderboard.handleRowClickPlayer, Leaderboard.renderLayer, Leaderboard.shouldTransform, Leaderboard.render Events: new GoToPlayerEvent(player) Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { repeat } from "lit/directives/repeat.js"; import { renderTroops, translateText } from "../../../client/Utils"; import { EventBus } from "../../../core/EventBus"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { formatPercentage, renderNumber } from "../../Utils"; import { GoToPlayerEvent } from "../TransformHandler";

