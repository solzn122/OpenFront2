# src/core/utilities/DebugSpan.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4154 bytes
- Dependencies: none detected
- Public interfaces: DebugSpan
- Important implementation details: Functions/methods: isEnabled, <class>.enable, <class>.disable, <class>.start, <class>.end, <class>.storeSpan, extractData, getChildren, <class>.wrap, <class>.set, <class>.getLastSpan Content notes: type Span = { name: string; timeStart: number; timeEnd?: number; duration?: number; data: Record<string, unknown>; children: Span[]; };

