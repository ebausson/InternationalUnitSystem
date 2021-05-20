"use strict";

import internationalsystemunit from "./InternationalSystemUnit";
import unitOrder from "./UnitOrderTuple";

export default class composedunit extends internationalsystemunit {
  private units:unitOrder[];
  private symbol:string;
  private baseUnitsSymbol:string;

  constructor(units:unitOrder[], symbol?:string) {
    super();
    this.units = units.filter(tuple => tuple.getOrder() != 0);
    this.baseUnitsSymbol = this.computeBaseUnitSymbol();
    this.symbol = symbol || this.baseUnitsSymbol;
    internationalsystemunit.registerUnit(this);
  }

  public getSymbol():string {
    return this.symbol;
  }
  
  public getComputedSymbol():string {
    return this.baseUnitsSymbol;
  }

  private computeBaseUnitSymbol():string {
    const sortedTuples = this.units.sort((tuple1, tuple2) => {return tuple1.getSymbol() > tuple2.getSymbol() ? 1 : -1;});
    return sortedTuples.map(tuple => {return tuple.getSymbol() + (tuple.getOrder() == 1 ? "" : tuple.getOrder());} ).join(".");
  }
}