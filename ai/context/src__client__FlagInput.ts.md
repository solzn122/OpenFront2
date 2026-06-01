# src/client/FlagInput.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3384 bytes
- Dependencies: lit, lit/decorators.js, ../core/Schemas, ../core/game/UserSettings, ./Cosmetics, ./Utils
- Public interfaces: FlagInput
- Important implementation details: Classes: FlagInput Functions/methods: FlagInput.isDefaultFlagValue, FlagInput.onInputClick, FlagInput.connectedCallback, FlagInput.disconnectedCallback, FlagInput.createRenderRoot, FlagInput.render, FlagInput.updated Events: new CustomEvent("flag-input-click", {
        bubbles: true,
        composed: true,
      }), `${USER_SETTINGS_CHANGED_EVENT}:${FLAG_KEY}` Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { FlagName } from "../core/Schemas"; import { FLAG_KEY, USER_SETTINGS_CHANGED_EVENT, UserSettings, } from "../core/game/UserSettings";

