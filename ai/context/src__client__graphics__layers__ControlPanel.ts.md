# src/client/graphics/layers/ControlPanel.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 12813 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../../core/game/UserSettings, ../../../core/Schemas, ../../InputHandler, ../../Utils, ../UIState, ./Layer
- Public interfaces: ControlPanel
- Important implementation details: Classes: ControlPanel Functions/methods: ControlPanel.getTickIntervalMs, ControlPanel.init, ControlPanel.tick, ControlPanel.updateTroopIncrease, ControlPanel.onAttackRatioChange, ControlPanel.renderLayer, ControlPanel.shouldTransform, ControlPanel.setVisibile, ControlPanel.handleRatioSliderInput, ControlPanel.handleRatioSliderPointerUp, ControlPanel.calculateTroopBar, ControlPanel.renderMobileTroopBar, ControlPanel.renderDesktopTroopBar, ControlPanel.renderDesktop, ControlPanel.renderMobile, ControlPanel.render, ControlPanel.createRenderRoot Events: AttackRatioEvent Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { Gold } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { UserSettings } from "../../../core/game/UserSettings"; import { ClientID } from "../../../core/Schemas";

