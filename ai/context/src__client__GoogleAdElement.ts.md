# src/client/GoogleAdElement.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1948 bytes
- Dependencies: lit, lit/decorators.js, ./Platform
- Public interfaces: GoogleAdElement
- Important implementation details: Classes: GoogleAdElement Functions/methods: GoogleAdElement.createRenderRoot, GoogleAdElement.render, GoogleAdElement.connectedCallback Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; import { Platform } from "./Platform"; declare global { interface Window { adsbygoogle: unknown[]; } }

