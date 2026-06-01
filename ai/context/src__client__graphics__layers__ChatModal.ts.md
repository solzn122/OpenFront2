# src/client/graphics/layers/ChatModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10008 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/game/Game, ../../../core/game/GameView, resources/QuickChat.json, ../../../core/EventBus, ../../InputHandler, ../../Transport, ../../Utils
- Public interfaces: quickChatPhrases, ChatModal
- Important implementation details: Classes: ChatModal Functions/methods: ChatModal.createRenderRoot, ChatModal.getPhrasesForCategory, ChatModal.render, ChatModal.initEventBus, ChatModal.selectCategory, ChatModal.selectPhrase, ChatModal.renderPhrasePreview, ChatModal.selectPlayer, ChatModal.sendChatMessage, ChatModal.onPlayerSearchInput, ChatModal.getSortedFilteredPlayers, ChatModal.getFullQuickChatKey, ChatModal.open, ChatModal.close, ChatModal.setRecipient, ChatModal.setSender, ChatModal.openWithSelection Events: CloseViewEvent, new SendQuickChatEvent(
          this.recipient,
          this.selectedQuickChatKey,
          this.selectedPlayer?.id(),
        ) Content notes: import { LitElement, html } from "lit"; import { customElement, query } from "lit/decorators.js"; import { PlayerType } from "../../../core/game/Game"; import { GameView, PlayerView } from "../../../core/game/GameView"; import quickChatData from "resources/QuickChat.json"; import { EventBus } from "../../../core/EventBus"; import { CloseViewEvent } from "../../InputHandler"; import { SendQuickChatEvent } from "../../Transport";

