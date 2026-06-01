# src/client/components/leaderboard/LeaderboardClanTable.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15138 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/ClanApiSchemas, ../../ClanApi, ../../Utils
- Public interfaces: LeaderboardClanTable
- Important implementation details: Classes: LeaderboardClanTable Functions/methods: LeaderboardClanTable.createRenderRoot, LeaderboardClanTable.ensureLoaded, LeaderboardClanTable.loadClanLeaderboard, LeaderboardClanTable.handleSort, LeaderboardClanTable.getSortedClans, LeaderboardClanTable.renderLoading, LeaderboardClanTable.renderError, LeaderboardClanTable.renderNoData, LeaderboardClanTable.render Events: new CustomEvent<{ start: string; end: string }>("date-range-change", {
          detail: { start: data.start, end: data.end },
          bubbles: true,
         Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { ClanLeaderboardEntry, ClanLeaderboardResponse, } from "../../../core/ClanApiSchemas"; import { fetchClanLeaderboard } from "../../ClanApi"; import { translateText } from "../../Utils";

