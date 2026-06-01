# src/client/graphics/fx/Timeline.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 644 bytes
- Dependencies: none detected
- Public interfaces: Timeline
- Important implementation details: Classes: Timeline Functions/methods: Timeline.add, Timeline.update, Timeline.isComplete Content notes: type TimedTask = { delay: number; action: () => void; triggered: boolean; }; /** export class Timeline { private tasks: TimedTask[] = [];

