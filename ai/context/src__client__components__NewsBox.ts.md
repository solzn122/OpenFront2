# src/client/components/NewsBox.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5926 bytes
- Dependencies: lit, lit-markdown, lit/decorators.js, ../../core/ApiSchemas, ../Api, ../Utils
- Public interfaces: { NewsItem }, getVisibleNewsItems, NewsBox
- Important implementation details: Classes: NewsBox Functions/methods: getDismissedIds, saveDismissedIds, getVisibleNewsItems, NewsBox.createRenderRoot, NewsBox.connectedCallback, NewsBox.loadNews, NewsBox.disconnectedCallback, NewsBox.startCycle, NewsBox.stopCycle, NewsBox.dismiss, NewsBox.goTo, NewsBox.render Content notes: import { LitElement, html, nothing } from "lit"; import { resolveMarkdown } from "lit-markdown"; import { customElement, state } from "lit/decorators.js"; import type { NewsItem } from "../../core/ApiSchemas"; import { getNews } from "../Api"; import { translateText } from "../Utils"; export type { NewsItem }; const DISMISSED_NEWS_KEY = "dismissedNewsItems";

