# src/client/PatternInput.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4887 bytes
- Dependencies: lit, lit/decorators.js, ../core/game/UserSettings, ../core/Schemas, ./components/PatternPreview, ./Cosmetics, ./CrazyGamesSDK, ./Utils
- Public interfaces: PatternInput
- Important implementation details: Classes: PatternInput Functions/methods: PatternInput.onInputClick, PatternInput.connectedCallback, PatternInput.disconnectedCallback, PatternInput.createRenderRoot, PatternInput.getIsDefaultPattern, PatternInput.shouldShowSelectLabel, PatternInput.applyAdaptiveSize, PatternInput.updated, PatternInput.render Events: new CustomEvent("pattern-input-click", {
        bubbles: true,
        composed: true,
      }), `${USER_SETTINGS_CHANGED_EVENT}:${PATTERN_KEY}` Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { PATTERN_KEY, USER_SETTINGS_CHANGED_EVENT, } from "../core/game/UserSettings"; import { PlayerPattern } from "../core/Schemas"; import { renderPatternPreview } from "./components/PatternPreview";

