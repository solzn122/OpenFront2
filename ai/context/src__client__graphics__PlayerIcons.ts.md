# src/client/graphics/PlayerIcons.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10548 bytes
- Dependencies: ../../core/AssetUrls, ../../core/game/Game, ../../core/game/GameView
- Public interfaces: ALLIANCE_ICON_ID, TRAITOR_ICON_ID, IMAGE_ICON_KIND, EMOJI_ICON_KIND, getFirstPlacePlayer, getPlayerIcons, createAllianceProgressIconRefs, updateAllianceProgressIconRefs, computeAllianceClipPath
- Important implementation details: Functions/methods: getFirstPlacePlayer, getPlayerIcons, createAllianceProgressIconRefs, updateAllianceProgressIconRefs, computeAllianceClipPath Content notes: import { assetUrl } from "../../core/AssetUrls"; import { AllPlayers, Nukes } from "../../core/game/Game"; import { GameView, PlayerView } from "../../core/game/GameView"; const allianceIcon = assetUrl("images/AllianceIcon.svg"); const allianceIconFaded = assetUrl("images/AllianceIconFaded.svg"); const allianceRequestBlackIcon = assetUrl( "images/AllianceRequestBlackIcon.svg", );

