# src/client/SinglePlayerModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 25818 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/ApiSchemas, ../core/AssetUrls, ../core/game/Game, ../core/Schemas, ../core/Util, ./Api, ./components/baseComponents/Button, ./components/baseComponents/Modal, ./components/BaseModal, ./components/GameConfigSettings, ./components/ToggleInputCard, ./components/ui/ModalHeader, ./Cosmetics, ./CrazyGamesSDK, ./Main, ./UsernameInput, ./utilities/GameConfigHelpers, ./TerrainMapFileLoader
- Public interfaces: SinglePlayerModal
- Important implementation details: Classes: SinglePlayerModal Functions/methods: SinglePlayerModal.connectedCallback, SinglePlayerModal.disconnectedCallback, SinglePlayerModal.renderNotLoggedInBanner, SinglePlayerModal.applyAchievements, SinglePlayerModal.render, SinglePlayerModal.hasOptionsChanged, SinglePlayerModal.onClose, SinglePlayerModal.onOpen, SinglePlayerModal.handleSelectRandomMap, SinglePlayerModal.handleMapSelection, SinglePlayerModal.handleDifficultySelection, SinglePlayerModal.handleCompactMapChange, SinglePlayerModal.getEndTimerInput, SinglePlayerModal.handleGameModeSelection, SinglePlayerModal.handleTeamCountSelection, SinglePlayerModal.startGame, SinglePlayerModal.loadNationCount Events: userMeResponse, new CustomEvent("join-lobby", {
        detail: {
          gameID: gameID,
          gameStartInfo: {
            gameID: gameID,
            players: [
       Content notes: import { TemplateResult, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { translateText } from "../client/Utils"; import { UserMeResponse } from "../core/ApiSchemas"; import { assetUrl } from "../core/AssetUrls"; import { Difficulty, GameMapSize,

