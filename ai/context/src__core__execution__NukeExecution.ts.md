# src/core/execution/NukeExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13113 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../pathfinding/PathFinder, ../pathfinding/PathFinder.Parabola, ../pathfinding/types, ../PseudoRandom, ../StatsSchemas, ./Util
- Public interfaces: NukeExecution
- Important implementation details: Classes: NukeExecution Functions/methods: NukeExecution.constructor, NukeExecution.init, NukeExecution.target, NukeExecution.tilesToDestroy, NukeExecution.maybeBreakAlliances, NukeExecution.tick, NukeExecution.getNuke, NukeExecution.getTrajectory, NukeExecution.isTargetable, NukeExecution.updateNukeTargetable, NukeExecution.detonate, NukeExecution.redrawBuildings, NukeExecution.owner, NukeExecution.isActive, NukeExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, MessageType, Player, Structures, TerraNullius, TrajectoryTile,

