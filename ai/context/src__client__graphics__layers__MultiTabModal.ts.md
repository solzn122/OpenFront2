# src/client/graphics/layers/MultiTabModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5775 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/configuration/Config, ../../../core/game/Game, ../../../core/game/GameView, ../../MultiTabDetector, ../../Utils, ./Layer
- Public interfaces: MultiTabModal
- Important implementation details: Classes: MultiTabModal Functions/methods: MultiTabModal.createRenderRoot, MultiTabModal.tick, MultiTabModal.init, MultiTabModal.generateFakeIp, MultiTabModal.generateDeviceFingerprint, MultiTabModal.show, MultiTabModal.hide, MultiTabModal.disconnectedCallback, MultiTabModal.render Events: new CustomEvent("penalty-complete", {
        bubbles: true,
        composed: true,
      }) Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { GameEnv } from "../../../core/configuration/Config"; import { GameType } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { MultiTabDetector } from "../../MultiTabDetector"; import { translateText } from "../../Utils"; import { Layer } from "./Layer";

