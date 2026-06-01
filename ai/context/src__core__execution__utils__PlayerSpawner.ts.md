# src/core/execution/utils/PlayerSpawner.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 562 bytes
- Dependencies: ../../game/Game, ../../Schemas, ../SpawnExecution
- Public interfaces: PlayerSpawner
- Important implementation details: Classes: PlayerSpawner Functions/methods: PlayerSpawner.constructor, PlayerSpawner.spawnPlayers Content notes: import { Game, PlayerType } from "../../game/Game"; import { GameID } from "../../Schemas"; import { SpawnExecution } from "../SpawnExecution"; export class PlayerSpawner { private players: SpawnExecution[] = []; constructor( private gm: Game, private gameID: GameID,

