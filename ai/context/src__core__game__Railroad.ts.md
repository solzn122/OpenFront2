# src/core/game/Railroad.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2025 bytes
- Dependencies: ./Game, ./GameMap, ./GameUpdates, ./TrainStation
- Public interfaces: Railroad, getOrientedRailroad, OrientedRailroad
- Important implementation details: Classes: Railroad, OrientedRailroad Functions/methods: Railroad.constructor, Railroad.delete, Railroad.getClosestTileIndex, getOrientedRailroad, OrientedRailroad.constructor, OrientedRailroad.getTiles, OrientedRailroad.getStart, OrientedRailroad.getEnd Content notes: import { Game } from "./Game"; import { TileRef } from "./GameMap"; import { GameUpdateType } from "./GameUpdates"; import { TrainStation } from "./TrainStation"; export class Railroad { constructor( public from: TrainStation, public to: TrainStation,

