# src/core/game/AllianceRequestImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1126 bytes
- Dependencies: ./Game, ./GameImpl, ./GameUpdates
- Public interfaces: AllianceRequestImpl
- Important implementation details: Classes: AllianceRequestImpl Functions/methods: AllianceRequestImpl.constructor, AllianceRequestImpl.status, AllianceRequestImpl.requestor, AllianceRequestImpl.recipient, AllianceRequestImpl.createdAt, AllianceRequestImpl.accept, AllianceRequestImpl.reject, AllianceRequestImpl.toUpdate Content notes: import { AllianceRequest, Player, Tick } from "./Game"; import { GameImpl } from "./GameImpl"; import { AllianceRequestUpdate, GameUpdateType } from "./GameUpdates"; export class AllianceRequestImpl implements AllianceRequest { private status_: "pending" | "accepted" | "rejected" = "pending"; constructor( private requestor_: Player, private recipient_: Player,

