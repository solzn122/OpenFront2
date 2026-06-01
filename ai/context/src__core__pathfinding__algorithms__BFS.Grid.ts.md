# src/core/pathfinding/algorithms/BFS.Grid.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3059 bytes
- Dependencies: none detected
- Public interfaces: BFSGrid
- Important implementation details: Classes: BFSGrid Functions/methods: BFSGrid.constructor, BFSGrid.search, BFSGrid.nextStamp Content notes: export class BFSGrid { private stamp = 1; private readonly visitedStamp: Uint32Array; private readonly queue: Int32Array; private readonly dist: Uint16Array; constructor(numNodes: number) { this.visitedStamp = new Uint32Array(numNodes); this.queue = new Int32Array(numNodes);

