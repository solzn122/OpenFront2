# src/client/components/clan/ClanShared.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 14920 bytes
- Dependencies: lit, ../../ClanApi, ../../Utils, ./ClanStatsBreakdown
- Public interfaces: { renderLoadingSpinner }, { showToast }, defaultOrderForSort, formatClanDate, translateClanRole, renderRoleIcon, renderStat, renderClanWL, renderServerPagination, renderMemberSearchInput, renderMemberSortControl, renderMemberPagination, renderWLBarRow, renderMemberStats, renderMemberRow, filterMembersBySearch, filterRequestsBySearch
- Important implementation details: Functions/methods: defaultOrderForSort, formatClanDate, translateClanRole, renderRoleIcon, renderStat, renderClanWL, renderPaginationButtons, renderServerPagination, renderMemberSearchInput, renderOrderIcon, renderMemberSortControl, renderMemberPagination, renderWLBarRow, renderMemberStats, renderMemberRow, filterMembersBySearch, filterRequestsBySearch Content notes: import { html, type TemplateResult } from "lit"; import type { ClanJoinRequest, ClanMember, ClanMemberOrder, ClanMemberSort, ClanMemberStats, ClanStats,

