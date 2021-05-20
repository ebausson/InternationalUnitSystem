"use strict";

import baseunit from "./BaseUnit";
import internationalsystemunit from "./InternationalSystemUnit";

class unitOrder {
  private unit: baseunit;
  private order: number;

  constructor(unit:internationalsystemunit, order:number) {
    this.unit = unit;
    this.order = order;
  }

  public getSymbol():string {
    return this.unit.getSymbol();
  }

  public getUnit():baseunit {
    return this.unit;
  }

  public getOrder():number {
    return this.order;
  }

}

export default unitOrder;