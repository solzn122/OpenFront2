# src/client/GameModeSelector.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 17066 bytes
- Dependencies: lit, lit/decorators.js, src/core/configuration/ConfigLoader, ../core/game/Game, ../core/Schemas, ./components/IOSAddToHomeScreenBanner, ./CrazyGamesSDK, ./HostLobbyModal, ./JoinLobbyModal, ./LobbySocket, ./Main, ./SinglePlayerModal, ./TerrainMapFileLoader, ./UsernameInput, ./Utils
- Public interfaces: GameModeSelector
- Important implementation details: Classes: GameModeSelector Functions/methods: GameModeSelector.createRenderRoot, GameModeSelector.validateUsername, GameModeSelector.connectedCallback, GameModeSelector.disconnectedCallback, GameModeSelector.stop, GameModeSelector.handleLobbiesUpdate, GameModeSelector.render, GameModeSelector.renderSpecialLobbyCard, GameModeSelector.renderSmallActionCard, GameModeSelector.renderLobbyCard, GameModeSelector.validateAndJoin, GameModeSelector.getLobbyTitle, formatTeamsOf Events: new CustomEvent("public-lobbies-update", {
        detail: { payload: lobbies },
      }), new CustomEvent("join-lobby", {
        detail: {
          gameID: lobby.gameID,
          source: "public",
          publicLobbyInfo: lobby,
        } as Joi Content notes: import { html, LitElement, nothing, type TemplateResult } from "lit"; import { customElement, state } from "lit/decorators.js"; import { getRuntimeClientServerConfig } from "src/core/configuration/ConfigLoader"; import { Duos, GameMapType, GameMode, HumansVsNations,

