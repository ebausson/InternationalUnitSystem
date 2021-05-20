"use strict";

import dimension from "./Dimension";
import candela from "./units/Candela";

export default class luminousintensity extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():candela {
    return candela.getInstance();
  }

}