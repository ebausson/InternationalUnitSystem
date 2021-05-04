"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class candela extends internationalsystemunit {
  private static instance:candela;

  private constructor(){
    super();
  }

  public static getInstance():candela {
    if (typeof candela.instance !==  "object") {
      candela.instance || (candela.instance= new candela());
      candela.getInstance = function():candela {
        return candela.instance;
      };
    }
    return candela.getInstance();
  }

  getSymbol(): string {
    return "cd";
  }
}