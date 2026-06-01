# src/core/configuration/Colors.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 19007 bytes
- Dependencies: colord, colord/plugins/lab, colord/plugins/lch
- Public interfaces: red, blue, teal, purple, yellow, orange, green, botColor, redTeamColors, blueTeamColors, tealTeamColors, purpleTeamColors, yellowTeamColors, orangeTeamColors, greenTeamColors, botTeamColors, nationColors, humanColors, botColors, fallbackColors
- Important implementation details: Functions/methods: generateTeamColors Content notes: import { colord, Colord, extend } from "colord"; import labPlugin from "colord/plugins/lab"; import lchPlugin from "colord/plugins/lch"; extend([lchPlugin]); extend([labPlugin]); export const red = colord("rgb(235,51,51)"); export const blue = colord("rgb(41,98,255)"); export const teal = colord("rgb(43,212,189)");

