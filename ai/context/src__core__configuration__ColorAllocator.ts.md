# src/core/configuration/ColorAllocator.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4444 bytes
- Dependencies: colord, colord/plugins/lab, colord/plugins/lch, colorjs.io, ../game/Game, ../PseudoRandom, ../Util, ./Colors
- Public interfaces: ColorAllocator, selectDistinctColorIndex
- Important implementation details: Classes: ColorAllocator Functions/methods: ColorAllocator.constructor, ColorAllocator.getTeamColorVariations, ColorAllocator.assignColor, ColorAllocator.assignTeamColor, ColorAllocator.assignTeamPlayerColor, selectDistinctColorIndex, minDeltaE, deltaE2000, toColor Content notes: import { colord, Colord, extend } from "colord"; import labPlugin from "colord/plugins/lab"; import lchPlugin from "colord/plugins/lch"; import Color from "colorjs.io"; import { ColoredTeams, Team } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { simpleHash } from "../Util"; import {

