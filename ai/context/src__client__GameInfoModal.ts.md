# src/client/GameInfoModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6015 bytes
- Dependencies: lit, lit/decorators.js, ../core/Schemas, ../core/game/Game, ./Api, ./TerrainMapFileLoader, ./Utils, ./components/baseComponents/ranking/GameInfoRanking, ./components/baseComponents/ranking/PlayerRow, ./components/baseComponents/ranking/RankingControls, ./components/baseComponents/ranking/RankingHeader
- Public interfaces: GameInfoModal
- Important implementation details: Classes: GameInfoModal Functions/methods: GameInfoModal.connectedCallback, GameInfoModal.createRenderRoot, GameInfoModal.render, GameInfoModal.renderRanking, GameInfoModal.renderLoadingAnimation, GameInfoModal.sort, GameInfoModal.updateRanking, GameInfoModal.renderGameInfo, GameInfoModal.renderSummaryTable, GameInfoModal.open, GameInfoModal.close, GameInfoModal.score, GameInfoModal.loadMapImage, GameInfoModal.loadGame Content notes: import { html, LitElement } from "lit"; import { customElement, property, query, state } from "lit/decorators.js"; import { GameEndInfo } from "../core/Schemas"; import { GameMapType } from "../core/game/Game"; import { fetchGameById } from "./Api"; import { terrainMapFileLoader } from "./TerrainMapFileLoader"; import { renderDuration, translateText } from "./Utils"; import {

