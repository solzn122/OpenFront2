# src/client/graphics/layers/AlertFrame.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7696 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../../core/game/UserSettings, ./Layer
- Public interfaces: AlertFrame
- Important implementation details: Classes: AlertFrame Functions/methods: AlertFrame.constructor, AlertFrame.createRenderRoot, AlertFrame.init, AlertFrame.tick, AlertFrame.shouldTransform, AlertFrame.onBrokeAllianceUpdate, AlertFrame.activateAlert, AlertFrame.trackOutgoingAttacks, AlertFrame.checkForNewAttacks, AlertFrame.dismissAlert, AlertFrame.render Content notes: import { LitElement, css, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { PlayerType } from "../../../core/game/Game"; import { BrokeAllianceUpdate, GameUpdateType, } from "../../../core/game/GameUpdates"; import { GameView, PlayerView } from "../../../core/game/GameView";

