"use strict";

import dimension from "./Dimension";
import composedunit from "./units/ComposedUnit";
import internationalsystemunit from "./units/InternationalSystemUnit";
import joule from "./units/Joule";
import unitOrderTuple from "./units/UnitOrderTuple";
import second from "./units/Second";

export default class action extends dimension {
  private static unit:composedunit;
  private static plankConstant:action;

  constructor(value:number) {
    super(value);
  }

  public static initialize():void {
    action.unit = new composedunit([
      new unitOrderTuple(joule.getInstance(), 1)
      , new unitOrderTuple(second.getInstance(), 1)
    ]);
    action.plankConstant = new action(6.62607015e-34);
  }

  public getUnit():internationalsystemunit {
    return action.unit;
  }

  public static getPlankConstant():action {
    return action.plankConstant;
  }
}

action.initialize();
action.initialize = (function():void{return;});