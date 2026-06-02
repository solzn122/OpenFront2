import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { COLOR_KEY, UserSettings } from "../core/game/UserSettings";
import { BaseModal } from "./components/BaseModal";
import { modalHeader } from "./components/ui/ModalHeader";
import { translateText } from "./Utils";

const SKIN_COLORS = [
  { name: "Red", color: "#e53935" },
  { name: "Yellow", color: "#fdd835" },
  { name: "Green", color: "#43a047" },
  { name: "Blue", color: "#1e88e5" },
] as const;

@customElement("territory-patterns-modal")
export class TerritoryPatternsModal extends BaseModal {
  public previewButton: HTMLElement | null = null;

  @state() private selectedColor: string | null = null;

  private userSettings: UserSettings = new UserSettings();

  private _onColorSelected = () => {
    this.selectedColor = this.userSettings.getTerritoryColor();
    this.refresh();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      `event:user-settings-changed:${COLOR_KEY}`,
      this._onColorSelected,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      `event:user-settings-changed:${COLOR_KEY}`,
      this._onColorSelected,
    );
  }

  render() {
    const content = html`
      <div class="${this.modalContainerClass}">
        <div class="relative flex flex-col border-b border-white/10 pb-4 shrink-0">
          ${modalHeader({
            title: translateText("territory_patterns.title"),
            onBack: () => this.close(),
            ariaLabel: translateText("common.back"),
          })}
        </div>

        <div class="flex-1 overflow-y-auto px-3 py-8">
          <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            ${SKIN_COLORS.map(
              (skin) => html`
                <button
                  class="rounded-xl border ${this.selectedColor === skin.color
                    ? "border-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.25)]"
                    : "border-white/15 hover:border-white/35"} bg-white/5 p-3 transition-all"
                  @click=${() => this.selectSkin(skin.color, skin.name)}
                >
                  <div
                    class="aspect-square rounded-lg border border-black/30 shadow-inner"
                    style="background: ${skin.color};"
                  ></div>
                  <div class="mt-3 text-center text-white font-bold">
                    ${skin.name}
                  </div>
                </button>
              `,
            )}
          </div>
        </div>
      </div>
    `;

    if (this.inline) {
      return content;
    }

    return html`
      <o-modal
        id="territoryPatternsModal"
        title="${translateText("territory_patterns.title")}"
        ?inline=${this.inline}
        ?hideHeader=${true}
        ?hideCloseButton=${true}
      >
        ${content}
      </o-modal>
    `;
  }

  protected async onOpen(): Promise<void> {
    this.selectedColor = this.userSettings.getTerritoryColor();
    await this.refresh();
  }

  protected onClose(): void {}

  private selectSkin(color: string, name: string) {
    this.userSettings.setSelectedPatternName(undefined);
    this.userSettings.setTerritoryColor(color);
    this.selectedColor = color;
    this.refresh();
    window.dispatchEvent(
      new CustomEvent("show-message", {
        detail: {
          message: `${name} ${translateText("territory_patterns.selected")}`,
          duration: 2000,
        },
      }),
    );
    this.close();
  }

  public async refresh() {
    this.requestUpdate();
  }
}
