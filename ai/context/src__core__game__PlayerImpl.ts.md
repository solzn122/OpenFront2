# src/core/game/PlayerImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 39172 bytes
- Dependencies: ../../client/Utils, ../PseudoRandom, ../Schemas, ../Util, ./AttackImpl, ./Game, ./GameImpl, ./GameMap, ./GameUpdates, ./TransportShipUtils, ./UnitImpl
- Public interfaces: PlayerImpl
- Important implementation details: Classes: Donation, PlayerImpl Functions/methods: Donation.constructor, PlayerImpl.constructor, PlayerImpl.toUpdate, PlayerImpl.smallID, PlayerImpl.name, PlayerImpl.displayName, PlayerImpl.clientID, PlayerImpl.id, PlayerImpl.type, PlayerImpl.units, PlayerImpl.recordUnitConstructed, PlayerImpl.unitsConstructed, PlayerImpl.unitCount, PlayerImpl.unitsOwned, PlayerImpl.sharesBorderWith, PlayerImpl.numTilesOwned, PlayerImpl.tiles, PlayerImpl.borderTiles, PlayerImpl.nearby, PlayerImpl.shoreReachableNeighbors, PlayerImpl.isPlayer, PlayerImpl.setTroops, PlayerImpl.conquer, PlayerImpl.orderRetreat, PlayerImpl.executeRetreat, PlayerImpl.relinquish, PlayerImpl.info, PlayerImpl.isLobbyCreator, PlayerImpl.isAlive, PlayerImpl.hasSpawned Content notes: import { renderNumber, renderTroops } from "../../client/Utils"; import { PseudoRandom } from "../PseudoRandom"; import { ClientID } from "../Schemas"; import { assertNever, findClosestBy, minInt, simpleHash,

