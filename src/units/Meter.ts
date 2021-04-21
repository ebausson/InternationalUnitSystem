"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default class meter extends internationalsystemunit {
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