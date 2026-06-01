# src/client/CrazyGamesSDK.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 11273 bytes
- Dependencies: none detected
- Public interfaces: CrazyGamesSDK, crazyGamesSDK
- Important implementation details: Classes: CrazyGamesSDK Functions/methods: CrazyGamesSDK.constructor, CrazyGamesSDK.ready, CrazyGamesSDK.isOnCrazyGames, CrazyGamesSDK.isReady, CrazyGamesSDK.maybeInit, CrazyGamesSDK.getUsername, CrazyGamesSDK.addAuthListener, CrazyGamesSDK.isInstantMultiplayer, CrazyGamesSDK.gameplayStart, CrazyGamesSDK.gameplayStop, CrazyGamesSDK.happytime, CrazyGamesSDK.loadingStart, CrazyGamesSDK.loadingStop, CrazyGamesSDK.showInviteButton, CrazyGamesSDK.hideInviteButton, CrazyGamesSDK.createInviteLink, CrazyGamesSDK.getInviteGameId, CrazyGamesSDK.createBottomLeftAd, CrazyGamesSDK.clearBottomLeftAd, CrazyGamesSDK.requestMidgameAd Content notes: declare global { interface Window { CrazyGames?: { SDK: { init: () => Promise<void>; user: { getUser(): Promise<{ username: string;

