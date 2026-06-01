# src/server/jwt.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2632 bytes
- Dependencies: jose, zod, ../core/ApiSchemas, ../core/configuration/Config, ../core/Schemas
- Public interfaces: verifyClientToken, getUserMe
- Important implementation details: Functions/methods: verifyClientToken, getUserMe Content notes: import { jwtVerify } from "jose"; import { z } from "zod"; import { TokenPayload, TokenPayloadSchema, UserMeResponse, UserMeResponseSchema, } from "../core/ApiSchemas";

