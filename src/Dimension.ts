"use strict";

import internationalsystemunit from "./units/InternationalSystemUnit";
import notationprintinghelper from "./notation/NotationPrintingHelper";

export default abstract class dimension {

  abstract getValue():number;
  
  abstract getUnit():internationalsystemunit;

  public toString():string {
    return notationprintinghelper.print(this);
  }

}