# src/core/configuration/DefaultConfig.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 25862 bytes
- Dependencies: jose, zod, ../game/Game, ../game/GameMap, ../game/GameView, ../game/UserSettings, ../Schemas, ../StatsSchemas, ../Util, ./Config, ./Env, ./PastelTheme, ./PastelThemeDark
- Public interfaces: DefaultServerConfig, SAM_CONSTRUCTION_TICKS, DefaultConfig
- Important implementation details: Classes: DefaultServerConfig, DefaultConfig Functions/methods: DefaultServerConfig.turnstileSiteKey, DefaultServerConfig.allowedFlares, DefaultServerConfig.stripePublishableKey, DefaultServerConfig.domain, DefaultServerConfig.subdomain, DefaultServerConfig.jwtAudience, DefaultServerConfig.jwtIssuer, DefaultServerConfig.jwkPublicKey, DefaultServerConfig.otelEnabled, DefaultServerConfig.otelEndpoint, DefaultServerConfig.otelAuthHeader, DefaultServerConfig.gitCommit, DefaultServerConfig.apiKey, DefaultServerConfig.adminHeader, DefaultServerConfig.adminToken, DefaultServerConfig.numWorkers, DefaultServerConfig.env, DefaultServerConfig.turnIntervalMs, DefaultServerConfig.gameCreationRate, DefaultServerConfig.workerIndex, DefaultServerConfig.workerPath, DefaultServerConfig.workerPort, DefaultServerConfig.workerPortByIndex, DefaultConfig.constructor, DefaultConfig.stripePublishableKey, DefaultConfig.isReplay, DefaultConfig.traitorDefenseDebuff, DefaultConfig.traitorSpeedDebuff, DefaultConfig.traitorDuration, DefaultConfig.spawnImmunityDuration Content notes: import { JWK } from "jose"; import { z } from "zod"; import { Difficulty, Game, GameMode, GameType, Gold,

