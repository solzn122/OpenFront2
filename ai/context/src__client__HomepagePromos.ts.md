# src/client/HomepagePromos.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6282 bytes
- Dependencies: lit, lit/decorators.js
- Public interfaces: HomepagePromos
- Important implementation details: Classes: HomepagePromos Functions/methods: HomepagePromos.createRenderRoot, HomepagePromos.connectedCallback, HomepagePromos.disconnectedCallback, HomepagePromos.show, HomepagePromos.close, HomepagePromos.loadBottomRail, HomepagePromos.destroyBottomRail, HomepagePromos.loadGutterAds, HomepagePromos.loadCornerAdVideo, HomepagePromos.render Events: userMeResponse, join-lobby, leave-lobby Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; @customElement("homepage-promos") export class HomepagePromos extends LitElement { @state() private isVisible: boolean = false; @state() private adLoaded: boolean = false; private cornerAdLoaded: boolean = false; private onUserMeResponse = () => {

