# src/core/game/Game.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 28419 bytes
- Dependencies: ../configuration/Config, ../pathfinding/algorithms/AbstractGraph, ../pathfinding/types, ../Schemas, ../Util, ./GameMap, ./GameUpdates, ./MotionPlans, ./RailNetwork, ./Stats, ./UnitGrid
- Public interfaces: AllPlayers, isDifficulty, Duos, Trios, Quads, HumansVsNations, ColoredTeams, mapCategories, isGameType, isGameMode, Nukes, BuildableAttacks, Structures, BuildMenus, PlayerBuildable, Nation, Cell, PlayerInfo, isUnit, MESSAGE_TYPE_CATEGORIES, getMessageCategory
- Important implementation details: Classes: Nation, Cell, PlayerInfo Functions/methods: isEnumValue, isDifficulty, isGameType, isGameMode, unitTypeGroup, <class>.has, Nation.constructor, Cell.constructor, Cell.pos, Cell.toString, PlayerInfo.constructor, isUnit, getMessageCategory Content notes: import { Config } from "../configuration/Config"; import { AbstractGraph } from "../pathfinding/algorithms/AbstractGraph"; import { PathFinder } from "../pathfinding/types"; import { AllPlayersStats, ClientID } from "../Schemas"; import { formatPlayerDisplayName } from "../Util"; import { GameMap, TileRef } from "./GameMap"; import { GameUpdate,

