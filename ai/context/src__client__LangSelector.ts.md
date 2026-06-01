# src/client/LangSelector.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 11086 bytes
- Dependencies: lit, lit/decorators.js, ../core/AssetUrls, ./LanguageModal, ./LanguageModal, ./Utils, ../../resources/lang/en.json, ../../resources/lang/metadata.json
- Public interfaces: LangSelector
- Important implementation details: Classes: LangSelector Functions/methods: LangSelector.createRenderRoot, LangSelector.connectedCallback, LangSelector.disconnectedCallback, LangSelector.setupDebugKey, LangSelector.getClosestSupportedLang, LangSelector.initializeLanguage, LangSelector.loadLanguage, LangSelector.loadLanguageList, LangSelector.changeLanguage, LangSelector.applyTranslation, applyAttributeTranslation, LangSelector.translateText, LangSelector.openModal, LangSelector.close, LangSelector.render, flattenTranslations Events: language-selected, keydown, keyup Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { assetUrl } from "../core/AssetUrls"; import "./LanguageModal"; import { LanguageModal } from "./LanguageModal"; import { formatDebugTranslation } from "./Utils"; import en from "../../resources/lang/en.json"; import metadata from "../../resources/lang/metadata.json";

