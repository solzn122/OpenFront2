# src/server/PublicAssetManifest.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 10799 bytes
- Dependencies: crypto, fs, glob, path, ../core/AssetUrls
- Public interfaces: isDerivedPublicAsset, getResourcesDir, getProprietaryDir, shouldKeepRootPublicFile, listHashedPublicAssetPaths, listRootPublicFiles, buildPublicAssetManifest, clearPublicAssetManifestCache, createHashedPublicAssetFiles, copyRootPublicFiles, writePublicAssetManifest
- Important implementation details: Functions/methods: toPosixPath, createContentHash, createStringHash, createHashedAssetUrl, readPublicAssetText, resolveDerivedAssetReference, getEmittedAssetRelativePath, isExternalAssetReference, renderWebManifestAsset, renderBitmapFontAsset, getDerivedPublicAssetRenderer, isDerivedPublicAsset, renderDerivedPublicAsset, getResourcesDir, getProprietaryDir, resolveSourceDir, resolveSourceFile, shouldKeepRootPublicFile, listHashedPublicAssetPaths, listRootPublicFiles, buildPublicAssetManifest, clearPublicAssetManifestCache, createHashedPublicAssetFiles, copyRootPublicFiles, writePublicAssetManifest Content notes: import { createHash } from "crypto"; import fs from "fs"; import { globSync } from "glob"; import path from "path"; import { type AssetManifest, encodeAssetPath, normalizeAssetPath,

