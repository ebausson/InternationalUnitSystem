"use strict";

import internationalsystemunit from "./InternationalSystemUnit";

export default abstract class baseunit extends internationalsystemunit {

  constructor() {
    super();
    internationalsystemunit.registerUnit(this);
  }

}