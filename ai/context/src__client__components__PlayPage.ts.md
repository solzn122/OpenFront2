# src/client/components/PlayPage.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4023 bytes
- Dependencies: lit, lit/decorators.js, ../../core/AssetUrls, ./NewsBox
- Public interfaces: PlayPage
- Important implementation details: Classes: PlayPage Functions/methods: PlayPage.createRenderRoot, PlayPage.render Content notes: import { LitElement, html } from "lit"; import { customElement } from "lit/decorators.js"; import { assetUrl } from "../../core/AssetUrls"; import "./NewsBox"; @customElement("play-page") export class PlayPage extends LitElement { createRenderRoot() { return this;

