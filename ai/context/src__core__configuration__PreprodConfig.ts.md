# src/core/configuration/PreprodConfig.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 643 bytes
- Dependencies: ./Config, ./DefaultConfig
- Public interfaces: preprodConfig
- Important implementation details: Functions/methods: <class>.env, <class>.numWorkers, <class>.turnstileSiteKey, <class>.jwtAudience, <class>.allowedFlares Content notes: import { GameEnv } from "./Config"; import { DefaultServerConfig } from "./DefaultConfig"; export const preprodConfig = new (class extends DefaultServerConfig { env(): GameEnv { return GameEnv.Preprod; } numWorkers(): number { return 2;

