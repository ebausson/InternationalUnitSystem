"use strict";

import baseunit from "./BaseUnit";

export default class kelvin extends baseunit {
  private static instance:kelvin;

  private constructor(){
    super();
  }

  public static initialize():void {
    kelvin.instance = new kelvin();
  }

  public static getInstance():kelvin {
    return kelvin.instance;
  }

  getSymbol(): string {
    return "K";
  }
}

kelvin.initialize();
kelvin.initialize = (function():void{return;});