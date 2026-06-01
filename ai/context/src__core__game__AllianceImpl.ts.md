# src/core/game/AllianceImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2419 bytes
- Dependencies: ./Game, ./GameUpdates
- Public interfaces: AllianceImpl
- Important implementation details: Classes: AllianceImpl Functions/methods: AllianceImpl.constructor, AllianceImpl.other, AllianceImpl.requestor, AllianceImpl.recipient, AllianceImpl.createdAt, AllianceImpl.expire, AllianceImpl.addExtensionRequest, AllianceImpl.bothAgreedToExtend, AllianceImpl.onlyOneAgreedToExtend, AllianceImpl.agreedToExtend, AllianceImpl.id, AllianceImpl.extend, AllianceImpl.expiresAt Content notes: import { Game, MutableAlliance, Player, Tick } from "./Game"; import { GameUpdateType } from "./GameUpdates"; export class AllianceImpl implements MutableAlliance { private extensionRequestedRequestor_: boolean = false; private extensionRequestedRecipient_: boolean = false; private expiresAt_: Tick; constructor( private readonly mg: Game,

