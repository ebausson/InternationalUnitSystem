"use strict";

import dimension from "../Dimension";
import displaynotation from "./DisplayNotation";

export default class humanreadabletimenotation extends displaynotation<dimension>{
  private static instance:humanreadabletimenotation;

  private constructor() {
    super();
    this.populateUnits();
  }

  private populateUnits():void {
    //TODO
  }

  public static getInstance():humanreadabletimenotation {
    return humanreadabletimenotation.instance || (this.instance = new this());
  }

  public print(dimension:dimension): string {
    return dimension.getValue() + dimension.getUnit().getSymbol();
  }

}