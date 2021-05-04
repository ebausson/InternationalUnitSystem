"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class kelvin extends internationalsystemunit {
  private static instance:kelvin;

  private constructor(){
    super();
  }

  public static getInstance():kelvin {
    if (typeof kelvin.instance !==  "object") {
      kelvin.instance || (kelvin.instance= new kelvin());
      kelvin.getInstance = function():kelvin {
        return kelvin.instance;
      };
    }
    return kelvin.getInstance();
  }

  getSymbol(): string {
    return "K";
  }
}