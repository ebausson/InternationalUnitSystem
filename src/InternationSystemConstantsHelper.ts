"use strict";

import frequency from "./Frequency";
import speed from "./Speed";
import action from "./Action";

export default class internationalsystemunitconstanthelper {

  public static getHyperfineTransitionFrequencyOfCesium():frequency {
    return frequency.getCesiumHyperfineTransitionFrequency();
  }

  public static getSpeedOfLight():frequency {
    return speed.getSpeedOfLight();
  }

  public static getPlankConstant():action {
    return action.getPlankConstant();
  }
}
