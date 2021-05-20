"use strict";

import dimension from "./Dimension";
import second from "./units/Second";
import notationprintinghelper from "./notation/NotationPrintingHelper";

export default class time extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():second {
    return second.getInstance();
  }


  public toString(precision=2):string {
    if (precision < 1) {
      throw new RangeError("precision has to be at least 1.");
    }
    if (this.getValue() < 1e-6 || ! notationprintinghelper.isTimeForcedToHumanReadable()) {
      return notationprintinghelper.toDefaultNotation(this.getValue()) + this.getUnit().getSymbol();
    } else {
      return this.getUnit().printAsHumanReadableTime(this.getValue(), precision);
    }
  }

}