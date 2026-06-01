# src/client/graphics/fx/SpriteFx.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2535 bytes
- Dependencies: ../../../core/configuration/Config, ../../../core/game/GameView, ../AnimatedSprite, ../AnimatedSpriteLoader, ./Fx
- Public interfaces: FadeFx, SpriteFx
- Important implementation details: Classes: FadeFx, SpriteFx Functions/methods: fadeInOut, FadeFx.constructor, FadeFx.renderTick, SpriteFx.constructor, SpriteFx.setPosition, SpriteFx.renderTick, SpriteFx.getElapsedTime, SpriteFx.getDuration Content notes: import { Theme } from "../../../core/configuration/Config"; import { PlayerView } from "../../../core/game/GameView"; import { AnimatedSprite } from "../AnimatedSprite"; import { AnimatedSpriteLoader } from "../AnimatedSpriteLoader"; import { Fx, FxType } from "./Fx"; function fadeInOut( t: number, fadeIn: number = 0.3,

