# src/client/graphics/layers/StructureLayer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9711 bytes
- Dependencies: colord, ../../../core/AssetUrls, ../../../core/configuration/Config, ../../../core/EventBus, ../TransformHandler, ./Layer, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameUpdates, ../../../core/game/GameView
- Public interfaces: StructureLayer
- Important implementation details: Classes: StructureLayer Functions/methods: StructureLayer.constructor, StructureLayer.loadIcon, StructureLayer.loadIconData, StructureLayer.shouldTransform, StructureLayer.tick, StructureLayer.init, StructureLayer.redraw, StructureLayer.renderLayer, StructureLayer.isUnitTypeSupported, StructureLayer.drawBorder, StructureLayer.handleUnitRendering, StructureLayer.renderIcon, StructureLayer.paintCell, StructureLayer.clearCell Content notes: import { colord, Colord } from "colord"; import { assetUrl } from "../../../core/AssetUrls"; import { Theme } from "../../../core/configuration/Config"; import { EventBus } from "../../../core/EventBus"; import { TransformHandler } from "../TransformHandler"; import { Layer } from "./Layer"; import { Cell, UnitType } from "../../../core/game/Game"; import { euclDistFN, isometricDistFN } from "../../../core/game/GameMap";

