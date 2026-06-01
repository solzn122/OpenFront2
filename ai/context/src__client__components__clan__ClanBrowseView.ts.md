# src/client/components/clan/ClanBrowseView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6165 bytes
- Dependencies: lit, lit/decorators.js, ../../ClanApi, ../../Utils, ./ClanCard, ./ClanShared
- Public interfaces: ClanBrowseView
- Important implementation details: Classes: ClanBrowseView Functions/methods: ClanBrowseView.createRenderRoot, ClanBrowseView.emitState, ClanBrowseView.loadBrowse, ClanBrowseView.onSearchInput, ClanBrowseView.connectedCallback, ClanBrowseView.disconnectedCallback, ClanBrowseView.render Events: new CustomEvent("browse-updated", {
        detail: {
          data: this.browseData,
          page: this.browsePage,
          query: this.searchQuery,
      Content notes: import { html, LitElement } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { type ClanBrowseResponse, fetchClans } from "../../ClanApi"; import { translateText } from "../../Utils"; import "./ClanCard"; import { type ClanRole, renderLoadingSpinner } from "./ClanShared"; export interface BrowseState { data: ClanBrowseResponse | null;

