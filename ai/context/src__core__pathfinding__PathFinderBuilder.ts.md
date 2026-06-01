# src/core/pathfinding/PathFinderBuilder.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1461 bytes
- Dependencies: ../utilities/DebugSpan, ./PathFinderStepper, ./types
- Public interfaces: PathFinderBuilder
- Important implementation details: Classes: PathFinderBuilder Functions/methods: PathFinderBuilder.constructor, PathFinderBuilder.create, PathFinderBuilder.wrap, PathFinderBuilder.build, PathFinderBuilder.buildWithStepper Content notes: import { DebugSpan } from "../utilities/DebugSpan"; import { PathFinderStepper, StepperConfig } from "./PathFinderStepper"; import { PathFinder, SteppingPathFinder } from "./types"; type WrapFactory<T> = (pf: PathFinder<T>) => PathFinder<T>; /** export class PathFinderBuilder<T> { private wrappers: WrapFactory<T>[] = []; private constructor(private core: PathFinder<T>) {}

