# src/server/NoStoreHeaders.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 277 bytes
- Dependencies: express
- Public interfaces: setNoStoreHeaders
- Important implementation details: Functions/methods: setNoStoreHeaders Content notes: import type { Response } from "express"; export function setNoStoreHeaders(res: Response): void { res.setHeader( "Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate", ); res.setHeader("Pragma", "no-cache"); res.setHeader("Expires", "0");

