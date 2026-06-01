# src/client/LeaderboardModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4344 bytes
- Dependencies: lit, lit/decorators.js, ./components/BaseModal, ./components/leaderboard/LeaderboardClanTable, ./components/leaderboard/LeaderboardClanTable, ./components/leaderboard/LeaderboardPlayerList, ./components/leaderboard/LeaderboardPlayerList, ./components/ui/ModalHeader, ./Utils
- Public interfaces: LeaderboardModal
- Important implementation details: Classes: LeaderboardModal Functions/methods: LeaderboardModal.onOpen, LeaderboardModal.loadActiveTabData, run, LeaderboardModal.handleTabChange, LeaderboardModal.handleClanDateRangeChange, LeaderboardModal.render Content notes: import { html } from "lit"; import { customElement, query, state } from "lit/decorators.js"; import { BaseModal } from "./components/BaseModal"; import "./components/leaderboard/LeaderboardClanTable"; import type { LeaderboardClanTable } from "./components/leaderboard/LeaderboardClanTable"; import "./components/leaderboard/LeaderboardPlayerList"; import type { LeaderboardPlayerList } from "./components/leaderboard/LeaderboardPlayerList"; import { modalHeader } from "./components/ui/ModalHeader";

