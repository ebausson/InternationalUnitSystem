"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import composedunit from "./units/ComposedUnit";
import unitOrderTuple from "./units/UnitOrderTuple";
import meter from "./units/Meter";

export default class surface extends dimension {
  private static unit:composedunit;

  constructor(value:number) {
    super(value);
    surface.initUnitIfNecessary();
  }

  public getUnit():internationalsystemunit {
    return surface.unit;
  }

  private static initUnitIfNecessary() {
    return surface.unit || (surface.unit = new composedunit([
        new unitOrderTuple(meter.getInstance(), 2)
    ]));
  }
}

