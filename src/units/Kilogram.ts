"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class kilogram extends internationalsystemunit {
  private static instance:kilogram;

  private constructor(){
    super();
  }

  public static getInstance():kilogram {
    if (typeof kilogram.instance !==  "object") {
      kilogram.instance || (kilogram.instance= new kilogram());
      kilogram.getInstance = function():kilogram {
        return kilogram.instance;
      };
    }
    return kilogram.getInstance();
  }

  getSymbol(): string {
    return "kg";
  }
}