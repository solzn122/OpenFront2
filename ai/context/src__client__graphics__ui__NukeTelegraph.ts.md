# src/client/graphics/ui/NukeTelegraph.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3504 bytes
- Dependencies: src/core/game/Game, src/core/game/GameView, ../TransformHandler, ./UIElement
- Public interfaces: CircleArea, NukeTelegraph
- Important implementation details: Classes: CircleArea, NukeTelegraph Functions/methods: CircleArea.constructor, CircleArea.render, NukeTelegraph.constructor, NukeTelegraph.render Content notes: import { Cell } from "src/core/game/Game"; import { GameView, UnitView } from "src/core/game/GameView"; import { TransformHandler } from "../TransformHandler"; import { UIElement } from "./UIElement"; const OUTER_EXPAND = 20; const FILL_ALPHA_OFFSET = 0.6; /** export class CircleArea implements UIElement {

