# src/client/graphics/layers/Layer.ts

- Purpose: Project file.
- Category: source
- Size: 356 bytes
- Dependencies: none detected
- Public interfaces: none detected
- Important implementation details: Content notes: export interface Layer { init?: () => void; tick?: () => void; getTickIntervalMs?: () => number; renderLayer?: (context: CanvasRenderingContext2D) => void; shouldTransform?: () => boolean; redraw?: () => void; }

