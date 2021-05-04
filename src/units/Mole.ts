"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class mole extends internationalsystemunit {
  private static instance:mole;

  private constructor(){
    super();
  }

  public static getInstance():mole {
    if (typeof mole.instance !==  "object") {
      mole.instance || (mole.instance= new mole());
      mole.getInstance = function():mole {
        return mole.instance;
      };
    }
    return mole.getInstance();
  }

  getSymbol(): string {
    return "mol";
  }
}