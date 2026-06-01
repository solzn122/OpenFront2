# src/client/UserSettingModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 31545 bytes
- Dependencies: lit, lit/decorators.js, ../client/Utils, ../core/game/UserSettings, ./components/baseComponents/setting/SettingKeybind, ./components/baseComponents/setting/SettingKeybind, ./components/baseComponents/setting/SettingNumber, ./components/baseComponents/setting/SettingSelect, ./components/baseComponents/setting/SettingSlider, ./components/baseComponents/setting/SettingToggle, ./components/BaseModal, ./components/ui/ModalHeader, ./Platform
- Public interfaces: UserSettingModal
- Important implementation details: Classes: UserSettingModal Functions/methods: UserSettingModal.connectedCallback, UserSettingModal.disconnectedCallback, UserSettingModal.loadKeybindsFromStorage, UserSettingModal.handleKeybindChange, UserSettingModal.getKeyValue, UserSettingModal.getKeyChar, UserSettingModal.triggerEasterEgg, UserSettingModal.toggleDarkMode, UserSettingModal.toggleEmojis, UserSettingModal.toggleAlertFrame, UserSettingModal.toggleFxLayer, UserSettingModal.toggleStructureSprites, UserSettingModal.toggleCursorCostLabel, UserSettingModal.toggleAnonymousNames, UserSettingModal.toggleLobbyIdVisibility, UserSettingModal.toggleLeftClickOpensMenu, UserSettingModal.sliderAttackRatio, UserSettingModal.changeAttackRatioIncrement, UserSettingModal.toggleTerritoryPatterns, UserSettingModal.togglePerformanceOverlay, UserSettingModal.render, UserSettingModal.onClose, UserSettingModal.renderKeybindSettings, UserSettingModal.renderBasicSettings, UserSettingModal.onOpen, UserSettingModal.open Events: new CustomEvent("show-message", {
          detail: {
            message: html`
              <svg
                xmlns="http://www.w3.org/2000/svg"
         , keydown Content notes: import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { formatKeyForDisplay, translateText } from "../client/Utils"; import { getDefaultKeybinds, UserSettings } from "../core/game/UserSettings"; import "./components/baseComponents/setting/SettingKeybind"; import { SettingKeybind } from "./components/baseComponents/setting/SettingKeybind"; import "./components/baseComponents/setting/SettingNumber"; import "./components/baseComponents/setting/SettingSelect";

