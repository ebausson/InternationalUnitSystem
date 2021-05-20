"use strict";

import dimension from "./Dimension";
import ampere from "./units/Ampere";

export default class electriccurrent extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():ampere {
    return ampere.getInstance();
  }

}