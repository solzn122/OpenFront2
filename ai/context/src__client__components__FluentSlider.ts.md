# src/client/components/FluentSlider.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6613 bytes
- Dependencies: lit, lit/decorators.js, ../Utils
- Public interfaces: FluentSlider
- Important implementation details: Classes: FluentSlider Functions/methods: FluentSlider.createRenderRoot, FluentSlider.dispatchValueChange, FluentSlider.handleSliderInput, FluentSlider.handleSliderChange, FluentSlider.handleNumberInput, FluentSlider.handleNumberComplete, FluentSlider.handleNumberKeyDown, FluentSlider.enableEditing, FluentSlider.render Events: new CustomEvent("value-changed", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property, query, state } from "lit/decorators.js"; import { translateText } from "../Utils"; @customElement("fluent-slider") export class FluentSlider extends LitElement { createRenderRoot() { return this; }

