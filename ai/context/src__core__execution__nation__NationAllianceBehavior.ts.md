# src/core/execution/nation/NationAllianceBehavior.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 15415 bytes
- Dependencies: ../../game/Game, ../../PseudoRandom, ../../Util, ../alliance/AllianceExtensionExecution, ../alliance/AllianceRequestExecution, ./NationEmojiBehavior
- Public interfaces: NationAllianceBehavior
- Important implementation details: Classes: NationAllianceBehavior Functions/methods: NationAllianceBehavior.constructor, NationAllianceBehavior.handleAllianceRequests, NationAllianceBehavior.handleAllianceExtensionRequests, NationAllianceBehavior.maybeSendAllianceRequests, isAcceptablePlayerType, NationAllianceBehavior.getAllianceDecision, NationAllianceBehavior.hasTooManyAlliances, NationAllianceBehavior.isConfused, NationAllianceBehavior.isEarlygame, NationAllianceBehavior.isAlliancePartnerThreat, NationAllianceBehavior.shouldRejectInTeamGame, NationAllianceBehavior.checkAlreadyEnoughAlliances, NationAllianceBehavior.isAlliancePartnerFriendly, NationAllianceBehavior.isAlliancePartnerSimilarlyStrong, NationAllianceBehavior.maybeBetray, NationAllianceBehavior.betray Content notes: import { Difficulty, Game, GameMode, Player, PlayerType, Relation, } from "../../game/Game";

