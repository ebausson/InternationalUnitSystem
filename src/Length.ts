"use strict";

import dimension from "./Dimension";
import meter from "./units/Meter";

export default class length extends dimension {

  constructor(value:number) {
    super(value);
  }

  getUnit():meter {
    return meter.getInstance();
  }

}