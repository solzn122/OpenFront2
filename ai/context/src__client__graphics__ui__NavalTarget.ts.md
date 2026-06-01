# src/client/graphics/ui/NavalTarget.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3786 bytes
- Dependencies: src/core/game/Game, src/core/game/GameView, ../TransformHandler, ./UIElement
- Public interfaces: Target, NavalTarget
- Important implementation details: Classes: Target, NavalTarget Functions/methods: Target.constructor, Target.render, Target.drawInnerRing, Target.drawOuterRing, NavalTarget.constructor, NavalTarget.render Content notes: import { Cell, UnitType } from "src/core/game/Game"; import { GameView, UnitView } from "src/core/game/GameView"; import { TransformHandler } from "../TransformHandler"; import { UIElement } from "./UIElement"; const BASE_ALPHA = 0.9; const SHADOW_OFFSET_Y = 2; /** export class Target implements UIElement {

