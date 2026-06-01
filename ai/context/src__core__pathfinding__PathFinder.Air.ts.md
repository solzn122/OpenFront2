# src/core/pathfinding/PathFinder.Air.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1649 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../PseudoRandom, ./types
- Public interfaces: AirPathFinder
- Important implementation details: Classes: AirPathFinder Functions/methods: AirPathFinder.constructor, AirPathFinder.findPath, AirPathFinder.computeNext Content notes: import { Game } from "../game/Game"; import { TileRef } from "../game/GameMap"; import { PseudoRandom } from "../PseudoRandom"; import { PathFinder } from "./types"; export class AirPathFinder implements PathFinder<TileRef> { private seed: number; constructor(private game: Game) { this.seed = game.ticks();

