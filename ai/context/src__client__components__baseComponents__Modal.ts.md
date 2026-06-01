# src/client/components/baseComponents/Modal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5025 bytes
- Dependencies: lit, lit/decorators.js, ../../styles.css?inline
- Public interfaces: OModal
- Important implementation details: Classes: OModal Functions/methods: OModal.open, OModal.close, OModal.disconnectedCallback, OModal.handleTabClick, OModal.renderTabs, OModal.render Content notes: import { LitElement, html, unsafeCSS } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import tailwindStyles from "../../styles.css?inline"; export type OModalTab = { key: string; label: string }; @customElement("o-modal") export class OModal extends LitElement { static styles = [unsafeCSS(tailwindStyles)]; @state() public isModalOpen = false;

