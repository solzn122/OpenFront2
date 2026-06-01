# src/client/graphics/layers/ChatDisplay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4938 bytes
- Dependencies: lit, lit/decorators.js, lit/directive.js, lit/directives/unsafe-html.js, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../../core/Util, ./Layer
- Public interfaces: ChatDisplay
- Important implementation details: Classes: ChatDisplay Functions/methods: ChatDisplay.toggleHidden, ChatDisplay.addEvent, ChatDisplay.removeEvent, ChatDisplay.onDisplayMessageEvent, ChatDisplay.init, ChatDisplay.tick, ChatDisplay.getChatContent, ChatDisplay.render, ChatDisplay.createRenderRoot Content notes: import { html, LitElement } from "lit"; import { customElement, state } from "lit/decorators.js"; import { DirectiveResult } from "lit/directive.js"; import { unsafeHTML, UnsafeHTMLDirective } from "lit/directives/unsafe-html.js"; import { EventBus } from "../../../core/EventBus"; import { MessageType } from "../../../core/game/Game"; import { DisplayMessageUpdate,

