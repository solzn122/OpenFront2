# src/client/components/clan/ClanStatsBreakdown.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5941 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/ClanApiSchemas, ../../Utils, ./ClanShared
- Public interfaces: ClanStatsBreakdown
- Important implementation details: Classes: ClanStatsBreakdown Functions/methods: labelForSubKey, hasGames, ClanStatsBreakdown.createRenderRoot, ClanStatsBreakdown.setAllExpanded, ClanStatsBreakdown.renderRow, ClanStatsBreakdown.render Content notes: import { html, LitElement, type TemplateResult } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { RANKED_BREAKDOWN_KEYS, TEAM_BREAKDOWN_KEYS, type ClanMemberStats, type ClanMemberWL, } from "../../../core/ClanApiSchemas";

