import { Execution, Game, Player, Unit, UnitType } from "../game/Game";
import { FARM_FACTORY_MAX_LINK_DISTANCE } from "./FarmExecution";

export class LinkFarmFactoryExecution implements Execution {
  private active = true;
  private game: Game;

  constructor(
    private player: Player,
    private farmId: number,
    private factoryId: number,
  ) {}

  init(mg: Game, ticks: number): void {
    this.game = mg;

    const farm = mg.unit(this.farmId);
    const factory = mg.unit(this.factoryId);
    if (!farm || !factory || !this.isValidLink(farm, factory)) {
      console.warn(
        `SECURITY: invalid farm factory link from ${this.farmId} to ${this.factoryId}`,
      );
      this.active = false;
      return;
    }

    farm.setTargetUnit(factory);
    farm.touch();
    this.active = false;
  }

  tick(ticks: number): void {}

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  private isValidLink(farm: Unit, factory: Unit): boolean {
    if (farm.type() !== UnitType.Farm || factory.type() !== UnitType.Factory) {
      return false;
    }
    if (farm.owner() !== this.player) {
      return false;
    }
    if (!farm.isActive() || !factory.isActive()) {
      return false;
    }
    if (farm.isUnderConstruction() || factory.isUnderConstruction()) {
      return false;
    }
    if (
      factory.owner() !== this.player &&
      !this.player.isFriendly(factory.owner())
    ) {
      return false;
    }
    if (
      this.game.manhattanDist(farm.tile(), factory.tile()) >
      FARM_FACTORY_MAX_LINK_DISTANCE
    ) {
      return false;
    }
    return true;
  }
}
