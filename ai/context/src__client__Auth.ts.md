# src/client/Auth.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6516 bytes
- Dependencies: jose, src/core/game/UserSettings, zod, ../core/ApiSchemas, ../core/Base64, ./Api, ./Utils
- Public interfaces: discordLogin, tempTokenLogin, getAuthHeader, logOut, isLoggedIn, userAuth, sendMagicLink, getPlayToken, getPersistentID
- Important implementation details: Functions/methods: discordLogin, tempTokenLogin, getAuthHeader, logOut, isLoggedIn, userAuth, refreshJwt, doRefreshJwt, sendMagicLink, getPlayToken, getPersistentID, getPersistentIDFromLocalStorage Content notes: import { decodeJwt } from "jose"; import { UserSettings } from "src/core/game/UserSettings"; import { z } from "zod"; import { TokenPayload, TokenPayloadSchema } from "../core/ApiSchemas"; import { base64urlToUuid } from "../core/Base64"; import { getApiBase, getAudience } from "./Api"; import { generateCryptoRandomUUID } from "./Utils"; export type UserAuth = { jwt: string; claims: TokenPayload } | false;

