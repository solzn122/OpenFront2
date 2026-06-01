# src/client/graphics/layers/CoordinateGridLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9929 bytes
- Dependencies: ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../InputHandler, ../TransformHandler, ./Layer
- Public interfaces: CoordinateGridLayer
- Important implementation details: Classes: CoordinateGridLayer Functions/methods: toAlphaLabel, computeGrid, CoordinateGridLayer.constructor, CoordinateGridLayer.init, CoordinateGridLayer.shouldTransform, CoordinateGridLayer.renderLayer, CoordinateGridLayer.ensureCacheContext, CoordinateGridLayer.buildCacheKey, CoordinateGridLayer.drawGrid, drawLabel Events: ToggleCoordinateGridEvent, AlternateViewEvent Content notes: import { EventBus } from "../../../core/EventBus"; import { Cell } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { AlternateViewEvent, ToggleCoordinateGridEvent, } from "../../InputHandler"; import { TransformHandler } from "../TransformHandler";

