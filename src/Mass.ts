"use strict";

import dimension from "./Dimension";
import kilogram from "./units/Kilogram";

export default class mass extends dimension {

  constructor(value:number) {
    super(value);
  }
  
  getUnit():kilogram {
    return kilogram.getInstance();
  }

}