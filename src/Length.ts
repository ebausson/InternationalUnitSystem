"use strict";

import dimension from "./Dimension";
import meter from "./units/Meter";

export default class length extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():meter {
    return meter.getInstance();
  }

}