# src/client/components/CosmeticContainer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14439 bytes
- Dependencies: lit, lit/decorators.js, ../../core/CosmeticSchemas, ./PurchaseButton
- Public interfaces: CosmeticContainer
- Important implementation details: Classes: CosmeticContainer Functions/methods: CosmeticContainer._ensureBackdrop, CosmeticContainer.createRenderRoot, CosmeticContainer.applyHostStyles, CosmeticContainer._ensureLegendaryElements, CosmeticContainer._showLoadingOverlay, CosmeticContainer._hideLoadingOverlay, CosmeticContainer._updateNameEl, CosmeticContainer.connectedCallback, CosmeticContainer.disconnectedCallback, CosmeticContainer.updated, CosmeticContainer.render Events: mouseenter, mouseleave, click Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import { Product } from "../../core/CosmeticSchemas"; import "./PurchaseButton"; type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary" | string; interface RarityConfig { gradient: string; border: string;

