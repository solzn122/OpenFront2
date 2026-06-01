# src/server/PollingLoop.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 750 bytes
- Dependencies: ./Logger
- Public interfaces: startPolling
- Important implementation details: Functions/methods: startPolling, runLoop Content notes: import { logger } from "./Logger"; const log = logger.child({ comp: "polling" }); /** export function startPolling(task: () => Promise<void>, intervalMs: number) { const runLoop = () => { task() .catch((error) => { log.error("Error in polling loop:", error);

