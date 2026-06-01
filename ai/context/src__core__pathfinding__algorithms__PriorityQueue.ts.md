# src/core/pathfinding/algorithms/PriorityQueue.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4611 bytes
- Dependencies: none detected
- Public interfaces: MinHeap, BucketQueue
- Important implementation details: Classes: MinHeap, BucketQueue Functions/methods: MinHeap.constructor, MinHeap.push, MinHeap.pop, MinHeap.isEmpty, MinHeap.clear, BucketQueue.constructor, BucketQueue.push, BucketQueue.pop, BucketQueue.isEmpty, BucketQueue.clear Content notes: export interface PriorityQueue { push(node: number, priority: number): void; pop(): number; isEmpty(): boolean; clear(): void; } export class MinHeap implements PriorityQueue { private heap: Int32Array;

