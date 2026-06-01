# src/client/graphics/layers/SpawnTimer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3508 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../TransformHandler, ./Layer
- Public interfaces: SpawnBarVisibleEvent, SpawnTimer
- Important implementation details: Classes: SpawnBarVisibleEvent, SpawnTimer Functions/methods: SpawnBarVisibleEvent.constructor, SpawnTimer.createRenderRoot, SpawnTimer.init, SpawnTimer.tick, SpawnTimer.emitBarVisibility, SpawnTimer.shouldTransform, SpawnTimer.render, sumIterator Events: new SpawnBarVisibleEvent(this._barVisible) Content notes: import { LitElement, html } from "lit"; import { customElement } from "lit/decorators.js"; import { EventBus, GameEvent } from "../../../core/EventBus"; import { GameMode, Team } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { TransformHandler } from "../TransformHandler"; import { Layer } from "./Layer"; export class SpawnBarVisibleEvent implements GameEvent {

