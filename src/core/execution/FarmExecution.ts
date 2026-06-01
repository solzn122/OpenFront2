import { Execution, Game, Unit, UnitType } from "../game/Game";
import { TrainStationExecution } from "./TrainStationExecution";

export const FARM_INCOME_INTERVAL_SECONDS = 15;
export const FARM_INCOME_AMOUNT = 25_000n;
export const FARM_FACTORY_MAX_LINK_DISTANCE = 100;

const TICKS_PER_SECOND = 10;
const FARM_INCOME_INTERVAL_TICKS =
  FARM_INCOME_INTERVAL_SECONDS * TICKS_PER_SECOND;

export class FarmExecution implements Execution {
  private active = true;
  private game: Game;
  private lastIncomeTick = 0;
  private linkedFactoryId: number | null = null;
  private linkedFarmOwnerId: string | null = null;
  private linkedFactoryOwnerId: string | null = null;
  private stationCreated = false;

  constructor(private farm: Unit) {}

  init(mg: Game, ticks: number): void {
    this.game = mg;
    this.lastIncomeTick = ticks;
  }

  tick(ticks: number): void {
    if (!this.farm.isActive()) {
      this.active = false;
      return;
    }

    if (!this.stationCreated) {
      this.createStation();
      this.stationCreated = true;
    }

    const factory = this.farm.targetUnit() ?? this.findLinkedFactory();
    if (!this.refreshLink(factory, ticks)) {
      return;
    }

    if (ticks - this.lastIncomeTick < FARM_INCOME_INTERVAL_TICKS) {
      return;
    }

    this.farm.owner().addGold(FARM_INCOME_AMOUNT, this.farm.tile());
    this.lastIncomeTick = ticks;
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  private refreshLink(factory: Unit | undefined, ticks: number): boolean {
    if (factory === undefined) {
      this.clearStoredLink();
      return false;
    }

    if (this.linkedFactoryId !== factory.id()) {
      this.farm.setTargetUnit(factory);
      this.farm.touch();
      this.linkedFactoryId = factory.id();
      this.linkedFarmOwnerId = this.farm.owner().id();
      this.linkedFactoryOwnerId = factory.owner().id();
      this.lastIncomeTick = ticks;
    }

    if (!this.isValidLink(factory)) {
      this.farm.setTargetUnit(undefined);
      this.clearStoredLink();
      return false;
    }

    return true;
  }

  private isValidLink(factory: Unit): boolean {
    if (this.farm.type() !== UnitType.Farm) {
      return false;
    }
    if (factory.type() !== UnitType.Factory) {
      return false;
    }
    if (!factory.isActive() || factory.isUnderConstruction()) {
      return false;
    }
    if (this.farm.isUnderConstruction()) {
      return false;
    }
    if (
      this.linkedFarmOwnerId !== null &&
      this.linkedFarmOwnerId !== this.farm.owner().id()
    ) {
      return false;
    }
    if (
      this.linkedFactoryOwnerId !== null &&
      this.linkedFactoryOwnerId !== factory.owner().id()
    ) {
      return false;
    }
    if (
      this.game.manhattanDist(this.farm.tile(), factory.tile()) >
      FARM_FACTORY_MAX_LINK_DISTANCE
    ) {
      return false;
    }
    return (
      this.farm.owner() === factory.owner() ||
      this.farm.owner().isFriendly(factory.owner())
    );
  }

  private clearStoredLink(): void {
    this.linkedFactoryId = null;
    this.linkedFarmOwnerId = null;
    this.linkedFactoryOwnerId = null;
  }

  private createStation(): void {
    const nearbyFactory = this.game.hasUnitNearby(
      this.farm.tile(),
      this.game.config().trainStationMaxRange(),
      UnitType.Factory,
    );
    if (nearbyFactory) {
      this.game.addExecution(new TrainStationExecution(this.farm));
    }
  }

  private findLinkedFactory(): Unit | undefined {
    return this.game
      .nearbyUnits(
        this.farm.tile(),
        FARM_FACTORY_MAX_LINK_DISTANCE,
        UnitType.Factory,
        ({ unit }) => this.isValidLink(unit as Unit),
      )
      .sort((a, b) => a.distSquared - b.distSquared)[0]?.unit;
  }
}
