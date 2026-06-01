# src/client/components/CapIcon.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 699 bytes
- Dependencies: lit, lit/decorators.js, ../../core/AssetUrls
- Public interfaces: CapIcon
- Important implementation details: Classes: CapIcon Functions/methods: CapIcon.createRenderRoot, CapIcon.render Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import { assetUrl } from "../../core/AssetUrls"; @customElement("cap-icon") export class CapIcon extends LitElement { @property({ type: Number }) size: number = 48; createRenderRoot() {

