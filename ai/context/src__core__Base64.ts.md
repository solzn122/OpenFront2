# src/core/Base64.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1084 bytes
- Dependencies: jose
- Public interfaces: uuidToBase64url, base64urlToUuid
- Important implementation details: Functions/methods: uuidToBase64url, base64urlToUuid Content notes: import { base64url } from "jose"; /** export function uuidToBase64url(uuid: string): string { const hex = uuid.replace(/-/g, ""); const bytes = new Uint8Array(16); for (let i = 0; i < 16; i++) { bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16); }

