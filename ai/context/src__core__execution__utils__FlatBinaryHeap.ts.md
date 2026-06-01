# src/core/execution/utils/FlatBinaryHeap.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2154 bytes
- Dependencies: ../../game/GameMap
- Public interfaces: FlatBinaryHeap
- Important implementation details: Classes: FlatBinaryHeap Functions/methods: FlatBinaryHeap.constructor, FlatBinaryHeap.clear, FlatBinaryHeap.size, FlatBinaryHeap.enqueue, FlatBinaryHeap.dequeue, FlatBinaryHeap.grow Content notes: import { TileRef } from "../../game/GameMap"; /** export class FlatBinaryHeap { /** parallel arrays: pri[ i ] is the priority of tiles[ i ] */ private pri: Float32Array; private tiles: TileRef[]; private len = 0; // current number of elements constructor(capacity = 1024) {

