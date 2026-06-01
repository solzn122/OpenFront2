# src/client/graphics/layers/RailroadSprites.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 3335 bytes
- Dependencies: ./RailroadView
- Public interfaces: getRailroadRects, getBridgeRects
- Important implementation details: Functions/methods: getRailroadRects, horizontalRailroadRects, verticalRailroadRects, topRightRailroadCornerRects, topLeftRailroadCornerRects, bottomRightRailroadCornerRects, bottomLeftRailroadCornerRects, getBridgeRects, horizontalBridge, verticalBridge, topRightBridgeCornerRects, bottomLeftBridgeCornerRects, topLeftBridgeCornerRects, bottomRightBridgeCornerRects Content notes: import { RailType } from "./RailroadView"; const railTypeToFunctionMap: Record<RailType, () => number[][]> = { [RailType.TOP_RIGHT]: topRightRailroadCornerRects, [RailType.BOTTOM_LEFT]: bottomLeftRailroadCornerRects, [RailType.TOP_LEFT]: topLeftRailroadCornerRects, [RailType.BOTTOM_RIGHT]: bottomRightRailroadCornerRects, [RailType.HORIZONTAL]: horizontalRailroadRects, [RailType.VERTICAL]: verticalRailroadRects,

