# src/client/graphics/layers/DynamicUILayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5248 bytes
- Dependencies: src/client/Utils, src/core/EventBus, src/core/game/Game, src/core/game/GameUpdates, ../../../core/game/GameView, ../../Transport, ../TransformHandler, ../ui/MoveIndicatorUI, ../ui/NavalTarget, ../ui/NukeTelegraph, ../ui/TextIndicator, ../ui/UIElement, ./Layer
- Public interfaces: DynamicUILayer
- Important implementation details: Classes: DynamicUILayer Functions/methods: DynamicUILayer.constructor, DynamicUILayer.init, DynamicUILayer.shouldTransform, DynamicUILayer.tick, DynamicUILayer.onBonusEvent, DynamicUILayer.onConquestEvent, DynamicUILayer.onUnitEvent, DynamicUILayer.onBombEvent, DynamicUILayer.onTransportShipEvent, DynamicUILayer.renderLayer, DynamicUILayer.renderUIElements, DynamicUILayer.createdThisTick, DynamicUILayer.addNumber Events: MoveWarshipIntentEvent Content notes: import { renderNumber } from "src/client/Utils"; import { EventBus } from "src/core/EventBus"; import { UnitType } from "src/core/game/Game"; import { BonusEventUpdate, ConquestUpdate, GameUpdateType, } from "src/core/game/GameUpdates";

