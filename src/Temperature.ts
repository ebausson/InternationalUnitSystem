"use strict";

import dimension from "./Dimension";
import kelvin from "./units/Kelvin";

export default class temperature extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():kelvin {
    return kelvin.getInstance();
  }

}