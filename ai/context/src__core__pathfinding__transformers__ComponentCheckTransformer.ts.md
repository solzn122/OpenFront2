# src/core/pathfinding/transformers/ComponentCheckTransformer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1115 bytes
- Dependencies: ../types
- Public interfaces: ComponentCheckTransformer
- Important implementation details: Classes: ComponentCheckTransformer Functions/methods: ComponentCheckTransformer.constructor, ComponentCheckTransformer.findPath Content notes: import { PathFinder } from "../types"; /** export class ComponentCheckTransformer<T> implements PathFinder<T> { constructor( private inner: PathFinder<T>, private getComponent: (t: T) => number, ) {} findPath(from: T | T[], to: T): T[] | null {

