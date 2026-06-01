# src/core/execution/ConstructionExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5102 bytes
- Dependencies: ../game/Game, ../game/GameMap, ./CityExecution, ./DefensePostExecution, ./FactoryExecution, ./MIRVExecution, ./MissileSiloExecution, ./NukeExecution, ./PortExecution, ./SAMLauncherExecution, ./WarshipExecution
- Public interfaces: ConstructionExecution
- Important implementation details: Classes: ConstructionExecution Functions/methods: ConstructionExecution.constructor, ConstructionExecution.init, ConstructionExecution.tick, ConstructionExecution.completeConstruction, ConstructionExecution.isStructure, ConstructionExecution.isActive, ConstructionExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, Tick, Unit, UnitType } from "../game/Game"; import { TileRef } from "../game/GameMap"; import { CityExecution } from "./CityExecution"; import { DefensePostExecution } from "./DefensePostExecution"; import { FactoryExecution } from "./FactoryExecution"; import { MirvExecution } from "./MIRVExecution"; import { MissileSiloExecution } from "./MissileSiloExecution"; import { NukeExecution } from "./NukeExecution";

