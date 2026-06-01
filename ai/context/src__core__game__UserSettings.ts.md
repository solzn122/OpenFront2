# src/core/game/UserSettings.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 11210 bytes
- Dependencies: ../CosmeticSchemas, ../Schemas
- Public interfaces: getDefaultKeybinds, USER_SETTINGS_CHANGED_EVENT, PATTERN_KEY, FLAG_KEY, COLOR_KEY, DARK_MODE_KEY, PERFORMANCE_OVERLAY_KEY, KEYBINDS_KEY, UserSettings
- Important implementation details: Classes: UserSettings Functions/methods: getDefaultKeybinds, UserSettings.emitChange, UserSettings.getCached, UserSettings.setCached, UserSettings.removeCached, UserSettings.getBool, UserSettings.setBool, UserSettings.getString, UserSettings.setString, UserSettings.getFloat, UserSettings.setFloat, UserSettings.emojis, UserSettings.performanceOverlay, UserSettings.alertFrame, UserSettings.anonymousNames, UserSettings.lobbyIdVisibility, UserSettings.fxLayer, UserSettings.structureSprites, UserSettings.darkMode, UserSettings.leftClickOpensMenu, UserSettings.territoryPatterns, UserSettings.attackingTroopsOverlay, UserSettings.toggleAttackingTroopsOverlay, UserSettings.cursorCostLabel, UserSettings.toggleLeftClickOpenMenu, UserSettings.toggleEmojis, UserSettings.setPerformanceOverlay, UserSettings.togglePerformanceOverlay, UserSettings.toggleAlertFrame, UserSettings.toggleRandomName Events: new CustomEvent(`${USER_SETTINGS_CHANGED_EVENT}:${key}`, {
          detail: value,
        }) Content notes: import { Cosmetics } from "../CosmeticSchemas"; import { PlayerPattern } from "../Schemas"; export function getDefaultKeybinds(isMac: boolean): Record<string, string> { return { toggleView: "Space", coordinateGrid: "KeyM", buildCity: "Digit1", buildFactory: "Digit2",

