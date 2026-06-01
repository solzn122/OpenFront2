# src/core/game/TerraNulliusImpl.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 348 bytes
- Dependencies: ../Schemas, ./Game
- Public interfaces: TerraNulliusImpl
- Important implementation details: Classes: TerraNulliusImpl Functions/methods: TerraNulliusImpl.constructor, TerraNulliusImpl.smallID, TerraNulliusImpl.clientID, TerraNulliusImpl.id, TerraNulliusImpl.isPlayer Content notes: import { ClientID } from "../Schemas"; import { TerraNullius } from "./Game"; export class TerraNulliusImpl implements TerraNullius { constructor() {} smallID(): number { return 0; } clientID(): ClientID {

