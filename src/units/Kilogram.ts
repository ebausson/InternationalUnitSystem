"use strict";

import baseunit from "./BaseUnit";

export default class kilogram extends baseunit {
  private static instance:kilogram;

  private constructor(){
    super();
  }

  public static initialize():void {
    kilogram.instance= new kilogram();
  }

  public static getInstance():kilogram {
    return kilogram.getInstance();
  }

  getSymbol(): string {
    return "kg";
  }
}

kilogram.initialize();
kilogram.initialize = (function():void{return;});