# src/client/components/CosmeticButton.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5900 bytes
- Dependencies: lit, lit/decorators.js, ../../core/CosmeticSchemas, ../../core/Schemas, ../Cosmetics, ../Utils, ./CapIcon, ./CosmeticContainer, ./CosmeticInfo, ./PatternPreview, ./PlutoniumIcon
- Public interfaces: CosmeticButton
- Important implementation details: Classes: CosmeticButton Functions/methods: CosmeticButton.createRenderRoot, CosmeticButton.handleClick, CosmeticButton.renderPreview, CosmeticButton.render Content notes: import { html, LitElement, nothing, TemplateResult } from "lit"; import { customElement, property } from "lit/decorators.js"; import { Flag, Pack, Pattern } from "../../core/CosmeticSchemas"; import { PlayerPattern } from "../../core/Schemas"; import { PaymentMethod, ResolvedCosmetic, translateCosmetic,

