"use strict";

import baseunit from "./BaseUnit";

export default class candela extends baseunit {
  private static instance:candela;

  private constructor(){
    super();
  }

  public initialize():void {
    candela.instance = new candela();
  }

  public static getInstance():candela {
    return candela.getInstance();
  }

  getSymbol(): string {
    return "cd";
  }
}

candela.initialize();
candela.initialize = (function():void{return;});