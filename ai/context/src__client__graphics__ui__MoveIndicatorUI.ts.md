# src/client/graphics/ui/MoveIndicatorUI.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2653 bytes
- Dependencies: src/core/game/Game, ../TransformHandler, ./UIElement
- Public interfaces: MoveIndicatorUI
- Important implementation details: Classes: MoveIndicatorUI Functions/methods: MoveIndicatorUI.constructor, MoveIndicatorUI.render Content notes: import { Cell } from "src/core/game/Game"; import { TransformHandler } from "../TransformHandler"; import { UIElement } from "./UIElement"; /** export class MoveIndicatorUI implements UIElement { private lifeTime = 0; private readonly duration = 800; // ms private readonly startRadius = 13; // starting distance from center (screen pixels)

