# src/core/execution/MIRVExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5700 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../pathfinding/PathFinder, ../pathfinding/PathFinder.Parabola, ../pathfinding/types, ../PseudoRandom, ../Util, ./NukeExecution
- Public interfaces: MirvExecution
- Important implementation details: Classes: MirvExecution Functions/methods: MirvExecution.constructor, MirvExecution.init, MirvExecution.tick, MirvExecution.separate, MirvExecution.selectDestinations, MirvExecution.tryGenerateTarget, MirvExecution.isOverlapping, MirvExecution.owner, MirvExecution.isActive, MirvExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, MessageType, Player, TerraNullius, Unit, UnitType,

