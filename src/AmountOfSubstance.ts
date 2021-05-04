"use strict";

import dimension from "./Dimension";
import mole from "./units/Mole";

export default class amountofsubstance extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():mole {
    return mole.getInstance();
  }

}