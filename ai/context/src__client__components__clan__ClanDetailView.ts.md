# src/client/components/clan/ClanDetailView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 16985 bytes
- Dependencies: lit, lit/decorators.js, ../../Api, ../../ClanApi, ../../Utils, ../ConfirmDialog, ../CopyButton, ./ClanShared, ./ClanStatsBreakdown
- Public interfaces: ClanDetailView
- Important implementation details: Classes: ClanDetailView Functions/methods: ClanDetailView.createRenderRoot, ClanDetailView.connectedCallback, ClanDetailView.restoreFromCache, ClanDetailView.disconnectedCallback, ClanDetailView.updated, ClanDetailView.loadDetail, ClanDetailView.loadMemberPage, ClanDetailView.onSortChange, ClanDetailView.onOrderToggle, ClanDetailView.handleJoin, ClanDetailView.handleLeave, ClanDetailView.onSearchInput, ClanDetailView.render, ClanDetailView.renderRequestsButton, ClanDetailView.toggleAllStats, ClanDetailView.renderMembersList, ClanDetailView.renderActionButtons Events: new CustomEvent("navigate-back", { bubbles: true, composed: true }), new CustomEvent("detail-loaded", {
        detail: {
          clan: detail,
          myRole: this.myRole,
          members: this.members,
          membersTo, new CustomEvent("clan-joined", {
            detail: { tag: this.selectedClan.tag },
            bubbles: true,
            composed: true,
          }), new CustomEvent("request-sent", {
            detail: {
              tag: this.selectedClan.tag,
              name: this.selectedClan.name,
            },
   , new CustomEvent("clan-left", {
          detail: { tag: this.selectedClan.tag },
          bubbles: true,
          composed: true,
        }), new CustomEvent("navigate-requests", {
              bubbles: true,
              composed: true,
            }), new CustomEvent("navigate-manage", {
                bubbles: true,
                composed: true,
              }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { invalidateUserMe } from "../../Api"; import { type ClanInfo, type ClanMember, type ClanMemberOrder, type ClanMemberSort,

