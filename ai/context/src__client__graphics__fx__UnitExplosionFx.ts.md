# src/client/graphics/fx/UnitExplosionFx.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1358 bytes
- Dependencies: ../../../core/game/GameView, ../AnimatedSpriteLoader, ./Fx, ./SpriteFx, ./Timeline
- Public interfaces: UnitExplosionFx
- Important implementation details: Classes: UnitExplosionFx Functions/methods: UnitExplosionFx.constructor, UnitExplosionFx.renderTick Content notes: import { GameView } from "../../../core/game/GameView"; import { AnimatedSpriteLoader } from "../AnimatedSpriteLoader"; import { Fx, FxType } from "./Fx"; import { SpriteFx } from "./SpriteFx"; import { Timeline } from "./Timeline"; /** export class UnitExplosionFx implements Fx { private timeline = new Timeline();

