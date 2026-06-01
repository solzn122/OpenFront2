# src/client/graphics/FrameProfiler.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1471 bytes
- Dependencies: none detected
- Public interfaces: FrameProfiler
- Important implementation details: Classes: FrameProfiler Functions/methods: FrameProfiler.setEnabled, FrameProfiler.isEnabled, FrameProfiler.clear, FrameProfiler.record, FrameProfiler.start, FrameProfiler.end, FrameProfiler.consume Content notes: export class FrameProfiler { private static timings: Record<string, number> = {}; private static enabled: boolean = false; /** static setEnabled(enabled: boolean): void { this.enabled = enabled; } /**

