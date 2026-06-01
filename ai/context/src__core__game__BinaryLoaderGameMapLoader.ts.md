# src/core/game/BinaryLoaderGameMapLoader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1913 bytes
- Dependencies: ../AssetUrls, ./Game, ./GameMapLoader, ./TerrainMapLoader
- Public interfaces: BinaryLoaderGameMapLoader
- Important implementation details: Classes: BinaryLoaderGameMapLoader Functions/methods: BinaryLoaderGameMapLoader.constructor, BinaryLoaderGameMapLoader.createLazyLoader, BinaryLoaderGameMapLoader.getMapData, loadBinary, mapAssetUrl Content notes: import { assetUrl } from "../AssetUrls"; import { GameMapType } from "./Game"; import { GameMapLoader, MapData } from "./GameMapLoader"; import { MapManifest } from "./TerrainMapLoader"; export class BinaryLoaderGameMapLoader implements GameMapLoader { private maps: Map<GameMapType, MapData>; constructor() { this.maps = new Map<GameMapType, MapData>();

