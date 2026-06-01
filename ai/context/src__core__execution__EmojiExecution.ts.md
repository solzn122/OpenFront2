# src/core/execution/EmojiExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1756 bytes
- Dependencies: ../game/Game, ../PseudoRandom, ../Util, ./nation/NationEmojiBehavior
- Public interfaces: EmojiExecution
- Important implementation details: Classes: EmojiExecution Functions/methods: EmojiExecution.constructor, EmojiExecution.init, EmojiExecution.tick, EmojiExecution.isActive, EmojiExecution.activeDuringSpawnPhase Content notes: import { AllPlayers, Execution, Game, Player, PlayerID } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { flattenedEmojiTable } from "../Util"; import { respondToEmoji } from "./nation/NationEmojiBehavior"; export class EmojiExecution implements Execution { private recipient: Player | typeof AllPlayers; private mg: Game; private random: PseudoRandom;

