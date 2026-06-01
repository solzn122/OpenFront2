# src/client/components/BaseModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5379 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: BaseModal, renderLoadingSpinner
- Important implementation details: Classes: BaseModal Functions/methods: BaseModal.createRenderRoot, BaseModal.isOpen, BaseModal.firstUpdated, BaseModal.disconnectedCallback, BaseModal.registerEscapeHandler, BaseModal.unregisterEscapeHandler, BaseModal.onOpen, BaseModal.onClose, BaseModal.confirmBeforeClose, BaseModal.open, BaseModal.close, BaseModal.renderLoadingSpinner, renderLoadingSpinner Events: keydown Content notes: import { html, LitElement, TemplateResult } from "lit"; import { property, query, state } from "lit/decorators.js"; /** export abstract class BaseModal extends LitElement { @state() protected isModalOpen = false; @property({ type: Boolean }) inline = false; /** protected readonly modalContainerClass =

