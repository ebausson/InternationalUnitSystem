"use strict";

import dimension from "./Dimension";
import hertz from "./units/Hertz";
import InternationalSystemUnit from "./units/InternationalSystemUnit";


export default class frequency extends dimension {

  private static cesiumHyperfineTransitionFrequency:frequency;

  constructor(value:number) {
    super(value);
  }

  getUnit(): InternationalSystemUnit {
    return hertz.getInstance();
  }

  public static getCesiumHyperfineTransitionFrequency(): frequency {
    frequency.cesiumHyperfineTransitionFrequency = new frequency(9192631770);
    frequency.getCesiumHyperfineTransitionFrequency = function() { 
      return frequency.cesiumHyperfineTransitionFrequency;
    };
    return frequency.getCesiumHyperfineTransitionFrequency();
  }
}