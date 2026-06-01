# src/client/graphics/fx/ConquestFx.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 748 bytes
- Dependencies: ../../../core/game/GameUpdates, ../../../core/game/GameView, ../AnimatedSpriteLoader, ./Fx, ./SpriteFx
- Public interfaces: conquestFxFactory
- Important implementation details: Functions/methods: conquestFxFactory Content notes: import { ConquestUpdate } from "../../../core/game/GameUpdates"; import { GameView } from "../../../core/game/GameView"; import { AnimatedSpriteLoader } from "../AnimatedSpriteLoader"; import { Fx, FxType } from "./Fx"; import { FadeFx, SpriteFx } from "./SpriteFx"; /** export function conquestFxFactory( animatedSpriteLoader: AnimatedSpriteLoader,

