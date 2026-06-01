# src/client/Platform.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2903 bytes
- Dependencies: none detected
- Public interfaces: Platform
- Important implementation details: Functions/methods: normalizePlatform, extractOS, performElectronCheck Content notes: export const Platform = (() => { const isBrowser = typeof window !== "undefined" && typeof navigator !== "undefined"; const normalizePlatform = (platform: string): string => { const normalized = platform.toLowerCase(); if (normalized.includes("windows")) return "Windows"; if ( normalized.includes("iphone") ||

