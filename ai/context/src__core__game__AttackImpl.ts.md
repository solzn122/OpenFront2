# src/core/game/AttackImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4901 bytes
- Dependencies: ./Game, ./GameImpl, ./GameMap, ./PlayerImpl
- Public interfaces: AttackImpl
- Important implementation details: Classes: AttackImpl Functions/methods: AttackImpl.constructor, AttackImpl.sourceTile, AttackImpl.target, AttackImpl.attacker, AttackImpl.troops, AttackImpl.setTroops, AttackImpl.isActive, AttackImpl.id, AttackImpl.delete, AttackImpl.orderRetreat, AttackImpl.executeRetreat, AttackImpl.retreating, AttackImpl.retreated, AttackImpl.borderSize, AttackImpl.clearBorder, AttackImpl.addBorderTile, AttackImpl.removeBorderTile, AttackImpl.clusteredPositions, AttackImpl.clusterBorderTiles Content notes: import { Attack, Player, TerraNullius } from "./Game"; import { GameImpl } from "./GameImpl"; import { TileRef } from "./GameMap"; import { PlayerImpl } from "./PlayerImpl"; export class AttackImpl implements Attack { private _isActive = true; private _borderSize = 0; public _retreating = false;

