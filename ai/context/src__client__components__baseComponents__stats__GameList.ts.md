# src/client/components/baseComponents/stats/GameList.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6168 bytes
- Dependencies: lit, lit/decorators.js, ../../../../core/ApiSchemas, ../../../../core/game/Game, ../../../GameInfoModal, ../../../Utils, ../../CopyButton
- Public interfaces: GameList
- Important implementation details: Classes: GameList Functions/methods: GameList.createRenderRoot, GameList.toggle, GameList.showRanking, GameList.render Content notes: import { LitElement, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { PlayerGame } from "../../../../core/ApiSchemas"; import { GameMode } from "../../../../core/game/Game"; import { GameInfoModal } from "../../../GameInfoModal"; import { translateText } from "../../../Utils"; import "../../CopyButton"; @customElement("game-list")

