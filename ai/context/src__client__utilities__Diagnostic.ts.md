# src/client/utilities/Diagnostic.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3072 bytes
- Dependencies: ../Platform
- Public interfaces: collectGraphicsDiagnostics
- Important implementation details: Functions/methods: collectGraphicsDiagnostics Content notes: import { Platform } from "../Platform"; export type RendererType = "Canvas2D" | "WebGL1" | "WebGL2"; export interface BrowserInfo { engine: string; platform: string; os: string; dpr: number; }

