# src/client/graphics/layers/PerformanceOverlay.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 40551 bytes
- Dependencies: lit, lit/decorators.js, ../../../core/EventBus, ../../../core/game/UserSettings, ../../InputHandler, ../../LangSelector, ../../Utils, ../FrameProfiler, ./Layer
- Public interfaces: PerformanceOverlay
- Important implementation details: Classes: PerformanceOverlay Functions/methods: PerformanceOverlay.ensureUiText, PerformanceOverlay.computeLayerBreakdown, PerformanceOverlay.constructor, PerformanceOverlay.init, PerformanceOverlay.disconnectedCallback, PerformanceOverlay.setVisible, PerformanceOverlay.handleClose, PerformanceOverlay.updateFrameMetrics, PerformanceOverlay.updateLayerStats, PerformanceOverlay.updateRenderPerTickMetrics, PerformanceOverlay.updateTickLayerMetrics, PerformanceOverlay.updateTickMetrics, PerformanceOverlay.shouldTransform, PerformanceOverlay.getPerformanceColor, PerformanceOverlay.getTPSColor, PerformanceOverlay.buildPerformanceSnapshot, PerformanceOverlay.clearCopyStatusTimeout, PerformanceOverlay.scheduleCopyStatusReset, PerformanceOverlay.handleCopyJson, PerformanceOverlay.render Events: TogglePerformanceOverlayEvent, TickMetricsEvent, TogglePerformanceOverlayEvent, TickMetricsEvent, `${USER_SETTINGS_CHANGED_EVENT}:${PERFORMANCE_OVERLAY_KEY}`, TogglePerformanceOverlayEvent, TickMetricsEvent, pointermove, pointerup, pointercancel, pointermove, pointerup, pointercancel Content notes: import { LitElement, css, html } from "lit"; import { customElement, property, state } from "lit/decorators.js"; import { EventBus } from "../../../core/EventBus"; import { PERFORMANCE_OVERLAY_KEY, USER_SETTINGS_CHANGED_EVENT, UserSettings, } from "../../../core/game/UserSettings";

