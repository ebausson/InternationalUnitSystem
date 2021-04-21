"use strict";

import dimension from "../Dimension";
import displaynotation from "./DisplayNotation";

export default class engineeringnotation extends displaynotation {
  private static instance:engineeringnotation;

  private constructor() {
    super();
  }

  public static getInstance():engineeringnotation {
    return engineeringnotation.instance || (this.instance = new this());
  }

  private roundRoot(root:number):number {
    const fixedRoot = root.toFixed(3);
    return parseFloat(fixedRoot);
  }

  public print(dimension: dimension):string {
    const value = dimension.getValue();
    if (value==0) {
      return "0" + dimension.getUnit().getSymbol();
    }
    const order = Math.floor(Math.log10(value)/3)*3;
    const root = value/Math.pow(1000, order/3);
    const roundedRoot = this.roundRoot(root);
    if (order == 0) {
      return roundedRoot + dimension.getUnit().getSymbol();
    } else {
      return roundedRoot + "*10^" + order + dimension.getUnit().getSymbol();
    }
  }

}