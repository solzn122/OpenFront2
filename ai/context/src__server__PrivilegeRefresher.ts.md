# src/server/PrivilegeRefresher.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3434 bytes
- Dependencies: jose, winston, ../core/CosmeticSchemas, ./PollingLoop, ./Privilege
- Public interfaces: PrivilegeRefresher
- Important implementation details: Classes: PrivilegeRefresher Functions/methods: PrivilegeRefresher.constructor, PrivilegeRefresher.start, PrivilegeRefresher.get, PrivilegeRefresher.getCosmeticFlagUrls, PrivilegeRefresher.loadPrivilegeChecker, fetchWithTimeout Content notes: import { base64url } from "jose"; import { Logger } from "winston"; import { CosmeticsSchema } from "../core/CosmeticSchemas"; import { startPolling } from "./PollingLoop"; import { FailOpenPrivilegeChecker, PrivilegeChecker, PrivilegeCheckerImpl,

