"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class second extends internationalsystemunit {
  private static instance:second;

  private constructor(){
    super();
  }

  public static getInstance(): second {
    return second.instance || (second.instance= new second());
  }

  getSymbol(): string {
    return "s";
  }

}