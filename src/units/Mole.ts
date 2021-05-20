"use strict";

import baseunit from "./BaseUnit";

export default class mole extends baseunit {
  private static instance:mole;

  private constructor(){
    super();
  }

  public static initialize():void {
    mole.instance = new mole();
  }

  public static getInstance():mole {
    return mole.instance;
  }

  getSymbol(): string {
    return "mol";
  }
}

mole.initialize();
mole.initialize = (function():void{return;});