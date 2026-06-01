# src/client/graphics/ui/TextIndicator.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1725 bytes
- Dependencies: src/core/game/Game, ../TransformHandler, ./UIElement
- Public interfaces: TextIndicator
- Important implementation details: Classes: TextIndicator Functions/methods: TextIndicator.constructor, TextIndicator.render Content notes: import { Cell } from "src/core/game/Game"; import { TransformHandler } from "../TransformHandler"; import { UIElement } from "./UIElement"; const MIN_TEXT_ZOOM = 1.1; export class TextIndicator implements UIElement { private fontSize: number = 8; private font: string = "Overpass, sans-serif"; private cell: Cell;

