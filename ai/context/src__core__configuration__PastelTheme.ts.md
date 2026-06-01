# src/core/configuration/PastelTheme.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8912 bytes
- Dependencies: colord, ../PseudoRandom, ../game/Game, ../game/GameMap, ../game/GameView, ./ColorAllocator, ./Colors, ./Config
- Public interfaces: PastelTheme
- Important implementation details: Classes: PastelTheme Functions/methods: PastelTheme.teamColor, PastelTheme.territoryColor, PastelTheme.structureColors, PastelTheme.contrast, PastelTheme.clamp, PastelTheme.borderColor, PastelTheme.defendedBorderColors, PastelTheme.focusedBorderColor, PastelTheme.textColor, PastelTheme.terrainColor, PastelTheme.backgroundColor, PastelTheme.falloutColor, PastelTheme.font, PastelTheme.selfColor, PastelTheme.allyColor, PastelTheme.neutralColor, PastelTheme.enemyColor, PastelTheme.spawnHighlightColor, PastelTheme.spawnHighlightSelfColor, PastelTheme.spawnHighlightTeamColor, PastelTheme.spawnHighlightEnemyColor Content notes: import { Colord, colord, LabaColor } from "colord"; import { PseudoRandom } from "../PseudoRandom"; import { PlayerType, Team, TerrainType } from "../game/Game"; import { GameMap, TileRef } from "../game/GameMap"; import { PlayerView } from "../game/GameView"; import { ColorAllocator } from "./ColorAllocator"; import { botColors, fallbackColors, humanColors, nationColors } from "./Colors"; import { Theme } from "./Config";

