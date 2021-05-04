"use strict";

import dimension from "../Dimension";
import displaynotation from "./DisplayNotation";

export default class engineeringnotation extends displaynotation<dimension> {
  private static instance:engineeringnotation;

  private constructor() {
    super();
  }

  public static getInstance():engineeringnotation {
    return engineeringnotation.instance || (this.instance = new this());
  }

  public print(dimension: dimension):string {
    const value = dimension.getValue();
    if (value==0) {
      return "0" + dimension.getUnit().getSymbol();
    }
    const order = Math.floor(Math.log10(value)/3)*3;
    const root = value/Math.pow(1000, order/3);
    const roundedRoot = this.roundRoot(root, 3);
    if (order == 0) {
      return roundedRoot + dimension.getUnit().getSymbol();
    } else {
      const forcePlusSignIfPositiveOrder:string = order>0 ? "+" : "";
      return roundedRoot + "e" + forcePlusSignIfPositiveOrder + order + dimension.getUnit().getSymbol();
    }
  }

}