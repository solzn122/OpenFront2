# src/core/utilities/Line.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4388 bytes
- Dependencies: none detected
- Public interfaces: BezenhamLine, CubicBezierCurve, DistanceBasedBezierCurve
- Important implementation details: Classes: BezenhamLine, CubicBezierCurve, DistanceBasedBezierCurve Functions/methods: BezenhamLine.constructor, BezenhamLine.size, BezenhamLine.increment, CubicBezierCurve.constructor, CubicBezierCurve.getPointAt, DistanceBasedBezierCurve.constructor, DistanceBasedBezierCurve.getAllPoints, DistanceBasedBezierCurve.increment, DistanceBasedBezierCurve.getCurrentIndex, DistanceBasedBezierCurve.computeAllPoints, DistanceBasedBezierCurve.getDistanceUpToIndex Content notes: type Point = { x: number; y: number }; export class BezenhamLine { constructor( private p1: Point, private p2: Point, ) { this.dx = Math.abs(p2.x - p1.x); this.dy = Math.abs(p2.y - p1.y);

