# src/client/components/DesktopNavBar.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7739 bytes
- Dependencies: lit, lit/decorators.js, ../../core/AssetUrls, ./NavNotificationsController
- Public interfaces: DesktopNavBar
- Important implementation details: Classes: DesktopNavBar Functions/methods: DesktopNavBar.createRenderRoot, DesktopNavBar.connectedCallback, DesktopNavBar.disconnectedCallback, DesktopNavBar._updateActiveState, DesktopNavBar.render Events: showPage Content notes: import { LitElement, html } from "lit"; import { customElement } from "lit/decorators.js"; import { assetUrl } from "../../core/AssetUrls"; import { NavNotificationsController } from "./NavNotificationsController"; @customElement("desktop-nav-bar") export class DesktopNavBar extends LitElement { private _notifications = new NavNotificationsController(this); createRenderRoot() {

