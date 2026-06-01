# src/client/JoinLobbyModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 33827 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/AssetUrls, ../core/EventBus, ../core/Schemas, ../core/configuration/ConfigLoader, ../core/game/Game, ./Api, ./CrazyGamesSDK, ./Main, ./TerrainMapFileLoader, ./Utils, ./components/BaseModal, ./components/CopyButton, ./components/LobbyConfigItem, ./components/LobbyPlayerView, ./components/ui/ModalHeader, ./utilities/GameConfigHelpers
- Public interfaces: JoinLobbyModal
- Important implementation details: Classes: JoinLobbyModal Functions/methods: JoinLobbyModal.isPrivateLobby, JoinLobbyModal.render, JoinLobbyModal.renderJoinForm, JoinLobbyModal.open, JoinLobbyModal.handleUrlJoin, JoinLobbyModal.startTrackingLobby, JoinLobbyModal.resetTrackingState, JoinLobbyModal.leaveLobby, JoinLobbyModal.confirmBeforeClose, JoinLobbyModal.onClose, JoinLobbyModal.disconnectedCallback, JoinLobbyModal.closeAndLeave, JoinLobbyModal.closeWithoutLeaving, JoinLobbyModal.updateHistory, JoinLobbyModal.renderGameConfig, JoinLobbyModal.renderDisabledUnits, JoinLobbyModal.renderHostCheats, JoinLobbyModal.updateFromLobby, JoinLobbyModal.startLobbyUpdates, JoinLobbyModal.stopLobbyUpdates, JoinLobbyModal.syncCountdownTimer, JoinLobbyModal.clearCountdownTimer, JoinLobbyModal.checkForJoinTimeout, JoinLobbyModal.loadNationCount, JoinLobbyModal.isValidLobbyId, JoinLobbyModal.normalizeLobbyId, JoinLobbyModal.sanitizeForLog, JoinLobbyModal.extractLobbyIdFromUrl, JoinLobbyModal.setLobbyId, JoinLobbyModal.handleChange Events: new CustomEvent("leave-lobby", {
        detail: { lobby: this.currentLobbyId },
        bubbles: true,
        composed: true,
      }), LobbyInfoEvent, new CustomEvent("show-message", {
        detail: {
          message: translateText("public_lobby.join_timeout"),
          color: "red",
          duration: 3, new CustomEvent("show-message", {
        detail: { message, duration: 3000, color },
      }), new CustomEvent("join-lobby", {
          detail: {
            gameID: lobbyId,
            source: "private",
          } as JoinLobbyEvent,
          bubbles, new CustomEvent("join-lobby", {
        detail: {
          gameID: lobbyId,
          gameRecord: parsed.data,
          source: "private",
        } as JoinLo Content notes: import { html, TemplateResult } from "lit"; import { customElement, property, query, state } from "lit/decorators.js"; import { calculateServerTimeOffset, getMapName, getSecondsUntilServerTimestamp, getServerNow, renderDuration,

