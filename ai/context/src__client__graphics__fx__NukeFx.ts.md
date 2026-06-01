# src/client/graphics/fx/NukeFx.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2905 bytes
- Dependencies: ../../../core/game/GameView, ../AnimatedSpriteLoader, ./Fx, ./SpriteFx
- Public interfaces: ShockwaveFx, nukeFxFactory
- Important implementation details: Classes: ShockwaveFx Functions/methods: ShockwaveFx.constructor, ShockwaveFx.renderTick, addSpriteInCircle, nukeFxFactory Content notes: import { GameView } from "../../../core/game/GameView"; import { AnimatedSpriteLoader } from "../AnimatedSpriteLoader"; import { Fx, FxType } from "./Fx"; import { FadeFx, SpriteFx } from "./SpriteFx"; /** export class ShockwaveFx implements Fx { private lifeTime: number = 0; constructor(

