"use strict";

import baseunit from "./BaseUnit";

export default class candela extends baseunit {
  private static instance:candela;

  private constructor(){
    super();
  }

  public static initialize():void {
    candela.instance = new candela();
  }

  public static getInstance():candela {
    return candela.instance;
  }

  getSymbol(): string {
    return "cd";
  }
}

candela.initialize();
candela.initialize = (function():void{return;});