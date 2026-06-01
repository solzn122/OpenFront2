# src/client/components/ModalOverlay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 510 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: ModalOverlay
- Important implementation details: Classes: ModalOverlay Functions/methods: ModalOverlay.createRenderRoot, ModalOverlay.render Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("modal-overlay") export class ModalOverlay extends LitElement { @property({ reflect: true }) public visible: boolean = false; createRenderRoot() { return this; }

