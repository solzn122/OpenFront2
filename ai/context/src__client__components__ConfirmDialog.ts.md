# src/client/components/ConfirmDialog.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4077 bytes
- Dependencies: lit, lit/decorators.js, ../Utils
- Public interfaces: ConfirmDialog
- Important implementation details: Classes: ConfirmDialog Functions/methods: ConfirmDialog.createRenderRoot, ConfirmDialog.connectedCallback, ConfirmDialog.disconnectedCallback, ConfirmDialog.render, ConfirmDialog.renderOverlay, ConfirmDialog.handleConfirm, ConfirmDialog.handleCancel Events: new CustomEvent("confirm", { detail: { text: this.text } }), new CustomEvent("cancel") Content notes: import { html, LitElement, render as litRender } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { translateText } from "../Utils"; /** @customElement("confirm-dialog") export class ConfirmDialog extends LitElement { @property() message = ""; @property() variant: "danger" | "warning" = "danger";

