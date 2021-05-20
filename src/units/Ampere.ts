"use strict";

import baseunit from "./BaseUnit";

export default class ampere extends baseunit {
  private static instance:ampere;

  private constructor(){
    super();
  }

  public static initialize():void {
    ampere.instance = new ampere();
  }

  public static getInstance():ampere {
    return ampere.getInstance();
  }

  getSymbol(): string {
    return "A";
  }
}

ampere.initialize();
ampere.initialize = (function():void{return;});