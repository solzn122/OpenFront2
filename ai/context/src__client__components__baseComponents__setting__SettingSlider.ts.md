# src/client/components/baseComponents/setting/SettingSlider.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4180 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: SettingSlider
- Important implementation details: Classes: SettingSlider Functions/methods: SettingSlider.createRenderRoot, SettingSlider.handleInput, SettingSlider.updateSliderStyle, SettingSlider.firstUpdated, SettingSlider.render Events: new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("setting-slider") export class SettingSlider extends LitElement { @property() label = "Setting"; @property() description = ""; @property({ type: Number }) value = 0; @property({ type: Number }) min = 0;

