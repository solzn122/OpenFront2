# src/client/graphics/layers/SAMRadiusLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10040 bytes
- Dependencies: ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../InputHandler, ../UIState, ./Layer
- Public interfaces: SAMRadiusLayer
- Important implementation details: Classes: SAMRadiusLayer Functions/methods: SAMRadiusLayer.handleToggleStructure, SAMRadiusLayer.constructor, SAMRadiusLayer.init, SAMRadiusLayer.shouldTransform, SAMRadiusLayer.tick, SAMRadiusLayer.renderLayer, SAMRadiusLayer.updateDashAnimation, SAMRadiusLayer.updateVisibility, SAMRadiusLayer.hasChanged, SAMRadiusLayer.getAllSamRanges, SAMRadiusLayer.computeUncoveredArcIntervals, normalize, mergeIntervals, SAMRadiusLayer.drawArcSegments, SAMRadiusLayer.computeCircleUnions, SAMRadiusLayer.drawCirclesUnion Events: ToggleStructureEvent Content notes: import type { EventBus } from "../../../core/EventBus"; import { UnitType } from "../../../core/game/Game"; import { GameUpdateType } from "../../../core/game/GameUpdates"; import type { GameView, PlayerView, UnitView, } from "../../../core/game/GameView";

