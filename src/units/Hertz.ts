"use strict";

import composedunit from "./ComposedUnit";
import second from "./Second";

export default class hertz extends composedunit {
  private static instance:hertz;

  private constructor(){
    super([], [second.getInstance()]);
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