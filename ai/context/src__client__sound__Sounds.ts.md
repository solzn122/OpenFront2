# src/client/sound/Sounds.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1783 bytes
- Dependencies: ../../core/AssetUrls, ../../core/EventBus
- Public interfaces: soundEffectUrls, PlaySoundEffectEvent, SetSoundEffectsVolumeEvent, SetBackgroundMusicVolumeEvent
- Important implementation details: Classes: PlaySoundEffectEvent, SetSoundEffectsVolumeEvent, SetBackgroundMusicVolumeEvent Functions/methods: PlaySoundEffectEvent.constructor, SetSoundEffectsVolumeEvent.constructor, SetBackgroundMusicVolumeEvent.constructor Content notes: import { assetUrl } from "../../core/AssetUrls"; import { GameEvent } from "../../core/EventBus"; export type SoundEffect = | "ka-ching" | "atom-hit" | "atom-launch" | "hydrogen-hit" | "hydrogen-launch"

