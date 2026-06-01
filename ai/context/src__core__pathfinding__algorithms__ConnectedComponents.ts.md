# src/core/pathfinding/algorithms/ConnectedComponents.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 6094 bytes
- Dependencies: ../../game/GameMap, ../../utilities/DebugSpan
- Public interfaces: LAND_MARKER, ConnectedComponents
- Important implementation details: Classes: ConnectedComponents Functions/methods: ConnectedComponents.constructor, ConnectedComponents.initialize, ConnectedComponents.createPrefilledIds, ConnectedComponents.premarkLandTiles, ConnectedComponents.premarkLandTilesDirect, ConnectedComponents.upgradeToUint16Array, ConnectedComponents.floodFillComponent, ConnectedComponents.getComponentId Content notes: import { GameMap, TileRef } from "../../game/GameMap"; import { DebugSpan } from "../../utilities/DebugSpan"; export const LAND_MARKER = 0xff; // Must fit in Uint8Array /** export class ConnectedComponents { private readonly width: number; private readonly height: number; private readonly numTiles: number;

