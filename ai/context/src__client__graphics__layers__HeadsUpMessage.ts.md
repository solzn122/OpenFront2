# src/client/graphics/layers/HeadsUpMessage.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5936 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../Utils, ./Layer
- Public interfaces: HeadsUpMessage
- Important implementation details: Classes: HeadsUpMessage Functions/methods: HeadsUpMessage.createRenderRoot, HeadsUpMessage.connectedCallback, HeadsUpMessage.disconnectedCallback, HeadsUpMessage.init, HeadsUpMessage.tick, HeadsUpMessage.getMessage, HeadsUpMessage.render Events: show-message Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { GameType } from "../../../core/game/Game"; import { GameUpdateType } from "../../../core/game/GameUpdates"; import { GameView } from "../../../core/game/GameView"; import { translateText } from "../../Utils"; import { Layer } from "./Layer"; @customElement("heads-up-message")

