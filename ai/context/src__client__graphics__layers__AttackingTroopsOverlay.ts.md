# src/client/graphics/layers/AttackingTroopsOverlay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 11456 bytes
- Dependencies: ../../../core/EventBus, ../../../core/game/Game, ../../../core/game/GameView, ../../../core/game/UserSettings, ../../InputHandler, ../../Utils, ../TransformHandler, ./Layer
- Public interfaces: computeLabelScale, alignClusterOrder, AttackingTroopsOverlay
- Important implementation details: Classes: AttackingTroopsOverlay Functions/methods: computeLabelScale, alignClusterOrder, dist, AttackingTroopsOverlay.constructor, AttackingTroopsOverlay.shouldTransform, AttackingTroopsOverlay.init, AttackingTroopsOverlay.destroy, AttackingTroopsOverlay.getTickIntervalMs, AttackingTroopsOverlay.labelScale, AttackingTroopsOverlay.tick, AttackingTroopsOverlay.ensureLabel, AttackingTroopsOverlay.renderLayer, AttackingTroopsOverlay.reconcileLabelPositions, AttackingTroopsOverlay.createLabelTemplate, AttackingTroopsOverlay.createLabelElement, AttackingTroopsOverlay.updateLabelContent, AttackingTroopsOverlay.removeLabel, AttackingTroopsOverlay.clearAllLabels Events: AlternateViewEvent Content notes: import { EventBus } from "../../../core/EventBus"; import { Cell, PlayerType } from "../../../core/game/Game"; import { GameView } from "../../../core/game/GameView"; import { UserSettings } from "../../../core/game/UserSettings"; import { AlternateViewEvent } from "../../InputHandler"; import { renderTroops } from "../../Utils"; import { TransformHandler } from "../TransformHandler"; import { Layer } from "./Layer";

