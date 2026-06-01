# src/client/graphics/layers/UnitDisplay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10308 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../../core/game/UserSettings, ../../InputHandler, ../../Utils, ../UIState, ./Layer
- Public interfaces: UnitDisplay
- Important implementation details: Classes: UnitDisplay Functions/methods: UnitDisplay.createRenderRoot, UnitDisplay.init, UnitDisplay.cost, UnitDisplay.canBuild, UnitDisplay.tick, UnitDisplay.render, UnitDisplay.renderUnitItem Events: new GhostStructureChangedEvent(null), new GhostStructureChangedEvent(unitType), new ToggleStructureEvent([
                    UnitType.MissileSilo,
                    UnitType.SAMLauncher,
                  ]), new ToggleStructureEvent([UnitType.Port]), new ToggleStructureEvent([unitType]), new ToggleStructureEvent(null) Content notes: import { html, LitElement } from "lit"; import { customElement } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { BuildableUnit, BuildMenus, Gold,

