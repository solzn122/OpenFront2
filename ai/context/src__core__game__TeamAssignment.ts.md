# src/core/game/TeamAssignment.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3006 bytes
- Dependencies: ../PseudoRandom, ../Util, ./Game
- Public interfaces: assignTeams, assignTeamsLobbyPreview, getMaxTeamSize
- Important implementation details: Functions/methods: assignTeams, assignTeamsLobbyPreview, getMaxTeamSize Content notes: import { PseudoRandom } from "../PseudoRandom"; import { simpleHash } from "../Util"; import { PlayerInfo, PlayerType, Team } from "./Game"; export function assignTeams( players: PlayerInfo[], teams: Team[], maxTeamSize: number = getMaxTeamSize(players.length, teams.length), ): Map<PlayerInfo, Team | "kicked"> {

