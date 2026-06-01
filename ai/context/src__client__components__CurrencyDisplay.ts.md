# src/client/components/CurrencyDisplay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1149 bytes
- Dependencies: lit, lit/decorators.js, ../Utils, ./CapIcon, ./PlutoniumIcon
- Public interfaces: CurrencyDisplay
- Important implementation details: Classes: CurrencyDisplay Functions/methods: CurrencyDisplay.createRenderRoot, CurrencyDisplay.render Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../Utils"; import "./CapIcon"; import "./PlutoniumIcon"; @customElement("currency-display") export class CurrencyDisplay extends LitElement { @property({ type: Number })

