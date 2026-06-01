# src/client/components/PurchaseButton.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14313 bytes
- Dependencies: lit, lit/decorators.js, ../../core/CosmeticSchemas, ../Utils, ./CapIcon, ./PlutoniumIcon
- Public interfaces: PurchaseButton
- Important implementation details: Classes: PurchaseButton Functions/methods: PurchaseButton.createRenderRoot, PurchaseButton.handleClick, PurchaseButton.renderDollarButton, PurchaseButton.renderHardButton, PurchaseButton.renderSoftButton, PurchaseButton.render Content notes: import { html, LitElement, nothing } from "lit"; import { customElement, property } from "lit/decorators.js"; import { Product } from "../../core/CosmeticSchemas"; import { translateText } from "../Utils"; import "./CapIcon"; import "./PlutoniumIcon"; const PURCHASE_STYLE_ID = "purchase-button-styles"; if (!document.getElementById(PURCHASE_STYLE_ID)) {

