# src/client/Layout.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2597 bytes
- Dependencies: ./Platform
- Public interfaces: initLayout
- Important implementation details: Functions/methods: initLayout, setMenuState, closeMenu, openMenu, toggle Events: click, click, click, keydown Content notes: import { Platform } from "./Platform"; export function initLayout() { customElements.whenDefined("play-page").then(() => { const hb = document.getElementById("hamburger-btn"); const sidebar = document.getElementById("sidebar-menu"); const backdrop = document.getElementById("mobile-menu-backdrop"); if (sidebar && Platform.isMobileWidth) { sidebar.style.display = "flex";

