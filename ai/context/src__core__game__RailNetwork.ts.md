# src/core/game/RailNetwork.ts

- Purpose: Project file.
- Category: source
- Size: 554 bytes
- Dependencies: ./Game, ./GameMap, ./RailNetworkImpl, ./TrainStation
- Public interfaces: none detected
- Important implementation details: Content notes: import { Unit, UnitType } from "./Game"; import { TileRef } from "./GameMap"; import { StationManager } from "./RailNetworkImpl"; import { TrainStation } from "./TrainStation"; export interface RailNetwork { connectStation(station: TrainStation): void; removeStation(unit: Unit): void; findStationsPath(from: TrainStation, to: TrainStation): TrainStation[];

