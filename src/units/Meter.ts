"use strict";

import baseunit from "./BaseUnit";

export default class meter extends baseunit {
  private static instance:meter;

  private constructor(){
    super();
  }

  public static getInstance(): meter {
    return meter.instance || (meter.instance= new meter());
  }

  getSymbol(): string {
    return "m";
  }

}