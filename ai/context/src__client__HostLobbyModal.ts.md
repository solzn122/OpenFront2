# src/client/HostLobbyModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 35203 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/configuration/ConfigLoader, ../core/EventBus, ../core/game/Game, ../core/Schemas, ../core/Util, ./Auth, ./components/baseComponents/Modal, ./components/BaseModal, ./components/CopyButton, ./components/GameConfigSettings, ./components/LobbyPlayerView, ./components/ToggleInputCard, ./components/ui/ModalHeader, ./CrazyGamesSDK, ./Main, ./TerrainMapFileLoader, ./utilities/GameConfigHelpers
- Public interfaces: HostLobbyModal
- Important implementation details: Classes: HostLobbyModal Functions/methods: HostLobbyModal.constructor, HostLobbyModal.getRandomString, HostLobbyModal.buildLobbyUrl, HostLobbyModal.constructUrl, HostLobbyModal.updateHistory, HostLobbyModal.startLobbyUpdates, HostLobbyModal.stopLobbyUpdates, HostLobbyModal.render, HostLobbyModal.onOpen, HostLobbyModal.leaveLobby, HostLobbyModal.confirmBeforeClose, HostLobbyModal.onClose, HostLobbyModal.handleSelectRandomMap, HostLobbyModal.handleMapSelection, HostLobbyModal.handleDifficultySelection, HostLobbyModal.handleGameModeSelection, HostLobbyModal.handleTeamCountSelection, HostLobbyModal.putGameConfig, HostLobbyModal.startGame, HostLobbyModal.kickPlayer, HostLobbyModal.loadNationCount, createLobby Events: LobbyInfoEvent, new CustomEvent("join-lobby", {
            detail: {
              gameID: this.lobbyId,
              source: "host",
            } as JoinLobbyEvent,
       , new CustomEvent("leave-lobby", {
        detail: { lobby: this.lobbyId },
        bubbles: true,
        composed: true,
      }), new CustomEvent("update-game-config", {
        detail: {
          config: {
            gameMap: this.selectedMap,
            gameMapSize: this.compactMap
  , new CustomEvent("start-game", {
        bubbles: true,
        composed: true,
      }), new CustomEvent("kick-player", {
        detail: { target: clientID },
        bubbles: true,
        composed: true,
      }) Content notes: import { html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { translateText } from "../client/Utils"; import { getRuntimeClientServerConfig } from "../core/configuration/ConfigLoader"; import { EventBus } from "../core/EventBus"; import { Difficulty, GameMapSize,

