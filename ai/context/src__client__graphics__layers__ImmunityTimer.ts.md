# src/client/graphics/layers/ImmunityTimer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2876 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ./Layer
- Public interfaces: ImmunityBarVisibleEvent, ImmunityTimer
- Important implementation details: Classes: ImmunityBarVisibleEvent, ImmunityTimer Functions/methods: ImmunityBarVisibleEvent.constructor, ImmunityTimer.createRenderRoot, ImmunityTimer.init, ImmunityTimer.tick, ImmunityTimer.setInactive, ImmunityTimer.emitBarVisibility, ImmunityTimer.shouldTransform, ImmunityTimer.render Events: new ImmunityBarVisibleEvent(this._barVisible) Content notes: import { LitElement, html } from "lit"; import { customElement } from "lit/decorators.js"; import { EventBus, GameEvent } from "../../../core/EventBus"; import { GameMode } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { Layer } from "./Layer"; export class ImmunityBarVisibleEvent implements GameEvent { constructor(public readonly visible: boolean) {}

