# src/server/RenderHtml.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2834 bytes
- Dependencies: ejs, express, fs/promises, ../core/AssetUrls, ./NoStoreHeaders, ./RuntimeAssetManifest
- Public interfaces: renderHtmlContent, getAppShellContent, clearAppShellContentCache, setAppShellCacheHeaders, setHtmlNoCacheHeaders, renderAppShell
- Important implementation details: Functions/methods: renderHtmlContent, getAppShellContent, clearAppShellContentCache, setAppShellCacheHeaders, setHtmlNoCacheHeaders, renderAppShell Content notes: import ejs from "ejs"; import type { Response } from "express"; import fs from "fs/promises"; import { buildAssetUrl } from "../core/AssetUrls"; import { setNoStoreHeaders } from "./NoStoreHeaders"; import { getRuntimeAssetManifest } from "./RuntimeAssetManifest"; const APP_SHELL_CACHE_CONTROL = "public, max-age=0, s-maxage=300, stale-while-revalidate=86400";

