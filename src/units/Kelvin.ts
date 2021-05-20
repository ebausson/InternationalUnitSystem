"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class kelvin extends internationalsystemunit {
  private static instance:kelvin;

  private constructor(){
    super();
  }

  public static initialize():void {
    kelvin.instance = new kelvin();
  }

  public static getInstance():kelvin {
    return kelvin.getInstance();
  }

  getSymbol(): string {
    return "K";
  }
}

kelvin.initialize();
kelvin.initialize = (function():void{return;});