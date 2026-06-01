# src/client/graphics/layers/UILayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 17582 bytes
- Dependencies: colord, ../../../core/EventBus, ../../../core/configuration/Config, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../InputHandler, ../ProgressBar, ../TransformHandler, ./Layer
- Public interfaces: UILayer
- Important implementation details: Classes: UILayer Functions/methods: UILayer.constructor, UILayer.shouldTransform, UILayer.tick, UILayer.init, clearBox, UILayer.renderLayer, UILayer.renderSelectionBox, UILayer.drawDashedLine, UILayer.redraw, UILayer.onUnitEvent, UILayer.clearIcon, UILayer.drawIcon, UILayer.onUnitSelection, UILayer.drawSelectionBoxMulti, UILayer.paintSelectionBoxAt, UILayer.clearSelectionBox, UILayer.drawSelectionBox, UILayer.drawHealthBar, UILayer.updateProgressBars, UILayer.getProgress, UILayer.deletionProgress, UILayer.createLoadingBar, UILayer.paintCell, UILayer.clearCell Events: UnitSelectionEvent, WarshipSelectionBoxUpdateEvent, WarshipSelectionBoxCompleteEvent, WarshipSelectionBoxCancelEvent, CloseViewEvent Content notes: import { Colord } from "colord"; import { EventBus } from "../../../core/EventBus"; import { Theme } from "../../../core/configuration/Config"; import { UnitType } from "../../../core/game/Game"; import { GameUpdateType } from "../../../core/game/GameUpdates"; import { GameView, UnitView } from "../../../core/game/GameView"; import { CloseViewEvent,

