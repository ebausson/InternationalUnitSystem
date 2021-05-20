"use strict";

import composedunit from "./ComposedUnit";
import second from "./Second";
import unitOrder from "./UnitOrderTuple";

export default class hertz extends composedunit {
  private static instance:hertz;

  private constructor(){
    super([new unitOrder(second.getInstance(), -1)], "Hz");
  }
  
  public static getInstance():hertz {
    hertz.instance = new hertz();
    hertz.getInstance = function():hertz {
      return hertz.instance;
    };
    return hertz.getInstance();
  }

  getSymbol(): string {
    return "Hz";
  }
}