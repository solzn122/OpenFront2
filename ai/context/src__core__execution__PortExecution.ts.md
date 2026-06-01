# src/core/execution/PortExecution.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 4100 bytes
- Dependencies: ../game/Game, ../PseudoRandom, ./TradeShipExecution, ./TrainStationExecution
- Public interfaces: PortExecution
- Important implementation details: Classes: PortExecution Functions/methods: PortExecution.constructor, PortExecution.init, PortExecution.tick, PortExecution.isActive, PortExecution.activeDuringSpawnPhase, PortExecution.shouldSpawnTradeShip, PortExecution.createStation, PortExecution.tradingPorts Content notes: import { Execution, Game, Unit, UnitType } from "../game/Game"; import { PseudoRandom } from "../PseudoRandom"; import { TradeShipExecution } from "./TradeShipExecution"; import { TrainStationExecution } from "./TrainStationExecution"; export class PortExecution implements Execution { private active = true; private mg: Game; private port: Unit;

