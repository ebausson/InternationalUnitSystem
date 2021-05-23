"use strict";

import dimension from "./Dimension";
import internationalsystemunit from "./units/InternationalSystemUnit";
import joule from "./units/Joule";

export default class energy extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():internationalsystemunit {
    return joule.getInstance();
  }
}