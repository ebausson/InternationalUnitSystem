"use strict";

import frequency from "./Frequency";

export default class internationalsystemunitconstanthelper {

  public getHyperfineTransitionFrequencyOfCesium():frequency {
    return frequency.getCesiumHyperfineTransitionFrequency();
  }
}
