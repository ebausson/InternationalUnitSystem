"use strict";

import dimension from "../Dimension";

export default abstract class displaynotation {

  public abstract print(dimension:dimension):string;

  public roundRoot(number:number, precision:number):number {
    const fixedRoot = number.toFixed(precision);
    return parseFloat(fixedRoot);
  }
}