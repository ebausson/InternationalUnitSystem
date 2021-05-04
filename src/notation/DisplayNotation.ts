"use strict";

import dimension from "../Dimension";

export default abstract class displaynotation<T extends dimension> {

  public abstract print(dimension:T):string;

  public roundRoot(number:number, precision:number):number {
    const fixedRoot = number.toFixed(precision);
    return parseFloat(fixedRoot);
  }
}