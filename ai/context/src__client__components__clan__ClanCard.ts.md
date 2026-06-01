# src/client/components/clan/ClanCard.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3470 bytes
- Dependencies: lit, lit/decorators.js, ../../ClanApi, ../../Utils, ./ClanShared
- Public interfaces: ClanCard
- Important implementation details: Classes: ClanCard Functions/methods: ClanCard.createRenderRoot, ClanCard.connectedCallback, ClanCard.onClick, ClanCard.renderBadge, ClanCard.render Events: new CustomEvent("clan-select", {
        detail: { tag: this.clan.tag },
        bubbles: true,
        composed: true,
      }) Content notes: import { html, LitElement } from "lit"; import { customElement, property } from "lit/decorators.js"; import type { ClanInfo } from "../../ClanApi"; import { translateText } from "../../Utils"; import { translateClanRole } from "./ClanShared"; @customElement("clan-card") export class ClanCard extends LitElement { @property({ type: Object }) clan!: ClanInfo;

