# src/client/components/clan/ClanBansView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7210 bytes
- Dependencies: lit, lit/decorators.js, ../../ClanApi, ../../Utils, ../CopyButton, ./ClanShared
- Public interfaces: ClanBansView
- Important implementation details: Classes: ClanBansView Functions/methods: ClanBansView.createRenderRoot, ClanBansView.connectedCallback, ClanBansView.disconnectedCallback, ClanBansView.loadBans, ClanBansView.handleUnban, ClanBansView.onSearchInput, ClanBansView.render Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { type ClanBan, fetchClanBans, unbanClanMember } from "../../ClanApi"; import { translateText } from "../../Utils"; import "../CopyButton"; import { formatClanDate, renderLoadingSpinner,

