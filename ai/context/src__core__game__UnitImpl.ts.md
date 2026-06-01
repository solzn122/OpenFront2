# src/core/game/UnitImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15058 bytes
- Dependencies: ../Util, ./Game, ./GameImpl, ./GameMap, ./GameUpdates, ./PlayerImpl
- Public interfaces: UnitImpl
- Important implementation details: Classes: UnitImpl Functions/methods: UnitImpl.constructor, UnitImpl.setTargetable, UnitImpl.isTargetable, UnitImpl.isUnit, UnitImpl.touch, UnitImpl.setTileTarget, UnitImpl.tileTarget, UnitImpl.id, UnitImpl.toUpdate, UnitImpl.type, UnitImpl.lastTile, UnitImpl.move, UnitImpl.setTroops, UnitImpl.troops, UnitImpl.health, UnitImpl.hasHealth, UnitImpl.tile, UnitImpl.owner, UnitImpl.info, UnitImpl.setOwner, UnitImpl.modifyHealth, UnitImpl.clearPendingDeletion, UnitImpl.isMarkedForDeletion, UnitImpl.markForDeletion, UnitImpl.isOverdueDeletion, UnitImpl.delete, UnitImpl.displayMessageOnDeleted, UnitImpl.isActive, UnitImpl.wasDestroyedByEnemy, UnitImpl.destroyer Content notes: import { simpleHash, toInt, withinInt } from "../Util"; import { AllUnitParams, MessageType, Player, Tick, TrainType, TrajectoryTile,

