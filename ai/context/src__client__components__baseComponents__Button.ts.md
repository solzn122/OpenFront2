# src/client/components/baseComponents/Button.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3546 bytes
- Dependencies: lit, lit/decorators.js, ../../Utils
- Public interfaces: OButton
- Important implementation details: Classes: OButton Functions/methods: OButton.createRenderRoot, OButton.variantClasses, OButton.sizeClasses, OButton.widthClasses, OButton.render Content notes: import { LitElement, TemplateResult, html, nothing } from "lit"; import { customElement, property } from "lit/decorators.js"; import { translateText } from "../../Utils"; type ButtonVariant = "primary" | "secondary" | "danger" | "ghost"; type ButtonSize = "sm" | "md" | "lg"; type ButtonWidth = "auto" | "block" | "blockDesktop" | "fill"; type IconPosition = "left" | "right" | "only"; @customElement("o-button")

