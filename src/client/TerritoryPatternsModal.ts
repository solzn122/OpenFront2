import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { COLOR_KEY, UserSettings } from "../core/game/UserSettings";
import { BaseModal } from "./components/BaseModal";
import { modalHeader } from "./components/ui/ModalHeader";
import { translateText } from "./Utils";

const RED_SKIN_COLOR = "#e53935";

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
    const isSelected = this.selectedColor === RED_SKIN_COLOR;
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
          <div class="flex justify-center">
            <button
              class="w-44 rounded-xl border ${isSelected
                ? "border-yellow-400 shadow-[0_0_0_2px_rgba(250,204,21,0.25)]"
                : "border-white/15 hover:border-white/35"} bg-white/5 p-3 transition-all"
              @click=${() => this.selectRedSkin()}
            >
              <div
                class="aspect-square rounded-lg border border-black/30 shadow-inner"
                style="background: ${RED_SKIN_COLOR};"
              ></div>
              <div class="mt-3 text-center text-white font-bold">Red</div>
            </button>
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

  private selectRedSkin() {
    this.userSettings.setSelectedPatternName(undefined);
    this.userSettings.setTerritoryColor(RED_SKIN_COLOR);
    this.selectedColor = RED_SKIN_COLOR;
    this.refresh();
    window.dispatchEvent(
      new CustomEvent("show-message", {
        detail: {
          message: `Red ${translateText("territory_patterns.selected")}`,
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
