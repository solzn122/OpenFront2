# src/client/components/baseComponents/ranking/RankingHeader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3593 bytes
- Dependencies: lit, lit/decorators.js, ../../../Utils, ./GameInfoRanking
- Public interfaces: RankingHeader
- Important implementation details: Classes: RankingHeader Functions/methods: RankingHeader.onSort, RankingHeader.render, RankingHeader.renderHeaderContent, RankingHeader.renderMultipleChoiceHeaderButton, RankingHeader.createRenderRoot Events: new CustomEvent("sort", { detail: type }) Content notes: import { LitElement, html, nothing } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../../../Utils"; import { RankType } from "./GameInfoRanking"; @customElement("ranking-header") export class RankingHeader extends LitElement { @property({ type: String }) rankType = RankType.Lifetime; private onSort(type: RankType) {

