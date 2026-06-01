# src/client/graphics/layers/PlayerPanel.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 35056 bytes
- Dependencies: lit, lit/decorators.js, resources/countries.json, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameView, ../../../core/Util, ../../components/ui/ActionButton, ../../components/ui/Divider, ../../InputHandler, ../../Transport, ../../Utils, ../UIState, ./ChatModal, ./EmojiTable, ./Layer, ./PlayerModerationModal, ./SendResourceModal
- Public interfaces: PlayerPanel
- Important implementation details: Classes: PlayerPanel Functions/methods: PlayerPanel.setRole, PlayerPanel.createRenderRoot, PlayerPanel.initEventBus, PlayerPanel.init, PlayerPanel.tick, PlayerPanel.show, PlayerPanel.openSendGoldModal, PlayerPanel.hide, PlayerPanel.handleClose, PlayerPanel.handleAllianceClick, PlayerPanel.handleBreakAllianceClick, PlayerPanel.openSendTroops, PlayerPanel.openSendGold, PlayerPanel.handleDonateTroopClick, PlayerPanel.handleDonateGoldClick, PlayerPanel.handleEmbargoClick, PlayerPanel.handleStopEmbargoClick, PlayerPanel.onStopTradingAllClick, PlayerPanel.onStartTradingAllClick, PlayerPanel.handleEmojiClick, PlayerPanel.handleChat, PlayerPanel.handleTargetClick, PlayerPanel.openModeration, PlayerPanel.handleToggleRocketDirection, PlayerPanel.identityChipProps, PlayerPanel.getRelationClass, PlayerPanel.getRelationName, PlayerPanel.getExpiryColorClass, PlayerPanel.getTraitorRemainingSeconds, PlayerPanel.renderTraitorBadge Events: CloseViewEvent, SwapRocketDirectionEvent, MouseUpEvent, new SendAllianceRequestIntentEvent(myPlayer, other), new SendBreakAllianceIntentEvent(myPlayer, other), new SendEmbargoIntentEvent(other, "start"), new SendEmbargoIntentEvent(other, "stop"), new SendEmbargoAllIntentEvent("start"), new SendEmbargoAllIntentEvent("stop"), new SendEmojiIntentEvent(
            AllPlayers,
            flattenedEmojiTable.indexOf(emoji as Emoji),
          ), new SendEmojiIntentEvent(
            other,
            flattenedEmojiTable.indexOf(emoji as Emoji),
          ), new SendTargetPlayerIntentEvent(other.id()), new SwapRocketDirectionEvent(next) Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import Countries from "resources/countries.json" with { type: "json" }; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { AllPlayers, PlayerActions,

