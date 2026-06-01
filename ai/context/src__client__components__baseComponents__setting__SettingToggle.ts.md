# src/client/components/baseComponents/setting/SettingToggle.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2205 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: SettingToggle
- Important implementation details: Classes: SettingToggle Functions/methods: SettingToggle.createRenderRoot, SettingToggle.handleChange, SettingToggle.render Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("setting-toggle") export class SettingToggle extends LitElement { @property() label = "Setting"; @property() description = ""; @property() id = ""; @property({ type: Boolean, reflect: true }) checked = false;

