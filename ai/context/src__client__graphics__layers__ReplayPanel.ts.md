# src/client/graphics/layers/ReplayPanel.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3258 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/GameView, ../../InputHandler, ../../utilities/ReplaySpeedMultiplier, ../../Utils, ./Layer
- Public interfaces: ShowReplayPanelEvent, ReplayPanel
- Important implementation details: Classes: ShowReplayPanelEvent, ReplayPanel Functions/methods: ShowReplayPanelEvent.constructor, ReplayPanel.createRenderRoot, ReplayPanel.init, ReplayPanel.getTickIntervalMs, ReplayPanel.tick, ReplayPanel.onReplaySpeedChange, ReplayPanel.renderLayer, ReplayPanel.shouldTransform, ReplayPanel.render, ReplayPanel.renderSpeedButton Events: ShowReplayPanelEvent, ReplaySpeedChangeEvent, new ReplaySpeedChangeEvent(value) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { EventBus } from "../../../core/EventBus"; import { GameView } from "../../../core/game/GameView"; import { ReplaySpeedChangeEvent } from "../../InputHandler"; import { defaultReplaySpeedMultiplier, ReplaySpeedMultiplier,

