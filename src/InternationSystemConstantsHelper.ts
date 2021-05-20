"use strict";

import frequency from "./Frequency";
import speed from "./Speed";

export default class internationalsystemunitconstanthelper {

  public static getHyperfineTransitionFrequencyOfCesium():frequency {
    return frequency.getCesiumHyperfineTransitionFrequency();
  }

  public static getSpeedOfLight():frequency {
    return speed.getSpeedOfLight();
  }
}
