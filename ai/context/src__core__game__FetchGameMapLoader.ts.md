# src/core/game/FetchGameMapLoader.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2133 bytes
- Dependencies: ./Game, ./GameMapLoader
- Public interfaces: FetchGameMapLoader
- Important implementation details: Classes: FetchGameMapLoader Functions/methods: FetchGameMapLoader.constructor, FetchGameMapLoader.getMapData, FetchGameMapLoader.resolveUrl, FetchGameMapLoader.url, FetchGameMapLoader.loadBinaryFromUrl, FetchGameMapLoader.loadJsonFromUrl Content notes: import { GameMapType } from "./Game"; import { GameMapLoader, MapData } from "./GameMapLoader"; export class FetchGameMapLoader implements GameMapLoader { private maps: Map<GameMapType, MapData>; public constructor( private readonly pathResolver: string | ((path: string) => string), ) { this.maps = new Map<GameMapType, MapData>();

