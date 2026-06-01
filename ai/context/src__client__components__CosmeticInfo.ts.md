# src/client/components/CosmeticInfo.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2498 bytes
- Dependencies: lit, lit/decorators.js, ../Cosmetics, ../Utils
- Public interfaces: CosmeticInfo
- Important implementation details: Classes: CosmeticInfo Functions/methods: CosmeticInfo.createRenderRoot, CosmeticInfo.render Content notes: import { html, LitElement, nothing } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateCosmetic } from "../Cosmetics"; import { translateText } from "../Utils"; const rarityColors: Record<string, string> = { common: "text-white/60", uncommon: "text-green-400", rare: "text-blue-400",

