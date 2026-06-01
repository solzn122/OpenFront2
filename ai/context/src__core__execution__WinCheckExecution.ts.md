# src/core/execution/WinCheckExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3755 bytes
- Dependencies: ../EventBus, ../game/Game
- Public interfaces: WinEvent, WinCheckExecution
- Important implementation details: Classes: WinEvent, WinCheckExecution Functions/methods: WinEvent.constructor, WinCheckExecution.constructor, WinCheckExecution.init, WinCheckExecution.tick, WinCheckExecution.checkWinnerFFA, WinCheckExecution.checkWinnerTeam, WinCheckExecution.isActive, WinCheckExecution.activeDuringSpawnPhase Content notes: import { GameEvent } from "../EventBus"; import { ColoredTeams, Execution, Game, GameMode, Player, PlayerType,

