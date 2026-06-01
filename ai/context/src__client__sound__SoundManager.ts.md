# src/client/sound/SoundManager.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 5862 bytes
- Dependencies: howler, ../../core/AssetUrls, ../../core/EventBus, ../../core/game/UserSettings, ./Sounds
- Public interfaces: MAX_CONCURRENT_SOUNDS, SoundManager
- Important implementation details: Classes: SoundManager Functions/methods: SoundManager.constructor, SoundManager.dispose, SoundManager.safely, SoundManager.playBackgroundMusic, SoundManager.stopBackgroundMusic, SoundManager.setBackgroundMusicVolume, SoundManager.playNext, SoundManager.getOrLoadSoundEffect, SoundManager.removeActiveSoundById, SoundManager.playSoundEffect, SoundManager.setSoundEffectsVolume, SoundManager.stopSoundEffect Events: PlaySoundEffectEvent, SetBackgroundMusicVolumeEvent, SetSoundEffectsVolumeEvent Content notes: import { Howl } from "howler"; import { assetUrl } from "../../core/AssetUrls"; import { EventBus } from "../../core/EventBus"; import { UserSettings } from "../../core/game/UserSettings"; import { PlaySoundEffectEvent, SetBackgroundMusicVolumeEvent, SetSoundEffectsVolumeEvent,

