# src/client/NewsModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3578 bytes
- Dependencies: lit, lit-markdown, lit/decorators.js, resources/version.txt?raw, ../client/Utils, ../core/AssetUrls, ./components/baseComponents/Modal, ./components/BaseModal, ./components/ui/ModalHeader, ./NewsMarkdown
- Public interfaces: NewsModal, NewsButton
- Important implementation details: Classes: NewsModal, NewsButton Functions/methods: NewsModal.render, NewsModal.onOpen, NewsButton.connectedCallback, NewsButton.checkForNewVersion, NewsButton.open, NewsButton.render Content notes: import { html, LitElement } from "lit"; import { resolveMarkdown } from "lit-markdown"; import { customElement, property, query } from "lit/decorators.js"; import version from "resources/version.txt?raw"; import { translateText } from "../client/Utils"; import { assetUrl } from "../core/AssetUrls"; import "./components/baseComponents/Modal"; import { BaseModal } from "./components/BaseModal";

