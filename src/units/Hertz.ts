"use strict";

import composedunit from "./ComposedUnit";
import second from "./Second";
import unitOrder from "./UnitOrderTuple";

export default class hertz extends composedunit {
  private static instance:hertz;

  private constructor(){
    super([new unitOrder(second.getInstance(), -1)], "Hz");
  }

  public static initialize():void {
    hertz.instance = new hertz();
  }
  
  public static getInstance():hertz {
    return hertz.instance;
  }

  getSymbol(): string {
    return "Hz";
  }
}

hertz.initialize();
hertz.initialize = (function():void{return;});