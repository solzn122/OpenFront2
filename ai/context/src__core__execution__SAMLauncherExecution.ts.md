# src/core/execution/SAMLauncherExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10510 bytes
- Dependencies: ../game/Game, ../game/GameMap, ../PseudoRandom, ./SAMMissileExecution
- Public interfaces: SAMLauncherExecution
- Important implementation details: Classes: SAMTargetingSystem, SAMLauncherExecution Functions/methods: SAMTargetingSystem.constructor, SAMTargetingSystem.updateUnreachableNukes, SAMTargetingSystem.tickToReach, SAMTargetingSystem.computeInterceptionTile, SAMTargetingSystem.getSingleTarget, SAMLauncherExecution.constructor, SAMLauncherExecution.init, SAMLauncherExecution.tick, SAMLauncherExecution.isActive, SAMLauncherExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, isUnit, MessageType, Player, Unit, UnitType,

