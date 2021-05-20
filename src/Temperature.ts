"use strict";

import dimension from "./Dimension";
import kelvin from "./units/Kelvin";

export default class temperature extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():kelvin {
    return kelvin.getInstance();
  }

}