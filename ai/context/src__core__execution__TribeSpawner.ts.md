# src/core/execution/TribeSpawner.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1381 bytes
- Dependencies: ../game/Game, ../PseudoRandom, ../Schemas, ../Util, ./SpawnExecution, ./utils/TribeNames
- Public interfaces: TribeSpawner
- Important implementation details: Classes: TribeSpawner Functions/methods: TribeSpawner.constructor, TribeSpawner.spawnTribes, TribeSpawner.spawnTribe, TribeSpawner.randomTribeName Content notes: import { Game, PlayerInfo, PlayerType } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { GameID } from "../Schemas"; import { simpleHash } from "../Util"; import { SpawnExecution } from "./SpawnExecution"; import { TRIBE_NAME_PREFIXES, TRIBE_NAME_SUFFIXES } from "./utils/TribeNames"; export class TribeSpawner { private random: PseudoRandom;

