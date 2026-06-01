# src/client/graphics/layers/AttacksDisplay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14844 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../Transport, ../../Utils, ../SpriteLoader, ../TransformHandler, ../UIState, ./Layer
- Public interfaces: AttacksDisplay
- Important implementation details: Classes: AttacksDisplay Functions/methods: AttacksDisplay.createRenderRoot, AttacksDisplay.init, AttacksDisplay.tick, AttacksDisplay.shouldTransform, AttacksDisplay.renderLayer, AttacksDisplay.renderButton, AttacksDisplay.emitCancelAttackIntent, AttacksDisplay.emitBoatCancelIntent, AttacksDisplay.emitGoToPlayerEvent, AttacksDisplay.getBoatSpriteDataURL, AttacksDisplay.attackWarningOnClick, AttacksDisplay.handleRetaliate, AttacksDisplay.renderIncomingAttacks, AttacksDisplay.renderOutgoingAttacks, AttacksDisplay.renderOutgoingLandAttacks, AttacksDisplay.getBoatTargetName, AttacksDisplay.renderBoatIcon, AttacksDisplay.renderBoats, AttacksDisplay.renderIncomingBoats, AttacksDisplay.render Events: new CancelAttackIntentEvent(id), new CancelBoatIntentEvent(id), new GoToPlayerEvent(attacker), new GoToPositionEvent(pos.x, pos.y), new SendAttackIntentEvent(attacker.id(), counterTroops), new GoToUnitEvent(boat), new GoToUnitEvent(boat) Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { MessageType, PlayerType, UnitType } from "../../../core/game/Game"; import { AttackUpdate, GameUpdateType,

