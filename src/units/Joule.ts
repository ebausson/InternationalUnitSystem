"use strict";

import composedunit from "./ComposedUnit";
import kilogram from "./Kilogram";
import meter from "./Meter";
import second from "./Second";
import unitOrder from "./UnitOrderTuple";

export default class joule extends composedunit {
  private static instance:joule;

  private constructor(){
    super([
        new unitOrder(kilogram.getInstance(), 1)
      , new unitOrder(meter.getInstance(), 2)
      , new unitOrder(second.getInstance(), -2)
    ], "J");
  }

  public static initialize():void {
    joule.instance= new joule();
  }

  public static getInstance():joule {
    return joule.instance;
  }
}

joule.initialize();
joule.initialize = (function():void{return;});