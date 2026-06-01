# src/core/pathfinding/PathFinderStepper.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3211 bytes
- Dependencies: ./types
- Public interfaces: PathFinderStepper
- Important implementation details: Classes: PathFinderStepper Functions/methods: PathFinderStepper.constructor, PathFinderStepper.next, PathFinderStepper.invalidate, PathFinderStepper.findPath Content notes: import { PathFinder, PathResult, PathStatus, SteppingPathFinder, } from "./types"; export interface StepperConfig<T> { equals: (a: T, b: T) => boolean;

