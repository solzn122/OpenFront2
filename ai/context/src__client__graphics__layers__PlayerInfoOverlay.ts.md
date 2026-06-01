# src/client/graphics/layers/PlayerInfoOverlay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 17061 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/AssetUrls, ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameMap, ../../../core/game/GameUpdates, ../../../core/game/GameView, ../../InputHandler, ../../Utils, ../PlayerIcons, ../TransformHandler, ./ImmunityTimer, ./Layer, ./RadialMenu, ./RelationSmiley, ./SpawnTimer
- Public interfaces: PlayerInfoOverlay
- Important implementation details: Classes: PlayerInfoOverlay Functions/methods: euclideanDistWorld, distSortUnitWorld, PlayerInfoOverlay.init, PlayerInfoOverlay.onMouseEvent, PlayerInfoOverlay.hide, PlayerInfoOverlay.maybeShow, PlayerInfoOverlay.tick, PlayerInfoOverlay.renderLayer, PlayerInfoOverlay.shouldTransform, PlayerInfoOverlay.setVisible, PlayerInfoOverlay.getPlayerNameColor, PlayerInfoOverlay.getRelationSmiley, PlayerInfoOverlay.getRelationName, PlayerInfoOverlay.displayUnitCount, PlayerInfoOverlay.allianceExpirationText, PlayerInfoOverlay.renderPlayerNameIcons, PlayerInfoOverlay.renderPlayerInfo, PlayerInfoOverlay.renderTroopBar, PlayerInfoOverlay.renderUnitInfo, PlayerInfoOverlay.render, PlayerInfoOverlay.createRenderRoot Events: MouseMoveEvent, ContextMenuEvent, TouchEvent, CloseRadialMenuEvent, SpawnBarVisibleEvent, ImmunityBarVisibleEvent Content notes: import { html, LitElement, TemplateResult } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { assetUrl } from "../../../core/AssetUrls"; import { EventBus } from "../../../core/EventBus"; import { PlayerProfile, PlayerType, Relation,

