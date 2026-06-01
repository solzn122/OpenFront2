# src/client/graphics/layers/EmojiTable.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4302 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../../core/game/TerraNulliusImpl, ../../../core/Util, ../../InputHandler, ../../Transport, ../TransformHandler
- Public interfaces: EmojiTable
- Important implementation details: Classes: EmojiTable Functions/methods: EmojiTable.initEventBus, EmojiTable.render, EmojiTable.hideTable, EmojiTable.showTable, EmojiTable.createRenderRoot Events: ShowEmojiMenuEvent, new SendEmojiIntentEvent(
            recipient,
            flattenedEmojiTable.indexOf(emoji as Emoji),
          ), CloseViewEvent Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { EventBus } from "../../../core/EventBus"; import { AllPlayers } from "../../../core/game/Game"; import { GameView, PlayerView } from "../../../core/game/GameView"; import { TerraNulliusImpl } from "../../../core/game/TerraNulliusImpl"; import { Emoji, flattenedEmojiTable } from "../../../core/Util"; import { CloseViewEvent, ShowEmojiMenuEvent } from "../../InputHandler";

