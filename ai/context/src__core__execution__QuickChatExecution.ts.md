# src/core/execution/QuickChatExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1495 bytes
- Dependencies: ../game/Game
- Public interfaces: QuickChatExecution
- Important implementation details: Classes: QuickChatExecution Functions/methods: QuickChatExecution.constructor, QuickChatExecution.init, QuickChatExecution.tick, QuickChatExecution.owner, QuickChatExecution.isActive, QuickChatExecution.activeDuringSpawnPhase, QuickChatExecution.getMessageFromKey Content notes: import { Execution, Game, Player, PlayerID } from "../game/Game"; export class QuickChatExecution implements Execution { private recipient: Player; private mg: Game; private active = true; constructor( private sender: Player, private recipientID: PlayerID,

