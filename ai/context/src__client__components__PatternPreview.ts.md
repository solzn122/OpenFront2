# src/client/components/PatternPreview.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3983 bytes
- Dependencies: colord, jose, lit, ../../core/CosmeticSchemas, ../../core/PatternDecoder, ../../core/Schemas, ../Utils
- Public interfaces: renderPatternPreview, generatePreviewDataUrl
- Important implementation details: Functions/methods: renderPatternPreview, renderBlankPreview, generatePreviewDataUrl Content notes: import { Colord } from "colord"; import { base64url } from "jose"; import { html, TemplateResult } from "lit"; import { DefaultPattern } from "../../core/CosmeticSchemas"; import { PatternDecoder } from "../../core/PatternDecoder"; import { PlayerPattern } from "../../core/Schemas"; import { translateText } from "../Utils"; export function renderPatternPreview(

