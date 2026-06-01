# src/core/execution/alliance/BreakAllianceExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1502 bytes
- Dependencies: ../../game/Game
- Public interfaces: BreakAllianceExecution
- Important implementation details: Classes: BreakAllianceExecution Functions/methods: BreakAllianceExecution.constructor, BreakAllianceExecution.init, BreakAllianceExecution.tick, BreakAllianceExecution.isActive, BreakAllianceExecution.activeDuringSpawnPhase Content notes: import { Execution, Game, Player, PlayerID } from "../../game/Game"; export class BreakAllianceExecution implements Execution { private active = true; private recipient: Player | null = null; private mg: Game | null = null; constructor( private requestor: Player, private recipientID: PlayerID,

