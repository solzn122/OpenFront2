# src/client/utilities/GameConfigHelpers.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3417 bytes
- Dependencies: ../../core/game/Game, ../../core/Schemas
- Public interfaces: sliderToNationsConfig, nationsConfigToSlider, toOptionalNumber, preventDisallowedKeys, parseBoundedIntegerFromInput, parseBoundedFloatFromInput, getBotsForCompactMap, getNationsForCompactMap, getRandomMapType, getUpdatedDisabledUnits
- Important implementation details: Functions/methods: sliderToNationsConfig, nationsConfigToSlider, toOptionalNumber, preventDisallowedKeys, parseBoundedIntegerFromInput, parseBoundedFloatFromInput, getBotsForCompactMap, getNationsForCompactMap, getRandomMapType, getUpdatedDisabledUnits Content notes: import { GameMapType, UnitType } from "../../core/game/Game"; import { GameConfig } from "../../core/Schemas"; /** export function sliderToNationsConfig( sliderValue: number, defaultNationCount: number, ): GameConfig["nations"] { if (sliderValue === 0) return "disabled";

