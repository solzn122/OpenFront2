# src/client/GameStartingModal.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1967 bytes
- Dependencies: lit, lit/decorators.js, ./Utils
- Public interfaces: GameStartingModal
- Important implementation details: Classes: GameStartingModal Functions/methods: GameStartingModal.createRenderRoot, GameStartingModal.render, GameStartingModal.show, GameStartingModal.hide Content notes: import { LitElement, html } from "lit"; import { customElement, state } from "lit/decorators.js"; import { translateText } from "./Utils"; @customElement("game-starting-modal") export class GameStartingModal extends LitElement { @state() isVisible = false; createRenderRoot() {

