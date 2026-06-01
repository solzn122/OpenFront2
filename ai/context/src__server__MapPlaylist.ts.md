# src/server/MapPlaylist.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 23054 bytes
- Dependencies: ../core/configuration/DefaultConfig, ../core/game/Game, ../core/PseudoRandom, ../core/Schemas, ./Logger, ./MapLandTiles
- Public interfaces: MapPlaylist
- Important implementation details: Classes: MapPlaylist Functions/methods: MapPlaylist.gameConfig, MapPlaylist.getSpecialConfig, MapPlaylist.get1v1Config, MapPlaylist.getNextMap, MapPlaylist.generateNewPlaylist, MapPlaylist.addNextMapNonConsecutive, MapPlaylist.buildMapsList, MapPlaylist.getTeamCount, MapPlaylist.getRandomSpecialGameModifiers, MapPlaylist.supportsCompactMapForTeams, MapPlaylist.playersPerTeam, MapPlaylist.numberOfTeams, MapPlaylist.getSpawnImmunityDuration, MapPlaylist.getCrowdedMaxPlayers, MapPlaylist.lobbyMaxPlayers, MapPlaylist.adjustForTeams, MapPlaylist.calculateMapPlayerCounts, roundToNearest5 Content notes: import { SAM_CONSTRUCTION_TICKS } from "../core/configuration/DefaultConfig"; import { Difficulty, Duos, GameMapName, GameMapSize, GameMapType, GameMode,

