"use strict";

import dimension from "../Dimension";
import displaynotation from "./DisplayNotation";

export default class basicnotation extends displaynotation<dimension> {
  private static instance:basicnotation;

  private constructor() {
    super();
  }

  public static getInstance():basicnotation {
    return basicnotation.instance || (this.instance = new this());
  }

  public print(dimension: dimension):string {
    return dimension.getValue() + dimension.getUnit().getSymbol();
  }

}