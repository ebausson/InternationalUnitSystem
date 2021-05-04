"use strict";

import dimension from "./Dimension";
import kilogram from "./units/Kilogram";

export default class mass extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():kilogram {
    return kilogram.getInstance();
  }

}