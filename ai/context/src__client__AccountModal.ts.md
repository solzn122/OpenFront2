# src/client/AccountModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13964 bytes
- Dependencies: lit, lit/decorators.js, ../core/ApiSchemas, ../core/AssetUrls, ../core/configuration/ConfigLoader, ./Api, ./Auth, ./components/baseComponents/stats/DiscordUserHeader, ./components/baseComponents/stats/GameList, ./components/baseComponents/stats/PlayerStatsTable, ./components/baseComponents/stats/PlayerStatsTree, ./components/BaseModal, ./components/CopyButton, ./components/CurrencyDisplay, ./components/Difficulties, ./components/ui/ModalHeader, ./Utils
- Public interfaces: AccountModal
- Important implementation details: Classes: AccountModal Functions/methods: AccountModal.constructor, AccountModal.hasAnyStats, AccountModal.render, AccountModal.renderInner, AccountModal.renderAccountInfo, AccountModal.renderCurrency, AccountModal.renderLoggedInAs, AccountModal.viewGame, AccountModal.renderLogoutButton, AccountModal.renderLoginOptions, AccountModal.handleEmailInput, AccountModal.handleSubmit, AccountModal.handleDiscordLogin, AccountModal.onOpen, AccountModal.onClose, AccountModal.handleLogout, AccountModal.loadPlayerProfile Events: userMeResponse, new CustomEvent("join-changed", { detail: { gameId: encodedGameId } }), new CustomEvent("close", { bubbles: true, composed: true }) Content notes: import { html, TemplateResult } from "lit"; import { customElement, state } from "lit/decorators.js"; import { PlayerGame, PlayerStatsTree, UserMeResponse, } from "../core/ApiSchemas"; import { assetUrl } from "../core/AssetUrls";

