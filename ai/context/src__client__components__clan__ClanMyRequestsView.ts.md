# src/client/components/clan/ClanMyRequestsView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3266 bytes
- Dependencies: lit, lit/decorators.js, ../../Api, ../../ClanApi, ../../Utils, ./ClanShared
- Public interfaces: ClanMyRequestsView
- Important implementation details: Classes: ClanMyRequestsView Functions/methods: ClanMyRequestsView.createRenderRoot, ClanMyRequestsView.handleWithdrawRequest, ClanMyRequestsView.render Events: new CustomEvent("request-withdrawn", {
          detail: { tag },
          bubbles: true,
          composed: true,
        }) Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { invalidateUserMe } from "../../Api"; import { withdrawClanRequest } from "../../ClanApi"; import { translateText } from "../../Utils"; import { formatClanDate, showToast } from "./ClanShared"; @customElement("clan-my-requests-view") export class ClanMyRequestsView extends LitElement {

