# src/client/LocalServer.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10899 bytes
- Dependencies: zod, ../core/EventBus, ../core/Schemas, ../core/Util, ./Auth, ./ClientGameRunner, ./InputHandler, ./utilities/ReplaySpeedMultiplier
- Public interfaces: LocalServer
- Important implementation details: Classes: LocalServer Functions/methods: LocalServer.constructor, LocalServer.updateCallback, LocalServer.start, LocalServer.onMessage, LocalServer.turnComplete, LocalServer.endTurn, LocalServer.endGame, compress Events: ReplaySpeedChangeEvent, GameSpeedUpIntentEvent, new ReplaySpeedChangeEvent(this.replaySpeedMultiplier), GameSpeedDownIntentEvent, new ReplaySpeedChangeEvent(this.replaySpeedMultiplier) Content notes: import { z } from "zod"; import { EventBus } from "../core/EventBus"; import { AllPlayersStats, ClientID, ClientMessage, ClientSendWinnerMessage, PartialGameRecordSchema,

