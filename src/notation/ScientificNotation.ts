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

  public print(dimension: dimension):string {
    const value = dimension.getValue();
    if (value==0) {
      return "0" + dimension.getUnit().getSymbol();
    }
    const order = Math.floor(Math.log10(value));
    const root = value/Math.pow(10, order);
    const roundedRoot = this.roundRoot(root, 3);
    if (order == 0) {
      return roundedRoot + dimension.getUnit().getSymbol();
    } else {
      const forcePlusSignIfPositiveOrder:string = order>0 ? "+" : "";
      return roundedRoot + "e" + forcePlusSignIfPositiveOrder + order + dimension.getUnit().getSymbol();
    }
  }

}