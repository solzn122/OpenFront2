# src/client/graphics/layers/RadialMenuElements.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 20400 bytes
- Dependencies: ../../../core/AssetUrls, ../../../core/configuration/Config, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameView, ../../../core/Util, ../../Utils, ../UIState, ./BuildMenu, ./ChatIntegration, ./EmojiTable, ./PlayerActionHandler, ./PlayerPanel, ./RadialMenu, ../../../core/EventBus
- Public interfaces: COLORS, infoMenuElement, attackMenuElement, deleteUnitElement, buildMenuElement, boatMenuElement, centerButtonElement, rootMenuElement
- Important implementation details: Functions/methods: isFriendlyTarget, isDisconnectedTarget, getAllEnabledUnits, addIfEnabled, createMenuElements Content notes: import { assetUrl } from "../../../core/AssetUrls"; import { Config } from "../../../core/configuration/Config"; import { AllPlayers, BuildableAttacks, PlayerActions, PlayerBuildableUnitType, Structures,

