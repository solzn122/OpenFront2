# src/client/components/clan/ClanRequestsView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7071 bytes
- Dependencies: lit, lit/decorators.js, ../../ClanApi, ../../Utils, ../CopyButton, ./ClanShared
- Public interfaces: ClanRequestsView
- Important implementation details: Classes: ClanRequestsView Functions/methods: ClanRequestsView.createRenderRoot, ClanRequestsView.connectedCallback, ClanRequestsView.disconnectedCallback, ClanRequestsView.loadRequests, ClanRequestsView.handleApprove, ClanRequestsView.handleDeny, ClanRequestsView.onSearchInput, ClanRequestsView.render Events: new CustomEvent("request-approved", {
          detail: { publicId },
          bubbles: true,
          composed: true,
        }), new CustomEvent("request-denied", {
          detail: { publicId },
          bubbles: true,
          composed: true,
        }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { approveClanRequest, type ClanInfo, type ClanJoinRequest, denyClanRequest, fetchClanRequests,

