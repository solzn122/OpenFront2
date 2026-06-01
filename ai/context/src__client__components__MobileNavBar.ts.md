# src/client/components/MobileNavBar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8072 bytes
- Dependencies: lit, lit/decorators.js, ../../core/AssetUrls, ./NavNotificationsController
- Public interfaces: MobileNavBar
- Important implementation details: Classes: MobileNavBar Functions/methods: MobileNavBar.createRenderRoot, MobileNavBar.connectedCallback, MobileNavBar.disconnectedCallback, MobileNavBar._updateActiveState, MobileNavBar._renderDot, MobileNavBar.render Events: showPage Content notes: import { html, LitElement, TemplateResult } from "lit"; import { customElement } from "lit/decorators.js"; import { assetUrl } from "../../core/AssetUrls"; import { NavNotificationsController } from "./NavNotificationsController"; @customElement("mobile-nav-bar") export class MobileNavBar extends LitElement { private _notifications = new NavNotificationsController(this); createRenderRoot() {

