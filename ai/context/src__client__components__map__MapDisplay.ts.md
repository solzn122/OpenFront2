# src/client/components/map/MapDisplay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5954 bytes
- Dependencies: lit, lit/decorators.js, ../../../../resources/images/MedalIconWhite.svg?raw, ../../../core/game/Game, ../../TerrainMapFileLoader, ../../Utils
- Public interfaces: MapDisplay
- Important implementation details: Classes: MapDisplay Functions/methods: MapDisplay.createRenderRoot, MapDisplay.connectedCallback, MapDisplay.disconnectedCallback, MapDisplay.loadMapData, MapDisplay.handleKeydown, MapDisplay.preventImageDrag, MapDisplay.render, MapDisplay.renderMedals, MapDisplay.readWins Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import medalIconRaw from "../../../../resources/images/MedalIconWhite.svg?raw"; import { Difficulty, GameMapType } from "../../../core/game/Game"; import { terrainMapFileLoader } from "../../TerrainMapFileLoader"; import { translateText } from "../../Utils"; const medalMaskUrl = `url('data:image/svg+xml;utf8,${encodeURIComponent(medalIconRaw)}') no-repeat center / contain`; @customElement("map-display")

