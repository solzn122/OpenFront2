# src/client/graphics/ProgressBar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1449 bytes
- Dependencies: none detected
- Public interfaces: ProgressBar
- Important implementation details: Classes: ProgressBar Functions/methods: ProgressBar.constructor, ProgressBar.setProgress, ProgressBar.clear, ProgressBar.getX, ProgressBar.getY, ProgressBar.getProgress Content notes: export class ProgressBar { private static readonly CLEAR_PADDING = 2; constructor( private colors: string[] = [], private ctx: CanvasRenderingContext2D, private x: number, private y: number, private w: number,

