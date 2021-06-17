"use strict";

import baseunit from "./BaseUnit";

export default class meter extends baseunit {
  private static instance:meter;

  private constructor(){
    super();
  }

  public static initialize():void {
    meter.instance = new meter();
  }

  public static getInstance(): meter {
    return meter.instance || (meter.instance= new meter());
  }

  getSymbol(): string {
    return "m";
  }
}

meter.initialize();
meter.initialize = (function():void{return;});