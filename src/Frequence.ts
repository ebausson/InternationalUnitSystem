"use strict";

import dimension from "./Dimension";
import hertz from "./units/Hertz";
import InternationalSystemUnit from "./units/InternationalSystemUnit";


export default class frequence extends dimension {

  private static cesiumHyperfineTransitionFrequency = new frequence(9192631770);

  private value:number;

  constructor(value:number) {
    super(value);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
  getUnit(): InternationalSystemUnit {
    return hertz.getInstance();
  }

  public static getCesiumHyperfineTransitionFrequency(): frequence {
    return frequence.cesiumHyperfineTransitionFrequency;
  }
}