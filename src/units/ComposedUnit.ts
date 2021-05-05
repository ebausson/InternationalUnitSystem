"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default abstract class composedunit extends internationalsystemunit {
  private positiveUnits:internationalsystemunit[];
  private negativeUnits:internationalsystemunit[];

  constructor(positiveUnits:internationalsystemunit[], negativeUnits:internationalsystemunit[]) {
    super();
    this.positiveUnits = positiveUnits;
    this.negativeUnits = negativeUnits; 
  }

  public getPositiveUnits():internationalsystemunit[] {
    return this.positiveUnits;
  }

  public getNegativeUnits():internationalsystemunit[] {
    return this.negativeUnits;
  }
}