"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import composedunit from "./units/ComposedUnit";
import unitOrderTuple from "./units/UnitOrderTuple";
import ampere from "./units/Ampere";
import second from "./units/Second";
 
export default class electric_charge extends dimension {
  private static unit:composedunit;

  constructor(value:number) {
    super(value);
  }

  public static initialize():void {
    electric_charge.unit = new composedunit([
        new unitOrderTuple(ampere.getInstance(), 1)
      , new unitOrderTuple(second.getInstance(), 1)
    ]);
  }

  public getUnit():internationalsystemunit {
    return electric_charge.unit;
  }
}

electric_charge.initialize();
electric_charge.initialize = (function():void{return;});