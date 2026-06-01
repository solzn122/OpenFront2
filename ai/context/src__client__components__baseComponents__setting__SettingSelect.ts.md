# src/client/components/baseComponents/setting/SettingSelect.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2821 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: SettingSelect
- Important implementation details: Classes: SettingSelect Functions/methods: SettingSelect.createRenderRoot, SettingSelect.handleChange, SettingSelect.render Events: new CustomEvent("change", {
        detail: { value: selectedValue },
        bubbles: true,
        composed: true,
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; type SelectOption = { value: number | string; label: string; }; @customElement("setting-select") export class SettingSelect extends LitElement {

