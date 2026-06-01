# src/client/graphics/layers/PlayerActionHandler.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2740 bytes
- Dependencies: ../../../core/EventBus, ../../../core/game/GameMap, ../../../core/game/GameView, ../../Transport, ../UIState
- Public interfaces: PlayerActionHandler
- Important implementation details: Classes: PlayerActionHandler Functions/methods: PlayerActionHandler.constructor, PlayerActionHandler.handleAttack, PlayerActionHandler.handleBoatAttack, PlayerActionHandler.findBestTransportShipSpawn, PlayerActionHandler.handleSpawn, PlayerActionHandler.handleAllianceRequest, PlayerActionHandler.handleExtendAlliance, PlayerActionHandler.handleBreakAlliance, PlayerActionHandler.handleTargetPlayer, PlayerActionHandler.handleDonateGold, PlayerActionHandler.handleDonateTroops, PlayerActionHandler.handleEmbargo, PlayerActionHandler.handleEmoji, PlayerActionHandler.handleDeleteUnit Events: new SendAttackIntentEvent(
        targetId,
        this.uiState.attackRatio * player.troops(),
      ), new SendBoatAttackIntentEvent(
        targetTile,
        this.uiState.attackRatio * player.troops(),
      ), new SendSpawnIntentEvent(tile), new SendAllianceRequestIntentEvent(player, recipient), new SendAllianceExtensionIntentEvent(recipient), new SendBreakAllianceIntentEvent(player, recipient), new SendTargetPlayerIntentEvent(targetId), new SendDonateGoldIntentEvent(recipient, null), new SendDonateTroopsIntentEvent(recipient, amount), new SendEmbargoIntentEvent(recipient, action), new SendEmojiIntentEvent(targetPlayer, emojiIndex), new SendDeleteUnitIntentEvent(unitId) Content notes: import { EventBus } from "../../../core/EventBus"; import { TileRef } from "../../../core/game/GameMap"; import { PlayerView } from "../../../core/game/GameView"; import { SendAllianceExtensionIntentEvent, SendAllianceRequestIntentEvent, SendAttackIntentEvent, SendBoatAttackIntentEvent,

