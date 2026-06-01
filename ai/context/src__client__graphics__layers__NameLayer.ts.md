# src/client/graphics/layers/NameLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 17954 bytes
- Dependencies: src/core/AssetUrls, ../../../core/EventBus, ../../../core/PseudoRandom, ../../../core/configuration/Config, ../../../core/game/Game, ../../../core/game/GameView, ../../../core/game/UserSettings, ../../InputHandler, ../../Utils, ../PlayerIcons, ../TransformHandler, ./Layer
- Public interfaces: NameLayer
- Important implementation details: Classes: RenderInfo, NameLayer Functions/methods: RenderInfo.constructor, NameLayer.constructor, NameLayer.shouldTransform, NameLayer.redraw, NameLayer.init, NameLayer.onAlternateViewChange, NameLayer.updateElementVisibility, NameLayer.getTickIntervalMs, NameLayer.tick, NameLayer.renderLayer, NameLayer.createBasePlayerElement, NameLayer.createPlayerElement, NameLayer.renderPlayerInfo, NameLayer.handleEmojiIcon, NameLayer.handleAllianceIcons, NameLayer.handleOtherIcons, NameLayer.handleTraitorIconFlashing Events: AlternateViewEvent Content notes: import { assetUrl } from "src/core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { PseudoRandom } from "../../../core/PseudoRandom"; import { Config, Theme } from "../../../core/configuration/Config"; import { Cell } from "../../../core/game/Game"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { UserSettings } from "../../../core/game/UserSettings"; import { AlternateViewEvent } from "../../InputHandler";

