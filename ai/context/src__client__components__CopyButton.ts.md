# src/client/components/CopyButton.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 7693 bytes
- Dependencies: lit, lit/decorators.js, ../../core/configuration/ConfigLoader, ../../core/game/UserSettings, ../CrazyGamesSDK, ../Utils
- Public interfaces: CopyButton
- Important implementation details: Classes: CopyButton Functions/methods: CopyButton.createRenderRoot, CopyButton.willUpdate, CopyButton.toggleVisibility, CopyButton.enableSelectAll, CopyButton.clearSelectAll, CopyButton.buildCopyUrl, CopyButton.resolveCopyText, CopyButton.handleCopy, CopyButton.canCopy, CopyButton.render Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { getRuntimeClientServerConfig } from "../../core/configuration/ConfigLoader"; import { UserSettings } from "../../core/game/UserSettings"; import { crazyGamesSDK } from "../CrazyGamesSDK"; import { copyToClipboard, translateText } from "../Utils"; @customElement("copy-button") export class CopyButton extends LitElement {

