"use strict";

import dimension from "./Dimension";
import ampere from "./units/Ampere";

export default class electriccurrent extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():ampere {
    return ampere.getInstance();
  }

}