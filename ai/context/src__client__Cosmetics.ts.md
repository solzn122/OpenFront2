# src/client/Cosmetics.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 8536 bytes
- Dependencies: src/core/AssetUrls, ../core/ApiSchemas, ../core/CosmeticSchemas, ../core/Schemas, ../core/game/UserSettings, ./Api, ./Utils
- Public interfaces: TEMP_FLARE_OFFSET, purchaseCosmetic, fetchCosmetics, resolveFlagUrl, getCosmeticsHash, cosmeticRelationship, patternRelationship, flagRelationship, resolveCosmetics, resolvedToPlayerPattern, getPlayerCosmeticsRefs, getPlayerCosmetics, translateCosmetic
- Important implementation details: Functions/methods: purchaseCosmetic, simpleHash, fetchCosmetics, resolveFlagUrl, getCosmeticsHash, cosmeticRelationship, patternRelationship, flagRelationship, resolveCosmetics, resolvedToPlayerPattern, getPlayerCosmeticsRefs, getPlayerCosmetics, translateCosmetic Content notes: import { assetUrl } from "src/core/AssetUrls"; import { UserMeResponse } from "../core/ApiSchemas"; import { ColorPalette, Cosmetics, CosmeticsSchema, Flag, Pack,

