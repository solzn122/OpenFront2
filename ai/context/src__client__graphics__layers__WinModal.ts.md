# src/client/graphics/layers/WinModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9560 bytes
- Dependencies: lit, lit/decorators.js, ../../../client/Utils, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../Api, ../../components/CosmeticButton, ../../Cosmetics, ../../CrazyGamesSDK, ../../Platform, ../../Transport, ./Layer
- Public interfaces: WinModal
- Important implementation details: Classes: WinModal Functions/methods: WinModal.createRenderRoot, WinModal.constructor, WinModal.render, WinModal.innerHtml, WinModal.renderYoutubeTutorial, WinModal.renderPatternButton, WinModal.loadPatternContent, WinModal.steamWishlist, WinModal.discordDisplay, WinModal.show, WinModal.hide, WinModal._handleExit, WinModal._handleRequeue, WinModal.init, WinModal.tick, WinModal.renderLayer, WinModal.shouldTransform Events: new SendWinnerEvent(wu.winner, wu.allPlayersStats), new SendWinnerEvent(["player", winnerClient], wu.allPlayersStats) Content notes: import { html, LitElement, TemplateResult } from "lit"; import { customElement, state } from "lit/decorators.js"; import { getGamesPlayed, isInIframe, translateText, TUTORIAL_VIDEO_URL, } from "../../../client/Utils";

