# src/client/TokenLoginModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3893 bytes
- Dependencies: lit, lit/decorators.js, ./Auth, ./components/BaseModal, ./components/Difficulties, ./components/ui/ModalHeader, ./Utils
- Public interfaces: TokenLoginModal
- Important implementation details: Classes: TokenLoginModal Functions/methods: TokenLoginModal.constructor, TokenLoginModal.render, TokenLoginModal.loggingIn, TokenLoginModal.loginSuccess, TokenLoginModal.open, TokenLoginModal.openWithToken, TokenLoginModal.close, TokenLoginModal.tryLogin Content notes: import { html } from "lit"; import { customElement } from "lit/decorators.js"; import { tempTokenLogin } from "./Auth"; import { BaseModal } from "./components/BaseModal"; import "./components/Difficulties"; import { modalHeader } from "./components/ui/ModalHeader"; import { translateText } from "./Utils"; @customElement("token-login")

