# src/core/pathfinding/algorithms/BFS.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1561 bytes
- Dependencies: none detected
- Public interfaces: BFS
- Important implementation details: Classes: BFS Functions/methods: BFS.constructor, BFS.search Content notes: export interface BFSAdapter<T> { neighbors(node: T): T[]; } export class BFS<T> { constructor(private adapter: BFSAdapter<T>) {} /** search<R>( start: T | T[],

