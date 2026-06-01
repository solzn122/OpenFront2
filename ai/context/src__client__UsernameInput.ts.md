# src/client/UsernameInput.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7218 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/Util, ../core/validations/username, ./CrazyGamesSDK
- Public interfaces: UsernameInput, genAnonUsername
- Important implementation details: Classes: UsernameInput Functions/methods: UsernameInput.createRenderRoot, UsernameInput.getUsername, UsernameInput.getClanTag, UsernameInput.connectedCallback, UsernameInput.updated, UsernameInput.loadStoredUsername, UsernameInput.render, UsernameInput.handleClanTagChange, UsernameInput.handleUsernameChange, UsernameInput.validateAndStore, UsernameInput.isValid, UsernameInput.showValidationFeedback, UsernameInput.validateOrShowError, genAnonUsername Events: new CustomEvent("show-message", {
          detail: {
            message: translateText("username.tag_invalid_chars"),
            color: "red",
            du, new CustomEvent("show-message", {
          detail: {
            message: translateText("username.invalid_chars"),
            color: "red",
            durati, new CustomEvent("show-message", {
        detail: {
          message,
          color: "red",
          duration: 2500,
        },
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { generateCryptoRandomUUID, translateText } from "../client/Utils"; import { sanitizeClanTag } from "../core/Util"; import { MAX_CLAN_TAG_LENGTH, MAX_USERNAME_LENGTH, MIN_CLAN_TAG_LENGTH,

