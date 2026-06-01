# src/core/validations/username.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1820 bytes
- Dependencies: ../../client/Utils, ../Schemas
- Public interfaces: MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH, MIN_CLAN_TAG_LENGTH, MAX_CLAN_TAG_LENGTH, validateUsername, validateClanTag
- Important implementation details: Functions/methods: validateUsername, validateClanTag Content notes: import { translateText } from "../../client/Utils"; import { ClanTagSchema, UsernameSchema } from "../Schemas"; export const MIN_USERNAME_LENGTH = 3; export const MAX_USERNAME_LENGTH = 27; export const MIN_CLAN_TAG_LENGTH = 2; export const MAX_CLAN_TAG_LENGTH = 5; export function validateUsername(username: string): { isValid: boolean;

