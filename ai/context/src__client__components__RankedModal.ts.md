# src/client/components/RankedModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5384 bytes
- Dependencies: lit, lit/decorators.js, ../../core/ApiSchemas, ../Api, ../Auth, ../Utils, ./BaseModal, ./ui/ModalHeader
- Public interfaces: RankedModal
- Important implementation details: Classes: RankedModal Functions/methods: RankedModal.constructor, RankedModal.connectedCallback, RankedModal.disconnectedCallback, RankedModal.updateElo, RankedModal.onOpen, RankedModal.createRenderRoot, RankedModal.render, RankedModal.renderCard, RankedModal.renderDisabledCard, RankedModal.handleRanked Events: userMeResponse, new CustomEvent("open-matchmaking") Content notes: import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { UserMeResponse } from "../../core/ApiSchemas"; import { getUserMe, hasLinkedAccount } from "../Api"; import { userAuth } from "../Auth"; import { translateText } from "../Utils"; import { BaseModal } from "./BaseModal"; import { modalHeader } from "./ui/ModalHeader";

