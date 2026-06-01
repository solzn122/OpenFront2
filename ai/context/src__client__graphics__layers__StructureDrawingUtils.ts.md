# src/client/graphics/layers/StructureDrawingUtils.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 17108 bytes
- Dependencies: pixi.js, ../../../core/AssetUrls, ../../../core/configuration/Config, ../../../core/game/Game, ../../../core/game/GameView, ../TransformHandler
- Public interfaces: STRUCTURE_SHAPES, LEVEL_SCALE_FACTOR, ICON_SCALE_FACTOR_ZOOMED_IN, ICON_SCALE_FACTOR_ZOOMED_OUT, DOTS_ZOOM_THRESHOLD, ZOOM_THRESHOLD, ICON_SIZE, OFFSET_ZOOM_Y, SpriteFactory
- Important implementation details: Classes: SpriteFactory Functions/methods: SpriteFactory.constructor, SpriteFactory.clearCache, SpriteFactory.loadIcon, SpriteFactory.invalidateTextureCache, SpriteFactory.createGhostContainer, SpriteFactory.createUnitContainer, SpriteFactory.createTexture, SpriteFactory.createIcon, SpriteFactory.createRange, SpriteFactory.getImageColored Content notes: import * as PIXI from "pixi.js"; import { assetUrl } from "../../../core/AssetUrls"; import { Theme } from "../../../core/configuration/Config"; import { Cell, PlayerBuildableUnitType, UnitType, } from "../../../core/game/Game";

