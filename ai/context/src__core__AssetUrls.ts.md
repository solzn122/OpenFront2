# src/core/AssetUrls.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3361 bytes
- Dependencies: none detected
- Public interfaces: encodeAssetPath, normalizeAssetPath, buildAssetUrl, getAssetManifest, getCdnBase, assetUrl, rewriteAssetsForCdn
- Important implementation details: Functions/methods: safeDecodeAssetSegment, assertSafeAssetSegment, encodeAssetPath, normalizeAssetPath, isAbsoluteUrl, buildAssetUrl, getAssetManifest, getCdnBase, assetUrl, rewriteAssetsForCdn Content notes: export type AssetManifest = Record<string, string>; function safeDecodeAssetSegment(segment: string): string { try { return decodeURIComponent(segment); } catch { return segment; } }

