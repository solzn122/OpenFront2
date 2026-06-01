# src/client/components/leaderboard/LeaderboardPlayerList.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15933 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/ApiSchemas, ../../../core/game/Game, ../../Api, ../../Utils
- Public interfaces: LeaderboardPlayerList
- Important implementation details: Classes: LeaderboardPlayerList Functions/methods: LeaderboardPlayerList.createRenderRoot, LeaderboardPlayerList.ensureLoaded, LeaderboardPlayerList.loadPlayerLeaderboard, LeaderboardPlayerList.handleTabActivated, LeaderboardPlayerList.isVisible, LeaderboardPlayerList.updateStickyVisibility, LeaderboardPlayerList.scheduleStickyVisibilityCheck, LeaderboardPlayerList.handleScroll, LeaderboardPlayerList.maybeLoadMorePlayers, LeaderboardPlayerList.schedulePlayerFillCheck, LeaderboardPlayerList.renderPlayerRow, LeaderboardPlayerList.renderPlayerFooter, LeaderboardPlayerList.renderLoading, LeaderboardPlayerList.renderError, LeaderboardPlayerList.render Content notes: import { html, LitElement, nothing } from "lit"; import { customElement, query, state } from "lit/decorators.js"; import { PlayerLeaderboardEntry } from "../../../core/ApiSchemas"; import { RankedType } from "../../../core/game/Game"; import { fetchPlayerLeaderboard, getUserMe } from "../../Api"; import { translateText } from "../../Utils"; @customElement("leaderboard-player-list") export class LeaderboardPlayerList extends LitElement {

