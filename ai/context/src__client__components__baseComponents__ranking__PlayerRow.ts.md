# src/client/components/baseComponents/ranking/PlayerRow.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8123 bytes
- Dependencies: lit, lit/decorators.js, src/core/StatsSchemas, ../../../../core/AssetUrls, ../../../Utils, ./GameInfoRanking
- Public interfaces: PlayerRow
- Important implementation details: Classes: PlayerRow Functions/methods: PlayerRow.createRenderRoot, PlayerRow.render, PlayerRow.renderPlayerIcon, PlayerRow.renderCrownIcon, PlayerRow.renderPlayerInfo, PlayerRow.renderScoreAsBar, PlayerRow.renderScoreBar, PlayerRow.renderMultiScoreType, PlayerRow.renderAllBombs, PlayerRow.renderAllTrades, PlayerRow.renderBombScore, PlayerRow.renderGoldScore, PlayerRow.renderTradeScore, PlayerRow.renderPlayerName, PlayerRow.renderTag, PlayerRow.renderIcon Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { GOLD_INDEX_TRADE, GOLD_INDEX_TRAIN_OTHER, GOLD_INDEX_TRAIN_SELF, } from "src/core/StatsSchemas"; import { assetUrl } from "../../../../core/AssetUrls";

