# src/client/Matchmaking.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9283 bytes
- Dependencies: lit, lit/decorators.js, ../core/ApiSchemas, ../core/configuration/ConfigLoader, ./Api, ./Auth, ./components/BaseModal, ./components/Difficulties, ./components/ui/ModalHeader, ./Main, ./Utils
- Public interfaces: MatchmakingModal, MatchmakingButton
- Important implementation details: Classes: MatchmakingModal, MatchmakingButton Functions/methods: MatchmakingModal.constructor, MatchmakingModal.createRenderRoot, MatchmakingModal.render, MatchmakingModal.renderInner, MatchmakingModal.connect, MatchmakingModal.getInstanceId, MatchmakingModal.onOpen, MatchmakingModal.onClose, MatchmakingModal.checkGame, MatchmakingButton.constructor, MatchmakingButton.connectedCallback, MatchmakingButton.createRenderRoot, MatchmakingButton.render, MatchmakingButton.handleLoggedInClick, MatchmakingButton.handleLoggedOutClick Events: new CustomEvent("show-message", {
          detail: {
            message: translateText("matchmaking_button.must_login"),
            color: "red",
           , new CustomEvent("join-lobby", {
        detail: {
          gameID: this.gameID,
          source: "matchmaking",
        } as JoinLobbyEvent,
        bubbles: , userMeResponse, new CustomEvent("open-matchmaking") Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { UserMeResponse } from "../core/ApiSchemas"; import { getRuntimeClientServerConfig } from "../core/configuration/ConfigLoader"; import { getUserMe, hasLinkedAccount } from "./Api"; import { getPlayToken } from "./Auth"; import { BaseModal } from "./components/BaseModal"; import "./components/Difficulties";

