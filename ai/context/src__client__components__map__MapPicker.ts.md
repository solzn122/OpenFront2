# src/client/components/map/MapPicker.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6751 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/game/Game, ../../Utils, ./MapDisplay
- Public interfaces: MapPicker
- Important implementation details: Classes: MapPicker Functions/methods: MapPicker.createRenderRoot, MapPicker.handleMapSelection, MapPicker.preventImageDrag, MapPicker.getWins, MapPicker.renderMapCard, MapPicker.renderAllMaps, MapPicker.renderFeaturedMaps, MapPicker.render Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { Difficulty, GameMapType, mapCategories, } from "../../../core/game/Game";

