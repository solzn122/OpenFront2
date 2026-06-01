# src/server/StaticAssetCache.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 797 bytes
- Dependencies: none detected
- Public interfaces: getStaticAssetCacheControl, applyStaticAssetCacheControl
- Important implementation details: Functions/methods: stripQueryString, getStaticAssetCacheControl, applyStaticAssetCacheControl Content notes: const IMMUTABLE_CACHE_CONTROL = "public, max-age=31536000, immutable"; function stripQueryString(urlPath: string): string { return urlPath.split("?", 1)[0]; } export function getStaticAssetCacheControl( urlPath: string | undefined, ): string | undefined { if (!urlPath) {

