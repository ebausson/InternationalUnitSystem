"use strict";

export default class notationprintinghelper {
  private static forceHumanReadableTime:boolean;

  public static isTimeForcedToHumanReadable():boolean {
    if (typeof notationprintinghelper.forceHumanReadableTime !== "boolean") {
      notationprintinghelper.forceHumanReadableTime = true;
      notationprintinghelper.isTimeForcedToHumanReadable = function():boolean {
        return notationprintinghelper.forceHumanReadableTime;
      };
    }
    return notationprintinghelper.isTimeForcedToHumanReadable();
  }

  public static setForceHumanTime(force:boolean):void {
    notationprintinghelper.forceHumanReadableTime = force;
  }

  private static roundRoot(number:number, precision:number):number {
    const fixedRoot = number.toFixed(precision);
    return parseFloat(fixedRoot);
  }

  public static setDefaultDisplayNotationToBasicNotation():void {
    notationprintinghelper.toDefaultNotation = function(value:number):string {
      return notationprintinghelper.toBasicNotation(value);
    };
  }

  public static setDefaultDisplayNotationToEngineeringNotation():void {
    notationprintinghelper.toDefaultNotation = function(value:number):string {
      return notationprintinghelper.toEngineeringNotation(value);
    };
  }

  public static setDefaultDisplayNotationToScientificNotation():void {
    notationprintinghelper.toDefaultNotation = function(value:number):string {
      return notationprintinghelper.toScientificNotation(value);
    };
  }

  private static toStepSize(value:number, stepSize:number, precision:number):string {
    if (value==0) {
      return "0";
    }
    const order = Math.floor(Math.log10(value)/stepSize)*stepSize;
    const root = value/Math.pow(10, order);
    const roundedRoot = this.roundRoot(root, precision);
    if (order == 0) {
      return "" + roundedRoot;
    } else {
      const forcePlusSignIfPositiveOrder:string = order>0 ? "+" : "";
      return roundedRoot + "e" + forcePlusSignIfPositiveOrder + order;
    }
  }

  public static toDefaultNotation(value: number):string {
    return notationprintinghelper.toBasicNotation(value);
  }

  public static toBasicNotation(value: number):string {
    return "" + value;
  }

  public static toScientificNotation(value: number):string {
    return notationprintinghelper.toStepSize(value, 1, 3);
  }

  public static toEngineeringNotation(value: number):string {
    return notationprintinghelper.toStepSize(value, 3, 3);
  }

}