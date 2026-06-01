# src/server/Privilege.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 9737 bytes
- Dependencies: obscenity, resources/countries.json, ../core/CosmeticSchemas, ../core/PatternDecoder, ../core/Schemas, ../core/Util
- Public interfaces: shadowNames, createMatcher, PrivilegeCheckerImpl, FailOpenPrivilegeChecker
- Important implementation details: Classes: PrivilegeCheckerImpl, FailOpenPrivilegeChecker Functions/methods: buildDataset, createMatcher, censorWithMatcher, PrivilegeCheckerImpl.constructor, PrivilegeCheckerImpl.isAllowed, PrivilegeCheckerImpl.isPatternAllowed, PrivilegeCheckerImpl.isFlagAllowed, PrivilegeCheckerImpl.isColorAllowed, PrivilegeCheckerImpl.censor, FailOpenPrivilegeChecker.isAllowed, FailOpenPrivilegeChecker.censor Content notes: import { DataSet, RegExpMatcher, collapseDuplicatesTransformer, englishDataset, pattern, resolveConfusablesTransformer, resolveLeetSpeakTransformer,

