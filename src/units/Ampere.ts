"use strict";

import baseunit from "./BaseUnit";

export default class ampere extends baseunit {
  private static instance:ampere;

  private constructor(){
    super();
  }

  public static getInstance():ampere {
    if (typeof ampere.instance !==  "object") {
      ampere.instance || (ampere.instance= new ampere());
      ampere.getInstance = function():ampere {
        return ampere.instance;
      };
    }
    return ampere.getInstance();
  }

  getSymbol(): string {
    return "A";
  }
}