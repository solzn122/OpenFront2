# src/core/configuration/ConfigLoader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3357 bytes
- Dependencies: ../game/UserSettings, ../Schemas, ./Config, ./DefaultConfig, ./DevConfig, ./Env, ./PreprodConfig, ./ProdConfig
- Public interfaces: cachedRuntimeClientServerConfig, getGameLogicConfig, getBuildTimeGameLogicEnv, getServerConfigForGameLogicEnv, getRuntimeClientServerConfig, getServerConfigFromServer, getServerConfig, clearCachedRuntimeClientServerConfig
- Important implementation details: Functions/methods: getGameLogicConfig, getBuildTimeGameLogicEnv, getServerConfigForGameLogicEnv, getRuntimeClientServerConfig, getServerConfigFromServer, getServerConfig, clearCachedRuntimeClientServerConfig Content notes: import { UserSettings } from "../game/UserSettings"; import { GameConfig } from "../Schemas"; import { Config, ServerConfig } from "./Config"; import { DefaultConfig } from "./DefaultConfig"; import { DevConfig, DevServerConfig } from "./DevConfig"; import { Env } from "./Env"; import { preprodConfig } from "./PreprodConfig"; import { prodConfig } from "./ProdConfig";

