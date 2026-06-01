# src/client/components/LobbyPlayerView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13676 bytes
- Dependencies: lit, lit/decorators.js, lit/directives/repeat.js, ../../core/configuration/PastelTheme, ../../core/game/Game, ../../core/game/TeamAssignment, ../../core/game/UserSettings, ../../core/Schemas, ../../core/Util, ../Utils
- Public interfaces: LobbyTeamView
- Important implementation details: Classes: LobbyTeamView Functions/methods: LobbyTeamView.willUpdate, LobbyTeamView.render, LobbyTeamView.createRenderRoot, LobbyTeamView.renderTeamMode, LobbyTeamView.renderFreeForAll, LobbyTeamView.renderTeamCard, LobbyTeamView.getTeamList, LobbyTeamView.teamHeaderColor, LobbyTeamView.computeTeamPreview, LobbyTeamView.isCurrentPlayer, LobbyTeamView.teamContainsCurrentPlayer, LobbyTeamView.getClientDisplayName Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { repeat } from "lit/directives/repeat.js"; import { PastelTheme } from "../../core/configuration/PastelTheme"; import { ColoredTeams, Duos, GameMode,

