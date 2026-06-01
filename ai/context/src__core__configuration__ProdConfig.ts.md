# src/core/configuration/ProdConfig.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 388 bytes
- Dependencies: ./Config, ./DefaultConfig
- Public interfaces: prodConfig
- Important implementation details: Functions/methods: <class>.numWorkers, <class>.env, <class>.jwtAudience, <class>.turnstileSiteKey Content notes: import { GameEnv } from "./Config"; import { DefaultServerConfig } from "./DefaultConfig"; export const prodConfig = new (class extends DefaultServerConfig { numWorkers(): number { return 20; } env(): GameEnv { return GameEnv.Prod;

