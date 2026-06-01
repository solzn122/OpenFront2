# src/core/game/UnitGrid.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9249 bytes
- Dependencies: ./Game, ./GameMap, ./GameView
- Public interfaces: UnitGrid
- Important implementation details: Classes: UnitGrid Functions/methods: UnitGrid.constructor, UnitGrid.getGridCoords, UnitGrid.addUnit, UnitGrid.removeUnit, UnitGrid.removeUnitByTile, UnitGrid.updateUnitCell, UnitGrid.isValidCell, UnitGrid.getCellsInRange, UnitGrid.squaredDistanceFromTile, UnitGrid.nearbyUnits, UnitGrid.unitIsInRange, UnitGrid.hasUnitNearby, UnitGrid.anyUnitNearby Content notes: import { PlayerID, Unit, UnitType } from "./Game"; import { GameMap, TileRef } from "./GameMap"; import { UnitView } from "./GameView"; export type UnitPredicate = (value: { unit: Unit | UnitView; distSquared: number; }) => boolean; export class UnitGrid {

