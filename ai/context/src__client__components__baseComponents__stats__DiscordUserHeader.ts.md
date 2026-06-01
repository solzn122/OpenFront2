# src/client/components/baseComponents/stats/DiscordUserHeader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1639 bytes
- Dependencies: lit, lit/decorators.js, ../../../../core/ApiSchemas, ../../../Utils
- Public interfaces: DiscordUserHeader
- Important implementation details: Classes: DiscordUserHeader Functions/methods: DiscordUserHeader.createRenderRoot, DiscordUserHeader.render Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import type { DiscordUser } from "../../../../core/ApiSchemas"; import { getDiscordAvatarUrl, translateText } from "../../../Utils"; @customElement("discord-user-header") export class DiscordUserHeader extends LitElement { createRenderRoot() { return this;

