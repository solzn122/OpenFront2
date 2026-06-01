# src/core/game/MotionPlans.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5793 bytes
- Dependencies: ./GameMap
- Public interfaces: packMotionPlans, unpackMotionPlans
- Important implementation details: Functions/methods: packMotionPlans, unpackMotionPlans Content notes: import { TileRef } from "./GameMap"; export enum PackedMotionPlanKind { GridPathSet = 1, TrainRailPathSet = 2, } export interface GridPathPlan { kind: "grid"; unitId: number;

