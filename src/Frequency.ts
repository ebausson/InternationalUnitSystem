"use strict";

import dimension from "./Dimension";
import hertz from "./units/Hertz";
import InternationalSystemUnit from "./units/InternationalSystemUnit";


export default class frequency extends dimension {
  private static cesiumHyperfineTransitionFrequency:frequency;

  constructor(value:number) {
    super(value);
  }

  public static initialize():void {
    frequency.cesiumHyperfineTransitionFrequency = new frequency(9192631770);
  }

  getUnit(): InternationalSystemUnit {
    return hertz.getInstance();
  }

  public static getCesiumHyperfineTransitionFrequency(): frequency {
    return frequency.cesiumHyperfineTransitionFrequency;
  }
}

frequency.initialize();
frequency.initialize = (function():void{return;});