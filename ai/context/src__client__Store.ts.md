# src/client/Store.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5610 bytes
- Dependencies: lit, lit, lit/decorators.js, ../core/ApiSchemas, ../core/CosmeticSchemas, ../core/game/UserSettings, ./components/BaseModal, ./components/CosmeticButton, ./components/NotLoggedInWarning, ./components/ui/ModalHeader, ./Cosmetics, ./Utils
- Public interfaces: StoreModal
- Important implementation details: Classes: StoreModal Functions/methods: StoreModal.connectedCallback, StoreModal.onUserMe, StoreModal.renderHeader, StoreModal.renderPatternGrid, StoreModal.renderFlagGrid, StoreModal.renderPackGrid, StoreModal.render, StoreModal.open, StoreModal.close, StoreModal.refresh Events: userMeResponse Content notes: import type { TemplateResult } from "lit"; import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { UserMeResponse } from "../core/ApiSchemas"; import { Cosmetics } from "../core/CosmeticSchemas"; import { UserSettings } from "../core/game/UserSettings"; import { BaseModal } from "./components/BaseModal"; import "./components/CosmeticButton";

