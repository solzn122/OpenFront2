# src/core/Util.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10344 bytes
- Dependencies: dompurify, nanoid, ./game/Game, ./game/GameMap, ./Schemas, ./execution/utils/TribeNames
- Public interfaces: manhattanDistWrapped, within, distSort, distSortUnit, findMinimumBy, findClosestBy, simpleHash, calculateBoundingBox, boundingBoxTiles, getMode, calculateBoundingBoxCenter, boundingBoxCenter, inscribed, sanitize, onlyImages, createPartialGameRecord, decompressGameRecord, assertNever, generateID, toInt, maxInt, minInt, withinInt, createRandomName, emojiTable, flattenedEmojiTable, replacer, sigmoid, formatPlayerDisplayName, sanitizeClanTag
- Important implementation details: Functions/methods: manhattanDistWrapped, within, distSort, distSortUnit, findMinimumBy, findClosestBy, simpleHash, calculateBoundingBox, boundingBoxTiles, getMode, calculateBoundingBoxCenter, boundingBoxCenter, inscribed, sanitize, onlyImages, createPartialGameRecord, decompressGameRecord, assertNever, generateID, toInt, maxInt, minInt, withinInt, createRandomName, replacer, sigmoid, formatPlayerDisplayName, sanitizeClanTag Content notes: import DOMPurify from "dompurify"; import { customAlphabet } from "nanoid"; import { Cell, PlayerType, Unit } from "./game/Game"; import { GameMap, TileRef } from "./game/GameMap"; import { GameConfig, GameID, GameRecord,

