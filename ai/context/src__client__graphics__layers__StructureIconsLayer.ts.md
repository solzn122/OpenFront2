# src/client/graphics/layers/StructureIconsLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 29745 bytes
- Dependencies: colord, colord/plugins/a11y, pixi-filters, pixi.js, ../../../core/AssetUrls, ../../../core/configuration/Config, ../../../core/EventBus, ../../../core/execution/Util, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../InputHandler, ../../Transport, ../../Utils, ../TransformHandler, ../UIState, ./Layer, ./StructureDrawingUtils
- Public interfaces: shouldPreserveGhostAfterBuild, StructureIconsLayer
- Important implementation details: Classes: StructureRenderInfo, StructureIconsLayer Functions/methods: shouldPreserveGhostAfterBuild, StructureRenderInfo.constructor, StructureIconsLayer.constructor, StructureIconsLayer.setupRenderer, StructureIconsLayer.rebuildAllIcons, StructureIconsLayer.shouldTransform, StructureIconsLayer.redraw, StructureIconsLayer.init, StructureIconsLayer.rendererOrGLContextLost, StructureIconsLayer.resizeCanvas, StructureIconsLayer.tick, StructureIconsLayer.renderLayer, StructureIconsLayer.renderGhost, StructureIconsLayer.updateGhostPrice, StructureIconsLayer.isGhostReadyForConfirm, StructureIconsLayer.requestConfirmStructure, StructureIconsLayer.createStructure, StructureIconsLayer.moveGhost, StructureIconsLayer.createGhostStructure, StructureIconsLayer.clearGhostStructure, StructureIconsLayer.removeGhostStructure, StructureIconsLayer.resolveGhostRangeLevel, StructureIconsLayer.updateGhostRange, StructureIconsLayer.toggleStructures, StructureIconsLayer.refreshVisibilityStateCache, StructureIconsLayer.findRenderByUnit, StructureIconsLayer.handleActiveUnit, StructureIconsLayer.handleInactiveUnit, StructureIconsLayer.modifyVisibility, StructureIconsLayer.checkForDeletionState Events: ToggleStructuresEvent, MouseMoveEvent, MouseUpEvent, ConfirmGhostStructureEvent, resize, new SendUpgradeStructureIntentEvent(
          this.ghostUnit.buildableUnit.canUpgrade,
          this.ghostUnit.buildableUnit.type,
        ), new BuildUnitIntentEvent(
          unitType,
          this.game.ref(tile.x, tile.y),
          rocketDirectionUp,
        ), new GhostStructureChangedEvent(null) Content notes: import { extend } from "colord"; import a11yPlugin from "colord/plugins/a11y"; import { OutlineFilter } from "pixi-filters"; import * as PIXI from "pixi.js"; import { assetUrl } from "../../../core/AssetUrls"; import { Theme } from "../../../core/configuration/Config"; import { EventBus } from "../../../core/EventBus"; import { wouldNukeBreakAlliance } from "../../../core/execution/Util";

