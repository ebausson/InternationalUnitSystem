"use strict";

import dimension from "./Dimension";
import second from "./units/Second";

export default class time extends dimension {
  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  getUnit():second {
    return second.getInstance();
  }

}