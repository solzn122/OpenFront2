# src/core/game/TransportShipUtils.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1117 bytes
- Dependencies: ../pathfinding/spatial/SpatialQuery, ./Game, ./GameMap
- Public interfaces: canBuildTransportShip, targetTransportTile, bestShoreDeploymentSource
- Important implementation details: Functions/methods: canBuildTransportShip, targetTransportTile, bestShoreDeploymentSource Content notes: import { SpatialQuery } from "../pathfinding/spatial/SpatialQuery"; import { Game, Player, UnitType } from "./Game"; import { TileRef } from "./GameMap"; export function canBuildTransportShip( game: Game, player: Player, tile: TileRef, ): TileRef | false {

