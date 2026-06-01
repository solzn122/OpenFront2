# src/client/graphics/layers/InGamePromo.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5145 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/game/GameView, ../../CrazyGamesSDK, ./Layer
- Public interfaces: InGamePromo
- Important implementation details: Classes: InGamePromo Functions/methods: InGamePromo.createRenderRoot, InGamePromo.init, InGamePromo.tick, InGamePromo.destroyBottomRail, InGamePromo.showAd, InGamePromo.showCrazyGamesAd, InGamePromo.checkForAds, InGamePromo.loadAd, InGamePromo.hideAd, InGamePromo.shouldTransform, InGamePromo.render Content notes: import { LitElement, html } from "lit"; import { customElement } from "lit/decorators.js"; import { GameView } from "../../../core/game/GameView"; import { crazyGamesSDK } from "../../CrazyGamesSDK"; import { Layer } from "./Layer"; const AD_TYPES = [ { type: "standard_iab_left1", selectorId: "in-game-bottom-left-ad" }, { type: "standard_iab_left3", selectorId: "in-game-bottom-left-ad3" },

