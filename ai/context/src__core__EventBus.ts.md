# src/core/EventBus.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1196 bytes
- Dependencies: none detected
- Public interfaces: EventBus
- Important implementation details: Classes: EventBus Functions/methods: EventBus.emit, EventBus.on, EventBus.off Content notes: export type GameEvent = object; export interface EventConstructor<T extends GameEvent = GameEvent> { new (...args: any[]): T; } export class EventBus { private listeners: Map<EventConstructor, Array<(event: GameEvent) => void>> = new Map(); emit<T extends GameEvent>(event: T): void {

