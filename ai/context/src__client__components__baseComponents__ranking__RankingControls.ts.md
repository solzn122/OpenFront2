# src/client/components/baseComponents/ranking/RankingControls.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4248 bytes
- Dependencies: lit, lit/decorators.js, ../../../Utils, ./GameInfoRanking
- Public interfaces: RankingControls
- Important implementation details: Classes: RankingControls Functions/methods: isEconomyRanking, isTradeRanking, isBombRanking, isWarRanking, isConquestRanking, RankingControls.onSort, RankingControls.renderMainButtons, RankingControls.renderButton, RankingControls.renderWarSubranking, RankingControls.renderEconomySubranking, RankingControls.renderSubButton, RankingControls.render, RankingControls.createRenderRoot Events: new CustomEvent("sort", { detail: type }) Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../../../Utils"; import { RankType } from "./GameInfoRanking"; const economyRankings = new Set([ RankType.TotalGold, RankType.StolenGold, RankType.ConqueredGold,

