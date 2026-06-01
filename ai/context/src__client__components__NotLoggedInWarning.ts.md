# src/client/components/NotLoggedInWarning.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1342 bytes
- Dependencies: lit, lit/decorators.js, ../../core/ApiSchemas, ../Api
- Public interfaces: NotLoggedInWarning
- Important implementation details: Classes: NotLoggedInWarning Functions/methods: NotLoggedInWarning.createRenderRoot, NotLoggedInWarning.connectedCallback, NotLoggedInWarning.disconnectedCallback, NotLoggedInWarning.render Events: userMeResponse Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { UserMeResponse } from "../../core/ApiSchemas"; import { hasLinkedAccount } from "../Api"; @customElement("not-logged-in-warning") export class NotLoggedInWarning extends LitElement { @state() private linked = false; private _onUserMe = (event: CustomEvent<UserMeResponse | false>) => {

