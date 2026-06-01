# src/client/components/baseComponents/setting/SettingKeybind.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5819 bytes
- Dependencies: lit, lit/decorators.js, ../../../../client/Utils
- Public interfaces: SettingKeybind
- Important implementation details: Classes: SettingKeybind Functions/methods: SettingKeybind.createRenderRoot, SettingKeybind.render, SettingKeybind.displayKey, SettingKeybind.startListening, SettingKeybind.handleKeydown, SettingKeybind.handleBlur, SettingKeybind.resetToDefault, SettingKeybind.unbindKey Events: event, new CustomEvent("change", {
        detail: {
          action: this.action,
          value: this.defaultKey,
        },
        bubbles: true,
        compose, new CustomEvent("change", {
        detail: {
          action: this.action,
          value: "Null",
          key: "",
        },
        bubbles: true,
      Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { formatKeyForDisplay, translateText } from "../../../../client/Utils"; @customElement("setting-keybind") export class SettingKeybind extends LitElement { @property() label = "Setting"; @property() description = ""; @property({ type: String, reflect: true }) action = "";

