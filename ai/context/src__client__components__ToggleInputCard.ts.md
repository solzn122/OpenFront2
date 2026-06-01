# src/client/components/ToggleInputCard.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6082 bytes
- Dependencies: lit, lit/decorators.js, ../Utils
- Public interfaces: ToggleInputCard
- Important implementation details: Classes: ToggleInputCard Functions/methods: cardClass, ToggleInputCard.createRenderRoot, ToggleInputCard.updated, ToggleInputCard.toOptionalNumber, ToggleInputCard.resolveValueOnEnable, ToggleInputCard.emitToggle, ToggleInputCard.render Content notes: import { LitElement, PropertyValues, html, nothing } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../Utils"; const ACTIVE_CARD = "bg-malibu-blue/20 border-malibu-blue/50 shadow-[var(--shadow-malibu-blue)]"; const INACTIVE_CARD = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"; const INPUT_CLASS =

