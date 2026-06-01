# src/client/TerritoryPatternsModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7453 bytes
- Dependencies: lit, lit, lit/decorators.js, ../core/ApiSchemas, ../core/CosmeticSchemas, ../core/game/UserSettings, ../core/Schemas, ./components/BaseModal, ./components/CosmeticButton, ./components/NotLoggedInWarning, ./components/ui/ModalHeader, ./Cosmetics, ./Utils
- Public interfaces: TerritoryPatternsModal
- Important implementation details: Classes: TerritoryPatternsModal Functions/methods: TerritoryPatternsModal.connectedCallback, TerritoryPatternsModal.disconnectedCallback, TerritoryPatternsModal.updateFromSettings, TerritoryPatternsModal.onUserMe, TerritoryPatternsModal.includedInSearch, TerritoryPatternsModal.handleSearch, TerritoryPatternsModal.renderPatternGrid, TerritoryPatternsModal.render, TerritoryPatternsModal.onOpen, TerritoryPatternsModal.onClose, TerritoryPatternsModal.selectCosmetic, TerritoryPatternsModal.selectPattern, TerritoryPatternsModal.showSkinSelectedPopup, TerritoryPatternsModal.refresh Events: userMeResponse, `${USER_SETTINGS_CHANGED_EVENT}:${PATTERN_KEY}`, new CustomEvent("show-message", {
        detail: {
          message: `${skinName} ${translateText("territory_patterns.selected")}`,
          duration: 2000,
 Content notes: import type { TemplateResult } from "lit"; import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { UserMeResponse } from "../core/ApiSchemas"; import { Cosmetics } from "../core/CosmeticSchemas"; import { PATTERN_KEY, USER_SETTINGS_CHANGED_EVENT,

