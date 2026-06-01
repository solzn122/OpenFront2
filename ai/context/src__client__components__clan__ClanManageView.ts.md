# src/client/components/clan/ClanManageView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 20677 bytes
- Dependencies: lit, lit/decorators.js, ../../Api, ../../ClanApi, ../../Utils, ../ConfirmDialog, ../CopyButton, ./ClanShared
- Public interfaces: ClanManageView
- Important implementation details: Classes: ClanManageView Functions/methods: ClanManageView.createRenderRoot, ClanManageView.connectedCallback, ClanManageView.disconnectedCallback, ClanManageView.loadMembers, ClanManageView.handleSaveSettings, ClanManageView.handlePromote, ClanManageView.handleDemote, ClanManageView.handleKick, ClanManageView.handleBan, ClanManageView.handleDisband, ClanManageView.clearConfirm, ClanManageView.onSearchInput, ClanManageView.onSortChange, ClanManageView.onOrderToggle, ClanManageView.render, ClanManageView.renderConfirmOverlay, ClanManageView.renderManageContent, ClanManageView.renderManageMemberRow Events: new CustomEvent("clan-updated", {
          detail: { memberCount: res.total },
          bubbles: true,
          composed: true,
        }), new CustomEvent("clan-updated", {
        detail: {
          name: result.name,
          description: result.description,
          isOpen: result.isOpen,
   , new CustomEvent("navigate-detail", { bubbles: true, composed: true }), new CustomEvent("clan-disbanded", {
          detail: { tag: this.clanTag },
          bubbles: true,
          composed: true,
        }), new CustomEvent("navigate-bans", {
                  bubbles: true,
                  composed: true,
                }), new CustomEvent("navigate-transfer", {
                        bubbles: true,
                        composed: true,
                      }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { invalidateUserMe } from "../../Api"; import { banClanMember, type ClanInfo, type ClanMember, type ClanMemberOrder,

