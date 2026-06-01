# src/client/graphics/layers/GameRightSidebar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8799 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../CrazyGamesSDK, ../../InputHandler, ../../Transport, ../../Utils, ./ImmunityTimer, ./Layer, ./ReplayPanel, ./SettingsModal, ./SpawnTimer
- Public interfaces: GameRightSidebar
- Important implementation details: Classes: GameRightSidebar Functions/methods: GameRightSidebar.createRenderRoot, GameRightSidebar.init, GameRightSidebar.connectedCallback, GameRightSidebar.disconnectedCallback, GameRightSidebar.getTickIntervalMs, GameRightSidebar.tick, GameRightSidebar.updateParentOffset, pad, GameRightSidebar.toggleReplayPanel, GameRightSidebar.onPauseButtonClick, GameRightSidebar.onExitButtonClick, GameRightSidebar.onSettingsButtonClick, GameRightSidebar.onFullscreenButtonClick, GameRightSidebar.render, GameRightSidebar.maybeRenderReplayButtons Events: SpawnBarVisibleEvent, ImmunityBarVisibleEvent, SendWinnerEvent, TogglePauseIntentEvent, fullscreenchange, new ShowReplayPanelEvent(this._isReplayVisible, this._isSinglePlayer), new PauseGameIntentEvent(this.isPaused), new ShowSettingsModalEvent(true, this._isSinglePlayer, this.isPaused) Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { GameType } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { crazyGamesSDK } from "../../CrazyGamesSDK"; import { TogglePauseIntentEvent } from "../../InputHandler";

