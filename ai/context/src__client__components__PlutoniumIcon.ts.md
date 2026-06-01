# src/client/components/PlutoniumIcon.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1856 bytes
- Dependencies: lit, lit/decorators.js, ../../core/AssetUrls
- Public interfaces: PlutoniumIcon
- Important implementation details: Classes: PlutoniumIcon Functions/methods: PlutoniumIcon.createRenderRoot, PlutoniumIcon.render Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import { assetUrl } from "../../core/AssetUrls"; const STYLE_ID = "plutonium-icon-styles"; if (!document.getElementById(STYLE_ID)) { const style = document.createElement("style"); style.id = STYLE_ID; style.textContent = `

