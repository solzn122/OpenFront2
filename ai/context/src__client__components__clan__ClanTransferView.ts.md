# src/client/components/clan/ClanTransferView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7870 bytes
- Dependencies: lit, lit/decorators.js, ../../Api, ../../ClanApi, ../../Utils, ../ConfirmDialog, ../CopyButton, ./ClanShared
- Public interfaces: ClanTransferView
- Important implementation details: Classes: ClanTransferView Functions/methods: ClanTransferView.createRenderRoot, ClanTransferView.connectedCallback, ClanTransferView.disconnectedCallback, ClanTransferView.loadMembers, ClanTransferView.handleTransfer, ClanTransferView.onSearchInput, ClanTransferView.render, ClanTransferView.renderConfirmOverlay, ClanTransferView.renderContent Events: new CustomEvent("leadership-transferred", {
          detail: { tag: this.clanTag },
          bubbles: true,
          composed: true,
        }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { invalidateUserMe } from "../../Api"; import { type ClanInfo, type ClanMember, fetchClanMembers, transferLeadership,

