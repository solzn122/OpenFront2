# src/client/ClanModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15912 bytes
- Dependencies: lit, lit/decorators.js, ./Api, ./ClanApi, ./components/BaseModal, ./components/clan/ClanBansView, ./components/clan/ClanBrowseView, ./components/clan/ClanBrowseView, ./components/clan/ClanCard, ./components/clan/ClanDetailView, ./components/clan/ClanManageView, ./components/clan/ClanMyRequestsView, ./components/clan/ClanRequestsView, ./components/clan/ClanShared, ./components/clan/ClanTransferView, ./components/ConfirmDialog, ./components/CopyButton, ./components/ui/ModalHeader, ./Utils
- Public interfaces: ClanModal
- Important implementation details: Classes: ClanModal Functions/methods: ClanModal.render, ClanModal.tagPill, ClanModal.renderSubViewHeader, ClanModal.handleTabChange, ClanModal.onOpen, ClanModal.onClose, ClanModal.loadMyClans, ClanModal.renderInner, ClanModal.openDetail, ClanModal.renderMyClans, ClanModal.renderPendingRequestsButton Events: new CustomEvent("show-message", {
            detail: {
              message: translateText("clan_modal.sign_in_for_clans"),
              color: "red",
       Content notes: import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { getUserMe, invalidateUserMe } from "./Api"; import { type ClanInfo, type ClanMember, type ClanStats } from "./ClanApi"; import { BaseModal } from "./components/BaseModal"; import "./components/clan/ClanBansView"; import "./components/clan/ClanBrowseView"; import type { BrowseState } from "./components/clan/ClanBrowseView";

