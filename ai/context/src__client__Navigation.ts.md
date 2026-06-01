# src/client/Navigation.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5211 bytes
- Dependencies: none detected
- Public interfaces: initNavigation
- Important implementation details: Functions/methods: initNavigation, closeMobileSidebar, showPage Events: new CustomEvent("showPage", { detail: pageId }), click, click Content notes: export function initNavigation() { const closeMobileSidebar = () => { const sidebar = document.getElementById("sidebar-menu"); const backdrop = document.getElementById("mobile-menu-backdrop"); if (sidebar?.classList.contains("open")) { sidebar.classList.remove("open"); backdrop?.classList.remove("open"); document.documentElement.classList.remove("overflow-hidden");

