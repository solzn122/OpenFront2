# src/client/components/GameConfigSettings.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 18269 bytes
- Dependencies: lit, lit/decorators.js, ../../core/game/Game, ../../core/Schemas, ../Utils, ./Difficulties, ./FluentSlider, ./map/MapPicker
- Public interfaces: GameConfigSettings
- Important implementation details: Classes: GameConfigSettings Functions/methods: cardClass, stateTextClass, renderTextCardButton, renderSection, renderSectionHeader, GameConfigSettings.createRenderRoot, GameConfigSettings.emit, GameConfigSettings.renderOptionToggle, GameConfigSettings.renderUnitTypeOptions, GameConfigSettings.render Events: new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
      }), map-selected, random-map-selected, difficulty-selected, game-mode-selected, team-count-selected, option-toggle-changed, bots-changed, nations-changed, host-cheat-toggle-changed, unit-toggle-changed Content notes: import { LitElement, SVGTemplateResult, TemplateResult, html, nothing, svg, } from "lit";

