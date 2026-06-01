# src/client/Main.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 34054 bytes
- Dependencies: resources/version.txt?raw, ../core/ApiSchemas, ../core/AssetUrls, ../core/EventBus, ../core/Schemas, ../core/configuration/Config, ../core/configuration/ConfigLoader, ../core/game/Game, ../core/game/UserSettings, ./AccountModal, ./Api, ./Auth, ./ClanModal, ./ClientGameRunner, ./Cosmetics, ./CrazyGamesSDK, ./FlagInput, ./FlagInput, ./FlagInputModal, ./FlagInputModal, ./GameInfoModal, ./GameModeSelector, ./GameModeSelector, ./GameStartingModal, ./GoogleAdElement, ./HelpModal, ./HomepagePromos, ./HostLobbyModal, ./JoinLobbyModal, ./LangSelector, ./LangSelector, ./Layout, ./LeaderboardModal, ./Matchmaking, ./Matchmaking, ./Navigation, ./NewsModal, ./PatternInput, ./SinglePlayerModal, ./Store, ./TerritoryPatternsModal, ./TerritoryPatternsModal, ./TokenLoginModal, ./Transport, ./UserSettingModal, ./UsernameInput, ./UsernameInput, ./Utils, ./components/DesktopNavBar, ./components/Footer, ./components/MainLayout, ./components/MobileNavBar, ./components/PlayPage, ./components/RankedModal, ./components/baseComponents/Button, ./components/baseComponents/Modal, ./styles.css, ./styles/core/typography.css, ./styles/core/variables.css, ./styles/layout/container.css, ./styles/layout/header.css, ./styles/modal/chat.css
- Public interfaces: internal classes/functions (1 classes, 26 functions/methods)
- Important implementation details: Classes: Client Functions/methods: updateAccountNavButton, showAvatar, showSignIn, showEmailLoggedIn, Client.initialize, onUserMe, applyDarkMode, onHashUpdate, onPopState, onJoinChanged, updateSliderProgress, Client.handleUrl, strip, alertAndStrip, setCosmetic, Client.handleJoinLobby, Client.updateJoinUrlForShare, Client.handleLeaveLobby, Client.handleOpenMatchmaking, Client.handleKickPlayer, Client.handleStartGame, Client.handleUpdateGameConfig, Client.getTurnstileToken, hideCrazyGamesElements, bootstrap, getTurnstileToken Events: beforeunload, join-lobby, leave-lobby, kick-player, start-game, update-game-config, open-matchmaking, click, flag-input-click, pattern-input-click, showPage, new CustomEvent("userMeResponse", {
          detail: userMeResponse,
          bubbles: true,
          cancelable: true,
        }), click, `${USER_SETTINGS_CHANGED_EVENT}:${DARK_MODE_KEY}`, DOMContentLoaded, popstate, hashchange, join-changed, input, beforeunload, new CustomEvent("show-message", {
            detail: {
              message: translateText("public_lobby.join_timeout"),
              color: "red",
         , new SendKickPlayerIntentEvent(target), new SendStartGameEvent(), new SendUpdateGameConfigIntentEvent(config), DOMContentLoaded Content notes: import version from "resources/version.txt?raw"; import { UserMeResponse } from "../core/ApiSchemas"; import { assetUrl } from "../core/AssetUrls"; import { EventBus } from "../core/EventBus"; import { GAME_ID_REGEX, GameInfo, GameRecord,

