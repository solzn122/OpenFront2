# src/client/graphics/layers/NukeTrajectoryPreviewLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14473 bytes
- Dependencies: ../../../core/EventBus, ../../../core/execution/Util, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameView, ../../../core/pathfinding/PathFinder, ../../InputHandler, ../TransformHandler, ../UIState, ./Layer
- Public interfaces: NukeTrajectoryPreviewLayer
- Important implementation details: Classes: NukeTrajectoryPreviewLayer Functions/methods: NukeTrajectoryPreviewLayer.constructor, NukeTrajectoryPreviewLayer.shouldTransform, NukeTrajectoryPreviewLayer.init, NukeTrajectoryPreviewLayer.tick, NukeTrajectoryPreviewLayer.renderLayer, NukeTrajectoryPreviewLayer.updateTrajectoryPreview, NukeTrajectoryPreviewLayer.updateTrajectoryPath, NukeTrajectoryPreviewLayer.drawTrajectoryPreview, outlineDash, outlineAndStroke, drawUntargetableCircle, drawTargetedX Events: MouseMoveEvent, GhostStructureChangedEvent, SwapRocketDirectionEvent Content notes: import { EventBus } from "../../../core/EventBus"; import { listNukeBreakAlliance } from "../../../core/execution/Util"; import { UnitType } from "../../../core/game/Game"; import { TileRef } from "../../../core/game/GameMap"; import { GameView } from "../../../core/game/GameView"; import { UniversalPathFinding } from "../../../core/pathfinding/PathFinder"; import { GhostStructureChangedEvent,

