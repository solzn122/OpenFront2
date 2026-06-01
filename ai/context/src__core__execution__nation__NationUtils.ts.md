# src/core/execution/nation/NationUtils.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1448 bytes
- Dependencies: ../../game/Game, ../../game/GameMap, ../../PseudoRandom, ../../Util
- Public interfaces: randTerritoryTileArray
- Important implementation details: Functions/methods: randTerritoryTileArray, randTerritoryTile Content notes: import { Cell, Game, Player } from "../../game/Game"; import { TileRef } from "../../game/GameMap"; import { PseudoRandom } from "../../PseudoRandom"; import { calculateBoundingBox } from "../../Util"; export function randTerritoryTileArray( random: PseudoRandom, mg: Game, player: Player,

