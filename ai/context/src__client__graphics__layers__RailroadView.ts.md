# src/client/graphics/layers/RailroadView.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4757 bytes
- Dependencies: ../../../core/game/GameMap, ../../../core/game/GameView
- Public interfaces: computeRailTiles, computeDirection, RailroadView
- Important implementation details: Classes: RailroadView Functions/methods: computeRailTiles, computeExtremityDirection, computeDirection, RailroadView.constructor, RailroadView.isComplete, RailroadView.tiles, RailroadView.remainingTiles, RailroadView.drawnTiles, RailroadView.tick Content notes: import { TileRef } from "../../../core/game/GameMap"; import { GameView } from "../../../core/game/GameView"; export enum RailType { VERTICAL, HORIZONTAL, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT,

