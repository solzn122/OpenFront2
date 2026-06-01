# src/client/graphics/layers/BuildMenu.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13539 bytes
- Dependencies: lit, lit/decorators.js, ../../../client/Utils, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameView, ../../InputHandler, ../../Transport, ../../Utils, ../TransformHandler, ../UIState, ./Layer
- Public interfaces: buildTable, flattenedBuildTable, BuildMenu
- Important implementation details: Classes: BuildMenu Functions/methods: BuildMenu.init, BuildMenu.tick, BuildMenu.canBuildOrUpgrade, BuildMenu.cost, BuildMenu.count, BuildMenu.sendBuildOrUpgrade, BuildMenu.render, BuildMenu.hideMenu, BuildMenu.showMenu, BuildMenu.refresh, BuildMenu.getBuildableUnits Events: ShowBuildMenuEvent, CloseViewEvent, ShowEmojiMenuEvent, MouseDownEvent, new SendUpgradeStructureIntentEvent(
          buildableUnit.canUpgrade,
          buildableUnit.type,
        ), new BuildUnitIntentEvent(buildableUnit.type, tile, rocketDirectionUp) Content notes: import { css, html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { translateText } from "../../../client/Utils"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { BuildableUnit, BuildMenus,

