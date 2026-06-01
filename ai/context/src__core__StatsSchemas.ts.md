# src/core/StatsSchemas.ts

- Purpose: Project file.
- Category: source
- Size: 4186 bytes
- Dependencies: zod, ./game/Game
- Public interfaces: bombUnits, BombUnitSchema, unitTypeToBombUnit, boatUnits, BoatUnitSchema, otherUnits, OtherUnitSchema, unitTypeToOtherUnit, ATTACK_INDEX_SENT, ATTACK_INDEX_RECV, ATTACK_INDEX_CANCEL, PLAYER_INDEX_HUMAN, PLAYER_INDEX_NATION, PLAYER_INDEX_BOT, BOAT_INDEX_SENT, BOAT_INDEX_ARRIVE, BOAT_INDEX_CAPTURE, BOAT_INDEX_DESTROY, BOMB_INDEX_LAUNCH, BOMB_INDEX_LAND, BOMB_INDEX_INTERCEPT, GOLD_INDEX_WORK, GOLD_INDEX_WAR, GOLD_INDEX_TRADE, GOLD_INDEX_STEAL, GOLD_INDEX_TRAIN_SELF, GOLD_INDEX_TRAIN_OTHER, OTHER_INDEX_BUILT, OTHER_INDEX_DESTROY, OTHER_INDEX_CAPTURE, OTHER_INDEX_LOST, OTHER_INDEX_UPGRADE, BigIntStringSchema, PlayerStatsSchema
- Important implementation details: Content notes: import { z } from "zod"; import { UnitType } from "./game/Game"; export const bombUnits = ["abomb", "hbomb", "mirv", "mirvw"] as const; export const BombUnitSchema = z.enum(bombUnits); export type BombUnit = z.infer<typeof BombUnitSchema>; export type NukeType = | UnitType.AtomBomb | UnitType.HydrogenBomb

