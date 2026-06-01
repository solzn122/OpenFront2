# src/client/components/baseComponents/stats/PlayerStatsTree.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 13613 bytes
- Dependencies: lit, lit/decorators.js, ../../../../core/ApiSchemas, ../../../../core/game/Game, ../../../../core/StatsSchemas, ../../../Utils, ./PlayerStatsGrid, ./PlayerStatsTable
- Public interfaces: PlayerStatsTreeView
- Important implementation details: Classes: PlayerStatsTreeView Functions/methods: PlayerStatsTreeView.labelForMode, PlayerStatsTreeView.labelForRankedType, PlayerStatsTreeView.createRenderRoot, PlayerStatsTreeView.getSelectedLeaf, PlayerStatsTreeView.syncSelection, PlayerStatsTreeView.willUpdate, PlayerStatsTreeView.setGameType, PlayerStatsTreeView.setMode, PlayerStatsTreeView.setRankedType, PlayerStatsTreeView.setDifficulty, PlayerStatsTreeView.mergeStats, PlayerStatsTreeView.mergeStatValue, PlayerStatsTreeView.mergeStatArrays, PlayerStatsTreeView.mergeStatRecord, PlayerStatsTreeView.cloneStats, PlayerStatsTreeView.render Content notes: import { LitElement, PropertyValues, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { PlayerStatsLeaf, PlayerStatsTree } from "../../../../core/ApiSchemas"; import { Difficulty, GameMode, GameType, RankedType,

