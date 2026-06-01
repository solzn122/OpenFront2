# src/client/components/LobbyConfigItem.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 845 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: LobbyConfigItem
- Important implementation details: Classes: LobbyConfigItem Functions/methods: LobbyConfigItem.createRenderRoot, LobbyConfigItem.render Content notes: import { LitElement, TemplateResult, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("lobby-config-item") export class LobbyConfigItem extends LitElement { @property({ type: String }) label = ""; @property({ attribute: false }) value: string | TemplateResult = ""; createRenderRoot() { return this;

