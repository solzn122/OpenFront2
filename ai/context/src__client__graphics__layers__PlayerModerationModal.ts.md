# src/client/graphics/layers/PlayerModerationModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5532 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../components/ui/ActionButton, ../../Transport, ../../Utils
- Public interfaces: PlayerModerationModal
- Important implementation details: Classes: PlayerModerationModal Functions/methods: PlayerModerationModal.createRenderRoot, PlayerModerationModal.updated, PlayerModerationModal.closeModal, PlayerModerationModal.canKick, PlayerModerationModal.render Events: new CustomEvent("close"), new SendKickPlayerIntentEvent(targetClientID), new CustomEvent("kicked", { detail: { playerId: String(other.id()) } }) Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { PlayerType } from "../../../core/game/Game"; import { PlayerView } from "../../../core/game/GameView"; import { actionButton } from "../../components/ui/ActionButton"; import { SendKickPlayerIntentEvent } from "../../Transport";

