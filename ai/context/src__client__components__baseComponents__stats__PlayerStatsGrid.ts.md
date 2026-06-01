# src/client/components/baseComponents/stats/PlayerStatsGrid.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1243 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: PlayerStatsGrid
- Important implementation details: Classes: PlayerStatsGrid Functions/methods: PlayerStatsGrid.createRenderRoot, PlayerStatsGrid.render Content notes: import { LitElement, html } from "lit"; import { customElement, property } from "lit/decorators.js"; @customElement("player-stats-grid") export class PlayerStatsGrid extends LitElement { createRenderRoot() { return this; } @property({ type: Array }) titles: string[] = [];

