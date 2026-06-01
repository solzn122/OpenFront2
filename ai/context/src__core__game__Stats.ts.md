# src/core/game/Stats.ts

- Purpose: Project file.
- Category: source
- Size: 3206 bytes
- Dependencies: ../Schemas, ../StatsSchemas, ./Game
- Public interfaces: none detected
- Important implementation details: Content notes: import { AllPlayersStats } from "../Schemas"; import { NukeType, OtherUnitType, PlayerStats } from "../StatsSchemas"; import { Player, TerraNullius } from "./Game"; export interface Stats { getPlayerStats(player: Player): PlayerStats | null; stats(): AllPlayersStats; numMirvsLaunched(): bigint; attack(

