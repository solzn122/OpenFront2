# src/core/pathfinding/transformers/MiniMapTransformer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3787 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../types
- Public interfaces: MiniMapTransformer
- Important implementation details: Classes: MiniMapTransformer Functions/methods: MiniMapTransformer.constructor, MiniMapTransformer.findPath, MiniMapTransformer.upscalePath, MiniMapTransformer.fixExtremes, MiniMapTransformer.findCell Content notes: import { Cell } from "../../game/Game"; import { GameMap, TileRef } from "../../game/GameMap"; import { PathFinder } from "../types"; export class MiniMapTransformer implements PathFinder<number> { constructor( private inner: PathFinder<number>, private map: GameMap, private miniMap: GameMap,

