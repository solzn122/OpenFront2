# src/client/graphics/AnimatedSprite.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2104 bytes
- Dependencies: none detected
- Public interfaces: AnimatedSprite
- Important implementation details: Classes: AnimatedSprite Functions/methods: AnimatedSprite.constructor, AnimatedSprite.update, AnimatedSprite.isActive, AnimatedSprite.lifeTime, AnimatedSprite.draw, AnimatedSprite.reset, AnimatedSprite.setOrigin Content notes: export class AnimatedSprite { private frameHeight: number; private frameWidth: number; private currentFrame: number = 0; private elapsedTime: number = 0; private active: boolean = true; constructor( private image: CanvasImageSource,

