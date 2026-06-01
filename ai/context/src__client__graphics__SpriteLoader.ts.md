# src/client/graphics/SpriteLoader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6350 bytes
- Dependencies: colord, ../../core/AssetUrls, ../../core/configuration/Config, ../../core/game/Game, ../../core/game/GameView
- Public interfaces: loadAllSprites, isSpriteReady, colorizeCanvas, getColoredSprite
- Important implementation details: Functions/methods: loadAllSprites, trainTypeToSpriteType, getSpriteForUnit, isSpriteReady, colorizeCanvas, computeSpriteKey, getColoredSprite Content notes: import { Colord } from "colord"; import { assetUrl } from "../../core/AssetUrls"; import { Theme } from "../../core/configuration/Config"; import { TrainType, UnitType } from "../../core/game/Game"; import { UnitView } from "../../core/game/GameView"; const atomBombSprite = assetUrl("sprites/atombomb.png"); const hydrogenBombSprite = assetUrl("sprites/hydrogenbomb.png"); const mirvSprite = assetUrl("sprites/mirv2.png");

