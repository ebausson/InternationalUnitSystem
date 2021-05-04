"use strict";

import displaynotation from "./DisplayNotation";
import basicnotation from "./BasicNotation";
import engineeringnotation from "./EngineeringNotation";
import scientificnotation from "./ScientificNotation";
import humanreadabletimenotation from "./HumanReadableTimeNotation";
import dimension from "../Dimension";
import time from "../Time";

export default class notationprintinghelper {
  private static  defaultNotation:displaynotation<dimension>;
  private static forceHumanReadableTime:boolean;

  public static getDefaultDisplayNotation():displaynotation<dimension> {
    if (notationprintinghelper.defaultNotation == null) {
      notationprintinghelper.defaultNotation = basicnotation.getInstance();
    }
    return notationprintinghelper.defaultNotation;
  }

  public static setDefaultDisplayNotation(notation:displaynotation<dimension>):void {
    notationprintinghelper.defaultNotation = notation;
  }

  public static setDefaultDisplayNotationToBasicNotation():void {
    notationprintinghelper.defaultNotation = basicnotation.getInstance();
  }

  public static setDefaultDisplayNotationToEngineeringNotation():void {
    notationprintinghelper.defaultNotation = engineeringnotation.getInstance();
  }

  public static setDefaultDisplayNotationToScientificNotation():void {
    notationprintinghelper.defaultNotation = scientificnotation.getInstance();
  }

  public static print(dimension:dimension):string {
    if (dimension instanceof time && notationprintinghelper.isTimeForcedToHumanReadable()) {
      return humanreadabletimenotation.getInstance().print(dimension);
    }
    return notationprintinghelper.getDefaultDisplayNotation().print(dimension);
  }

  public static isTimeForcedToHumanReadable():boolean {
    if (typeof notationprintinghelper.forceHumanReadableTime !== "boolean") {
      notationprintinghelper.forceHumanReadableTime = true;
      notationprintinghelper.isTimeForcedToHumanReadable = function():boolean {
        return notationprintinghelper.forceHumanReadableTime;
      };
    }
    return notationprintinghelper.isTimeForcedToHumanReadable();
  }

  public static forceHumanTime(force:boolean):void {
    notationprintinghelper.forceHumanReadableTime = force;
  }

}