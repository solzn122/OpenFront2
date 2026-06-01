import { describe, expect, it, vi } from "vitest";
import { LinkFarmFactoryIntentSchema } from "../src/core/Schemas";
import { FarmExecution } from "../src/core/execution/FarmExecution";
import { LinkFarmFactoryExecution } from "../src/core/execution/LinkFarmFactoryExecution";
import { Game, Player, Unit, UnitType } from "../src/core/game/Game";
import { TileRef } from "../src/core/game/GameMap";

function player(id: string): Player & { goldTotal: bigint } {
  const friendly = new Set<string>();
  let goldTotal = 0n;
  return {
    get goldTotal() {
      return goldTotal;
    },
    id: () => id,
    isFriendly: (other: Player) => friendly.has(other.id()),
    addFriendly: (other: Player) => friendly.add(other.id()),
    addGold: (amount: bigint) => {
      goldTotal += amount;
    },
  } as unknown as Player & { goldTotal: bigint; addFriendly: (p: Player) => void };
}

function unit(
  id: number,
  type: UnitType,
  owner: Player,
  tile: TileRef,
): Unit & {
  active: boolean;
  underConstruction: boolean;
  touched: boolean;
  ownerValue: Player;
} {
  let target: Unit | undefined;
  const state = {
    active: true,
    underConstruction: false,
    touched: false,
    ownerValue: owner,
    id: () => id,
    type: () => type,
    owner: () => state.ownerValue,
    setOwner: (nextOwner: Player) => {
      state.ownerValue = nextOwner;
    },
    tile: () => tile,
    isActive: () => state.active,
    isUnderConstruction: () => state.underConstruction,
    setTargetUnit: (nextTarget: Unit | undefined) => {
      target = nextTarget;
    },
    targetUnit: () => target,
    touch: () => {
      state.touched = true;
    },
  };
  return state as unknown as Unit & {
    active: boolean;
    underConstruction: boolean;
    touched: boolean;
    ownerValue: Player;
  };
}

function game(units: Unit[]): Game {
  const byId = new Map(units.map((u) => [u.id(), u]));
  return {
    unit: (id: number) => byId.get(id),
    manhattanDist: (a: TileRef, b: TileRef) => Math.abs(a - b),
  } as unknown as Game;
}

describe("Farm/Factory income", () => {
  it("generates money after 15 seconds when linked", () => {
    const owner = player("owner");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const factory = unit(2, UnitType.Factory, owner, 20);
    const execution = new FarmExecution(farm);
    execution.init(game([farm, factory]), 0);
    farm.setTargetUnit(factory);

    execution.tick(0);
    execution.tick(150);

    expect(owner.goldTotal).toBe(25_000n);
  });

  it("does not generate before 15 seconds", () => {
    const owner = player("owner");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const factory = unit(2, UnitType.Factory, owner, 20);
    const execution = new FarmExecution(farm);
    execution.init(game([farm, factory]), 0);
    farm.setTargetUnit(factory);

    execution.tick(0);
    execution.tick(149);

    expect(owner.goldTotal).toBe(0n);
  });

  it("does not generate when unlinked", () => {
    const owner = player("owner");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const execution = new FarmExecution(farm);
    execution.init(game([farm]), 0);

    execution.tick(150);

    expect(owner.goldTotal).toBe(0n);
  });

  it("stops generating if the Factory is destroyed", () => {
    const owner = player("owner");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const factory = unit(2, UnitType.Factory, owner, 20);
    const execution = new FarmExecution(farm);
    execution.init(game([farm, factory]), 0);
    farm.setTargetUnit(factory);

    execution.tick(0);
    factory.active = false;
    execution.tick(150);

    expect(owner.goldTotal).toBe(0n);
    expect(farm.targetUnit()).toBeUndefined();
  });

  it("stops generating if ownership changes", () => {
    const owner = player("owner");
    const captor = player("captor");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const factory = unit(2, UnitType.Factory, owner, 20);
    const execution = new FarmExecution(farm);
    execution.init(game([farm, factory]), 0);
    farm.setTargetUnit(factory);

    execution.tick(0);
    farm.setOwner(captor);
    execution.tick(150);

    expect(owner.goldTotal).toBe(0n);
    expect(captor.goldTotal).toBe(0n);
    expect(farm.targetUnit()).toBeUndefined();
  });

  it("rejects invalid links", () => {
    const owner = player("owner");
    const enemy = player("enemy");
    const farm = unit(1, UnitType.Farm, owner, 10);
    const factory = unit(2, UnitType.Factory, enemy, 20);
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const execution = new LinkFarmFactoryExecution(owner, 1, 2);
    execution.init(game([farm, factory]), 0);

    expect(farm.targetUnit()).toBeUndefined();
    expect(farm.touched).toBe(false);
    expect(execution.isActive()).toBe(false);
    warn.mockRestore();
  });

  it("keeps link intents serializable for deterministic replay", () => {
    expect(
      LinkFarmFactoryIntentSchema.parse({
        type: "link_farm_factory",
        farmId: 1,
        factoryId: 2,
      }),
    ).toEqual({
      type: "link_farm_factory",
      farmId: 1,
      factoryId: 2,
    });
  });
});
