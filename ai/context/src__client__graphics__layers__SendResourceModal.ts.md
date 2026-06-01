# src/client/graphics/layers/SendResourceModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 18716 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/GameView, ../../../core/Util, ../../Transport, ../../Utils, ../UIState
- Public interfaces: SendResourceModal
- Important implementation details: Classes: SendResourceModal Functions/methods: SendResourceModal.createRenderRoot, SendResourceModal.connectedCallback, SendResourceModal.updated, SendResourceModal.closeModal, SendResourceModal.confirm, SendResourceModal.toNum, SendResourceModal.getTotalNumber, SendResourceModal.sanitizePercent, SendResourceModal.getCapacityLeft, SendResourceModal.getPercentBasis, SendResourceModal.limitAmount, SendResourceModal.clampSend, SendResourceModal.percentOfBasis, SendResourceModal.keepAfter, SendResourceModal.getFillColor, SendResourceModal.getMinKeepRatio, SendResourceModal.isTargetAlive, SendResourceModal.isSenderAlive, SendResourceModal.renderHeader, SendResourceModal.renderAvailable, SendResourceModal.renderPresets, SendResourceModal.renderSlider, SendResourceModal.renderCapacityNote, SendResourceModal.renderSummary, SendResourceModal.renderActions, SendResourceModal.renderDeadNote, SendResourceModal.renderSliderStyles, SendResourceModal.render Events: new CustomEvent("close"), new SendDonateTroopsIntentEvent(target, amount), new SendDonateGoldIntentEvent(target, BigInt(amount)), new CustomEvent("confirm", {
        detail: { amount, closePanel: true, success: true },
      }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { EventBus } from "../../../core/EventBus"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { within } from "../../../core/Util"; import { SendDonateGoldIntentEvent, SendDonateTroopsIntentEvent,

