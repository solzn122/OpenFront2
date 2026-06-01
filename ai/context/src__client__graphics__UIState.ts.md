# src/client/graphics/UIState.ts

- Purpose: Project file.
- Category: source
- Size: 313 bytes
- Dependencies: ../../core/game/Game, ../../core/game/GameMap
- Public interfaces: none detected
- Important implementation details: Content notes: import { PlayerBuildableUnitType } from "../../core/game/Game"; import { TileRef } from "../../core/game/GameMap"; export interface UIState { attackRatio: number; ghostStructure: PlayerBuildableUnitType | null; overlappingRailroads: number[]; ghostRailPaths: TileRef[][]; rocketDirectionUp: boolean;

