# src/client/components/NavNotificationsController.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2589 bytes
- Dependencies: lit, resources/version.txt?raw, ../Cosmetics, ../Utils
- Public interfaces: NavNotificationsController
- Important implementation details: Classes: NavNotificationsController Functions/methods: NavNotificationsController.constructor, NavNotificationsController.hostConnected, NavNotificationsController.hostDisconnected, NavNotificationsController.showNewsDot, NavNotificationsController.showStoreDot, NavNotificationsController.showHelpDot Content notes: import { ReactiveController, ReactiveControllerHost } from "lit"; import version from "resources/version.txt?raw"; import { getCosmeticsHash } from "../Cosmetics"; import { getGamesPlayed } from "../Utils"; const HELP_SEEN_KEY = "helpSeen"; const STORE_SEEN_HASH_KEY = "storeSeenHash"; const NEWS_SEEN_VERSION_KEY = "newsSeenVersion"; export class NavNotificationsController implements ReactiveController {

