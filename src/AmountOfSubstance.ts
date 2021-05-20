"use strict";

import dimension from "./Dimension";
import mole from "./units/Mole";

export default class amountofsubstance extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():mole {
    return mole.getInstance();
  }

}