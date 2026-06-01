# src/core/PatternDecoder.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1944 bytes
- Dependencies: ./Schemas
- Public interfaces: PatternDecoder, decodePatternData
- Important implementation details: Classes: PatternDecoder Functions/methods: PatternDecoder.constructor, PatternDecoder.isPrimary, PatternDecoder.scaledHeight, PatternDecoder.scaledWidth, decodePatternData Content notes: import { PlayerPattern } from "./Schemas"; export class PatternDecoder { private bytes: Uint8Array; readonly height: number; readonly width: number; readonly scale: number; constructor( pattern: PlayerPattern,

