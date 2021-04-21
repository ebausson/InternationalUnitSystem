"use strict";

import dimension from "../Dimension";
import displaynotation from "./DisplayNotation";

export default class scientificnotation extends displaynotation {
  private static instance:scientificnotation;

  private constructor() {
    super();
  }

  public static getInstance():scientificnotation {
    return scientificnotation.instance || (this.instance = new this());
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
    const order = Math.floor(Math.log10(value));
    const root = value/Math.pow(10, order);
    const roundedRoot = this.roundRoot(root);
    if (order == 0) {
      return roundedRoot + dimension.getUnit().getSymbol();
    } else {
      return roundedRoot + "*10^" + order + dimension.getUnit().getSymbol();
    }
  }

}