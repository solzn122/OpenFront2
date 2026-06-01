# src/client/MultiTabDetector.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2894 bytes
- Dependencies: none detected
- Public interfaces: MultiTabDetector
- Important implementation details: Classes: MultiTabDetector Functions/methods: MultiTabDetector.constructor, MultiTabDetector.startMonitoring, MultiTabDetector.stopMonitoring, MultiTabDetector.heartbeat, MultiTabDetector.onStorageEvent, MultiTabDetector.onBeforeUnload, MultiTabDetector.applyPunishment, MultiTabDetector.writeLock, MultiTabDetector.readLock Events: storage, beforeunload Content notes: export class MultiTabDetector { private readonly tabId = `${Date.now()}-${Math.random()}`; private readonly lockKey = "multi-tab-lock"; private readonly heartbeatIntervalMs = 1_000; private readonly staleThresholdMs = 3_000; private heartbeatTimer: number | null = null; private isPunished = false; private punishmentCount = 0;

