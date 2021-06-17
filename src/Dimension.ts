"use strict";

import internationalsystemunit from "./units/InternationalSystemUnit";
import notationprintinghelper from "./notation/NotationPrintingHelper";
import negativedimensionvalueexception from "./NegativeDimensionValueException";

export default abstract class dimension {

  private value:number;

  public constructor(value:number) {
    if (value < 0) throw new negativedimensionvalueexception(value);
    this.value = value;
  }

  public getValue():number {
    return this.value;
  }
  
  abstract getUnit():internationalsystemunit;

  public toString():string {
    return notationprintinghelper.toDefaultNotation(this.getValue()) + this.getUnit().getSymbol();
  }

}