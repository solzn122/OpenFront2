# src/server/GameManager.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3720 bytes
- Dependencies: winston, ws, ../core/configuration/Config, ../core/game/Game, ../core/Schemas, ./Client, ./GameServer
- Public interfaces: GameManager
- Important implementation details: Classes: GameManager Functions/methods: GameManager.constructor, GameManager.game, GameManager.publicLobbies, GameManager.joinClient, GameManager.rejoinClient, GameManager.createGame, GameManager.activeGames, GameManager.activeClients, GameManager.desyncCount, GameManager.tick Content notes: import { Logger } from "winston"; import WebSocket from "ws"; import { ServerConfig } from "../core/configuration/Config"; import { Difficulty, GameMapSize, GameMapType, GameMode,

