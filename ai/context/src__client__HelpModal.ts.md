# src/client/HelpModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 55684 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/AssetUrls, ../core/game/UserSettings, ./components/BaseModal, ./components/Difficulties, ./components/ui/ModalHeader, ./Platform, ./TroubleshootingModal
- Public interfaces: HelpModal
- Important implementation details: Classes: HelpModal Functions/methods: HelpModal.getKeybinds, HelpModal.getKeyLabel, HelpModal.renderKey, HelpModal.render, HelpModal.openTroubleshooting, HelpModal.onOpen, HelpModal.onClose Content notes: import { html } from "lit"; import { customElement, query, state } from "lit/decorators.js"; import { translateText, TUTORIAL_VIDEO_URL } from "../client/Utils"; import { assetUrl } from "../core/AssetUrls"; import { UserSettings } from "../core/game/UserSettings"; import { BaseModal } from "./components/BaseModal"; import "./components/Difficulties"; import { modalHeader } from "./components/ui/ModalHeader";

