# src/client/ClanApi.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 12795 bytes
- Dependencies: ../core/ClanApiSchemas, ./Api, ./Auth
- Public interfaces: {
  ClanBan,
  ClanBansResponse,
  ClanBrowseResponse,
  ClanInfo,
  ClanJoinRequest,
  ClanMember,
  ClanMembersResponse,
  ClanMemberStats,
  ClanMemberWL,
  ClanRequestsResponse,
  ClanStats,
}, fetchClanLeaderboard, fetchClanStats, fetchClans, fetchClanDetail, fetchClanMembers, joinClan, leaveClan, updateClan, disbandClan, kickMember, promoteMember, demoteMember, transferLeadership, fetchClanRequests, approveClanRequest, denyClanRequest, withdrawClanRequest, banClanMember, unbanClanMember, fetchClanBans
- Important implementation details: Functions/methods: clanFetch, fetchClanLeaderboard, fetchClanStats, fetchClans, fetchClanDetail, fetchClanMembers, joinClan, leaveClan, updateClan, disbandClan, memberAction, kickMember, promoteMember, demoteMember, transferLeadership, fetchClanRequests, approveClanRequest, denyClanRequest, withdrawClanRequest, banClanMember, unbanClanMember, fetchClanBans Content notes: import { type ClanBansResponse, ClanBansResponseSchema, type ClanBrowseResponse, ClanBrowseResponseSchema, type ClanInfo, ClanInfoSchema, type ClanLeaderboardResponse,

