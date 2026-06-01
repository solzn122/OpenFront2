# src/client/components/baseComponents/setting/SettingNumber.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2090 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: SettingNumber
- Important implementation details: Classes: SettingNumber Functions/methods: SettingNumber.createRenderRoot, SettingNumber.handleInput, SettingNumber.render Events: new CustomEvent("change", {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("setting-number") export class SettingNumber extends LitElement { @property() label = "Setting"; @property() description = ""; @property({ type: Number }) value = 0; @property({ type: Number }) min = 0;

