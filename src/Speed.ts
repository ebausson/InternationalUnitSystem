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
  }

  public static initialize():void {
    speed.unit = new composedunit([
        new unitOrderTuple(meter.getInstance(), 1)
      , new unitOrderTuple(second.getInstance(), -1)
    ]);
    speed.speedOfLight = new speed(299792458);
  }

  public getUnit():internationalsystemunit {
    return speed.unit;
  }

  public static getSpeedOfLight():speed {
    return speed.speedOfLight;
  }
}

speed.initialize();
speed.initialize = (function():void{return;});