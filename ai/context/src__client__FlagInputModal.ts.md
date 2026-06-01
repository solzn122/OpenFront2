# src/client/FlagInputModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6520 bytes
- Dependencies: lit, lit/decorators.js, resources/countries.json, src/core/ApiSchemas, src/core/AssetUrls, src/core/CosmeticSchemas, src/core/game/UserSettings, ./Api, ./Cosmetics, ./Utils, ./components/BaseModal, ./components/CosmeticButton, ./components/NotLoggedInWarning, ./components/ui/ModalHeader
- Public interfaces: FlagInputModal
- Important implementation details: Classes: FlagInputModal Functions/methods: countryFlag, FlagInputModal.updated, FlagInputModal.renderFlags, FlagInputModal.render, FlagInputModal.includedInSearch, FlagInputModal.handleSearch, FlagInputModal.setFlag, FlagInputModal.onOpen, FlagInputModal.onClose Content notes: import { html } from "lit"; import { customElement, state } from "lit/decorators.js"; import Countries from "resources/countries.json" with { type: "json" }; import { UserMeResponse } from "src/core/ApiSchemas"; import { assetUrl } from "src/core/AssetUrls"; import { Cosmetics, Flag } from "src/core/CosmeticSchemas"; import { UserSettings } from "src/core/game/UserSettings"; import { getUserMe } from "./Api";

