# src/client/TroubleshootingModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8459 bytes
- Dependencies: lit, lit/decorators.js, ../core/AssetUrls, ./Utils, ./components/BaseModal, ./components/baseComponents/Modal, ./components/ui/ModalHeader, ./utilities/Diagnostic
- Public interfaces: TroubleshootingModal
- Important implementation details: Classes: TroubleshootingModal Functions/methods: TroubleshootingModal.loadDiagnostics, TroubleshootingModal.render, TroubleshootingModal.infoTip, TroubleshootingModal.onOpen, TroubleshootingModal.section, TroubleshootingModal.row, TroubleshootingModal.copyDiagnostics, TroubleshootingModal.describeRenderer, TroubleshootingModal.close Events: new CustomEvent("show-message", {
        detail: {
          message: html`${translateText("troubleshooting.copied_to_clipboard")}`,
          type: "info",
   Content notes: import { html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { assetUrl } from "../core/AssetUrls"; import { translateText } from "./Utils"; import { BaseModal } from "./components/BaseModal"; import "./components/baseComponents/Modal"; import { modalHeader } from "./components/ui/ModalHeader"; import {

