# src/core/game/NationCreation.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14179 bytes
- Dependencies: ../PseudoRandom, ../Schemas, ./Game, ./TerrainMapLoader
- Public interfaces: createNationsForGame, getCompactMapNationCount
- Important implementation details: Functions/methods: createNationsForGame, toNation, createRandomNations, getCompactMapNationCount, generateUniqueNationName, generateNationName, pluralize Content notes: import { PseudoRandom } from "../PseudoRandom"; import { GameStartInfo } from "../Schemas"; import { Cell, GameMapSize, GameMode, GameType, HumansVsNations,

