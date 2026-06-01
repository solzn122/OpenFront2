# src/client/ClientGameRunner.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 28296 bytes
- Dependencies: ../client/Utils, ../core/EventBus, ../core/Schemas, ../core/Util, ../core/configuration/Config, ../core/configuration/ConfigLoader, ../core/game/Game, ../core/game/GameMap, ../core/game/GameMapLoader, ../core/game/GameUpdates, ../core/game/GameView, ../core/game/TerrainMapLoader, ../core/game/UserSettings, ../core/worker/WorkerClient, ./Auth, ./InputHandler, ./LocalPersistantStats, ./TerrainMapFileLoader, ./Transport, ./Utils, ./graphics/GameRenderer, ./graphics/TransformHandler, ./sound/SoundManager
- Public interfaces: joinLobby, ClientGameRunner
- Important implementation details: Classes: ClientGameRunner Functions/methods: joinLobby, onconnect, onmessage, createClientGame, ClientGameRunner.constructor, ClientGameRunner.shouldPreventWindowClose, ClientGameRunner.saveGame, ClientGameRunner.start, onconnect, onmessage, goToPlayer, ClientGameRunner.stop, ClientGameRunner.inputEvent, ClientGameRunner.autoUpgradeEvent, ClientGameRunner.findAndUpgradeNearestBuilding, ClientGameRunner.doBoatAttackUnderCursor, ClientGameRunner.doGroundAttackUnderCursor, ClientGameRunner.doRequestAllianceUnderCursor, ClientGameRunner.doBreakAllianceUnderCursor, ClientGameRunner.getTileUnderCursor, ClientGameRunner.canBoatAttack, ClientGameRunner.sendBoatAttackIntent, ClientGameRunner.canAutoBoat, ClientGameRunner.onMouseMove, ClientGameRunner.onConnectionCheck, showErrorModal Events: new LobbyInfoEvent(message.lobby, message.myClientID), new CustomEvent("leave-lobby", {
            detail: { lobby: lobbyConfig.gameID, cause: "full-lobby" },
            bubbles: true,
            composed: true,
, new CustomEvent("leave-lobby", {
            detail: { lobby: lobbyConfig.gameID, cause: "host-left" },
            bubbles: true,
            composed: true,
 , MouseUpEvent, MouseMoveEvent, AutoUpgradeEvent, DoBoatAttackEvent, DoGroundAttackEvent, DoRequestAllianceEvent, DoBreakAllianceEvent, new SendHashEvent(hu.tick, hu.hash), new TickMetricsEvent(gu.tickExecutionDuration, this.currentTickDelay), new GoToPlayerEvent(myPlayer, 10), new GoToPlayerEvent(this.gameView.myPlayer()!, 8), new SendSpawnIntentEvent(tile), new SendAttackIntentEvent(
            this.gameView.owner(tile).id(),
            this.myPlayer!.troops() * this.renderer.uiState.attackRatio,
          ), new SendUpgradeStructureIntentEvent(
          bestUpgrade.unitId,
          bestUpgrade.unitType,
        ), new SendAttackIntentEvent(
            this.gameView.owner(tile).id(),
            this.myPlayer!.troops() * this.renderer.uiState.attackRatio,
          ), new SendAllianceRequestIntentEvent(myPlayer, recipient), new SendBreakAllianceIntentEvent(myPlayer, recipient), new SendBoatAttackIntentEvent(
        tile,
        this.myPlayer.troops() * this.renderer.uiState.attackRatio,
      ), click, click Content notes: import { translateText } from "../client/Utils"; import { EventBus } from "../core/EventBus"; import { ClientID, GameID, GameRecord, GameStartInfo, LobbyInfoEvent,

