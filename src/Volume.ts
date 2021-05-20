"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import composedunit from "./units/ComposedUnit";
import unitOrderTuple from "./units/UnitOrderTuple";
import meter from "./units/Meter";

export default class volume extends dimension {
  private static unit:composedunit;

  constructor(value:number) {
    super(value);
    volume.initUnitIfNecessary();
  }

  public getUnit():internationalsystemunit {
    return volume.unit;
  }

  private static initUnitIfNecessary() {
    return volume.unit || (volume.unit = new composedunit([
        new unitOrderTuple(meter.getInstance(), 3)
    ]));
  }
}

