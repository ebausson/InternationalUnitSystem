"use strict";

import dimension from "../Dimension";

export default abstract class displaynotation {

  public abstract print(dimension:dimension):string;
}