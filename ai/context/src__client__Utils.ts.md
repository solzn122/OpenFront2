# src/client/Utils.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 20570 bytes
- Dependencies: intl-messageformat, ../core/game/Game, ../core/Schemas, ./LangSelector, ./Platform
- Public interfaces: TUTORIAL_VIDEO_URL, normaliseMapKey, getMapName, getGameModeLabel, getActiveModifiers, getModifierLabels, renderDuration, renderTroops, copyToClipboard, renderNumber, formatPercentage, formatKeyForDisplay, createCanvas, generateCryptoRandomUUID, formatDebugTranslation, translateText, getTranslatedPlayerTeamLabel, severityColors, getMessageTypeClasses, getModifierKey, getAltKey, getGamesPlayed, incrementGamesPlayed, isInIframe, getSvgAspectRatio, getDiscordAvatarUrl, calculateServerTimeOffset, getServerNow, showToast, getSecondsUntilServerTimestamp
- Important implementation details: Functions/methods: normaliseMapKey, getMapName, getGameModeLabel, getTeamCount, getTeamSize, getActiveModifiers, getModifierLabels, renderDuration, renderTroops, copyToClipboard, renderNumber, formatPercentage, formatKeyForDisplay, createCanvas, generateCryptoRandomUUID, formatDebugTranslation, getCachedLangSelector, translateText, getTranslatedPlayerTeamLabel, getMessageTypeClasses, getModifierKey, getAltKey, getGamesPlayed, incrementGamesPlayed, isInIframe, getSvgAspectRatio, parseNum, getDiscordAvatarUrl, calculateServerTimeOffset, getServerNow Events: new CustomEvent("show-message", {
      detail: { message, color, duration },
    }) Content notes: import IntlMessageFormat from "intl-messageformat"; import { Duos, GameMode, HumansVsNations, MessageType, PublicGameModifiers, Quads,

