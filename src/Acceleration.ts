"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import composedunit from "./units/ComposedUnit";
import unitOrderTuple from "./units/UnitOrderTuple";
import meter from "./units/Meter";
import second from "./units/Second";

export default class acceleration extends dimension {
  private static unit:composedunit;

  constructor(value:number) {
    super(value);
    acceleration.initUnitIfNecessary();
  }

  public getUnit():internationalsystemunit {
    return acceleration.unit;
  }

  private static initUnitIfNecessary() {
    return acceleration.unit || (acceleration.unit = new composedunit([
        new unitOrderTuple(meter.getInstance(), 1)
      , new unitOrderTuple(second.getInstance(), -2)
    ]));
  }
}

