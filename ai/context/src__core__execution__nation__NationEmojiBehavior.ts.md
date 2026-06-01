# src/core/execution/nation/NationEmojiBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10384 bytes
- Dependencies: ../../game/Game, ../../PseudoRandom, ../../Util, ../EmojiExecution
- Public interfaces: EMOJI_ASSIST_ACCEPT, EMOJI_ASSIST_RELATION_TOO_LOW, EMOJI_ASSIST_TARGET_ME, EMOJI_ASSIST_TARGET_ALLY, EMOJI_AGGRESSIVE_ATTACK, EMOJI_ATTACK, EMOJI_WARSHIP_RETALIATION, EMOJI_NUKE, EMOJI_GOT_INSULTED, EMOJI_LOVE, EMOJI_CONFUSED, EMOJI_BRAG, EMOJI_CHARM_ALLIES, EMOJI_CLOWN, EMOJI_RAT, EMOJI_OVERWHELMED, EMOJI_CONGRATULATE, EMOJI_SCARED_OF_THREAT, EMOJI_BORED, EMOJI_HANDSHAKE, EMOJI_DONATION_OK, EMOJI_DONATION_TOO_SMALL, EMOJI_GREET, NationEmojiBehavior, respondToEmoji, respondToMIRV
- Important implementation details: Classes: NationEmojiBehavior Functions/methods: emojiId, NationEmojiBehavior.constructor, NationEmojiBehavior.maybeSendCasualEmoji, NationEmojiBehavior.checkOverwhelmedByAttacks, NationEmojiBehavior.checkVerySmallAttack, NationEmojiBehavior.congratulateWinner, NationEmojiBehavior.brag, NationEmojiBehavior.charmAllies, NationEmojiBehavior.annoyTraitors, NationEmojiBehavior.findRat, NationEmojiBehavior.greetNearbyPlayers, NationEmojiBehavior.maybeSendEmoji, NationEmojiBehavior.maybeSendAttackEmoji, NationEmojiBehavior.sendEmoji, NationEmojiBehavior.shouldSendEmoji, respondToEmoji, respondToMIRV Content notes: import { AllPlayers, Difficulty, Game, GameMode, Player, PlayerType, Relation,

