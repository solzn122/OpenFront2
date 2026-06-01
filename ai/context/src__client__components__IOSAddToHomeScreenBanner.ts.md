# src/client/components/IOSAddToHomeScreenBanner.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6299 bytes
- Dependencies: lit, lit/decorators.js, ../Platform, ../Utils
- Public interfaces: IOSAddToHomeScreenBanner
- Important implementation details: Classes: IOSAddToHomeScreenBanner Functions/methods: IOSAddToHomeScreenBanner.createRenderRoot, IOSAddToHomeScreenBanner.connectedCallback, IOSAddToHomeScreenBanner.never, IOSAddToHomeScreenBanner.later_, IOSAddToHomeScreenBanner.openGuide, IOSAddToHomeScreenBanner.closeGuide, IOSAddToHomeScreenBanner.renderGuideModal, IOSAddToHomeScreenBanner.render Content notes: import { LitElement, html, nothing } from "lit"; import { customElement, state } from "lit/decorators.js"; import { Platform } from "../Platform"; import { translateText } from "../Utils"; const DISMISSED_KEY = "ios_a2hs_banner_dismissed"; const LATER_KEY = "ios_a2hs_banner_later"; @customElement("ios-add-to-home-screen-banner") export class IOSAddToHomeScreenBanner extends LitElement {

