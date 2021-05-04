"use strict";

import dimension from "./Dimension";
import candela from "./units/Candela";

export default class luminousintensity extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():candela {
    return candela.getInstance();
  }

}