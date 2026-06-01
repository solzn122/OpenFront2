# src/core/configuration/PastelThemeDark.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2373 bytes
- Dependencies: colord, ../game/Game, ../game/GameMap, ./PastelTheme
- Public interfaces: PastelThemeDark
- Important implementation details: Classes: PastelThemeDark Functions/methods: PastelThemeDark.terrainColor Content notes: import { Colord, colord } from "colord"; import { TerrainType } from "../game/Game"; import { GameMap, TileRef } from "../game/GameMap"; import { PastelTheme } from "./PastelTheme"; export class PastelThemeDark extends PastelTheme { private darkShore = colord("rgb(134,133,88)"); private darkWater = colord("rgb(14,11,30)"); private darkShorelineWater = colord("rgb(50,50,50)");

