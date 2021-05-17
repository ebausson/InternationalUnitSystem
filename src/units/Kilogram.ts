"use strict";

import baseunit from "./BaseUnit";

export default class kilogram extends baseunit {
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