# src/client/LanguageModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4686 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/AssetUrls, ./components/baseComponents/Modal, ./components/BaseModal, ./components/ui/ModalHeader
- Public interfaces: LanguageModal
- Important implementation details: Classes: LanguageModal Functions/methods: LanguageModal.render Events: new CustomEvent("language-selected", {
        detail: { lang },
        bubbles: true,
        composed: true,
      }) Content notes: import { html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../client/Utils"; import { assetUrl } from "../core/AssetUrls"; import "./components/baseComponents/Modal"; import { BaseModal } from "./components/BaseModal"; import { modalHeader } from "./components/ui/ModalHeader"; interface LanguageOption {

