# src/client/graphics/layers/ChatIntegration.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3149 bytes
- Dependencies: ../../../core/EventBus, ../../../core/game/GameView, ../../Transport, ../../Utils, ./ChatModal, ./RadialMenuElements
- Public interfaces: ChatIntegration
- Important implementation details: Classes: ChatIntegration Functions/methods: ChatIntegration.constructor, ChatIntegration.setupChatModal, ChatIntegration.createQuickChatMenu, ChatIntegration.shortenText Events: new SendQuickChatEvent(
                    recipient,
                    `${category.id}.${phrase.key}`,
                    undefined,
                  ) Content notes: import { EventBus } from "../../../core/EventBus"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { SendQuickChatEvent } from "../../Transport"; import { translateText } from "../../Utils"; import { ChatModal, QuickChatPhrase, quickChatPhrases } from "./ChatModal"; import { COLORS, MenuElement, MenuElementParams } from "./RadialMenuElements"; export class ChatIntegration { private ctModal: ChatModal;

