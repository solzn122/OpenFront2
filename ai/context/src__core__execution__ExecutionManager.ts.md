# src/core/execution/ExecutionManager.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5505 bytes
- Dependencies: ../game/Game, ../PseudoRandom, ../Schemas, ../Util, ./alliance/AllianceExtensionExecution, ./alliance/AllianceRejectExecution, ./alliance/AllianceRequestExecution, ./alliance/BreakAllianceExecution, ./AttackExecution, ./BoatRetreatExecution, ./ConstructionExecution, ./DeleteUnitExecution, ./DonateGoldExecution, ./DonateTroopExecution, ./EmbargoAllExecution, ./EmbargoExecution, ./EmojiExecution, ./MarkDisconnectedExecution, ./MoveWarshipExecution, ./NationExecution, ./NoOpExecution, ./PauseExecution, ./QuickChatExecution, ./RetreatExecution, ./SpawnExecution, ./TargetPlayerExecution, ./TransportShipExecution, ./TribeSpawner, ./UpgradeStructureExecution, ./utils/PlayerSpawner
- Public interfaces: Executor
- Important implementation details: Classes: Executor Functions/methods: Executor.constructor, Executor.createExecs, Executor.createExec, Executor.spawnTribes, Executor.spawnPlayers, Executor.nationExecutions Content notes: import { Execution, Game } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { ClientID, GameID, StampedIntent, Turn } from "../Schemas"; import { simpleHash } from "../Util"; import { AllianceExtensionExecution } from "./alliance/AllianceExtensionExecution"; import { AllianceRejectExecution } from "./alliance/AllianceRejectExecution"; import { AllianceRequestExecution } from "./alliance/AllianceRequestExecution"; import { BreakAllianceExecution } from "./alliance/BreakAllianceExecution";

