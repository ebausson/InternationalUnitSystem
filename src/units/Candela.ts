"use strict";

import baseunit from "./BaseUnit";

export default class candela extends baseunit {
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