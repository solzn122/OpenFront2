# src/core/configuration/DevConfig.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1071 bytes
- Dependencies: ../game/UserSettings, ../Schemas, ./Config, ./DefaultConfig
- Public interfaces: DevServerConfig, DevConfig
- Important implementation details: Classes: DevServerConfig, DevConfig Functions/methods: DevServerConfig.turnstileSiteKey, DevServerConfig.adminToken, DevServerConfig.apiKey, DevServerConfig.env, DevServerConfig.gameCreationRate, DevServerConfig.numWorkers, DevServerConfig.jwtAudience, DevServerConfig.gitCommit, DevServerConfig.domain, DevServerConfig.subdomain, DevConfig.constructor Content notes: import { UserSettings } from "../game/UserSettings"; import { GameConfig } from "../Schemas"; import { GameEnv, ServerConfig } from "./Config"; import { DefaultConfig, DefaultServerConfig } from "./DefaultConfig"; export class DevServerConfig extends DefaultServerConfig { turnstileSiteKey(): string { return "1x00000000000000000000AA"; }

