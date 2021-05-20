"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import composedunit from "./units/ComposedUnit";
import unitOrderTuple from "./units/UnitOrderTuple";
import meter from "./units/Meter";
import second from "./units/Second";

export default class speed extends dimension {

  private static speedOfLight:speed;
  private static unit:composedunit;

  constructor(value:number) {
    super(value);
    speed.initUnitIfNecessary();
  }

  public getUnit():internationalsystemunit {
    return speed.unit;
  }

  private static initUnitIfNecessary() {
    return speed.unit || (speed.unit = new composedunit([
        new unitOrderTuple(meter.getInstance(), 1)
      , new unitOrderTuple(second.getInstance(), -1)
    ]));
  }
}

