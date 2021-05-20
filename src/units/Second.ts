"use strict";

import baseunit from "./BaseUnit";
import subunit from "./SubUnit";

export default class second extends baseunit {
  private static instance:second;
  private static subunits:subunit[];

  private constructor(){
    super();
  }

  public static initialize():void {
    second.instance = new second();
    second.initSubunits();
  }

  private static initSubunits() {
    second.subunits = [
      new subunit("ns", 1/1e9),
      new subunit("μs", 1/1e6),
      new subunit("ms", 1/1e3),
      new subunit("s", 1),
      new subunit("mn", 60),
      new subunit("h", 3600),
      new subunit("d", 86400),
      new subunit("y", 31557600),
    ];
  }

  public static getSubunits():subunit[] {
    return second.subunits;
  }

  public static getInstance():second {
    return second.instance;
  }

  getSymbol(): string {
    return "s";
  }

  public printAsHumanReadableTime(value:number, precision:number):string {
    const filteredUnits = second.getSubunits().filter(subUnit => value >= subUnit.getRatio()).slice (-1*precision);
    const reducedResult = filteredUnits.reduceRight((accumulator, subunit) => {
      const currentUnitValue = Math.floor(accumulator.startingValue/subunit.getRatio());
      const currentUnitStringValue = (currentUnitValue>0) ? currentUnitValue + subunit.getSymbol(): "";
      return {result:accumulator.result + currentUnitStringValue, startingValue:value%subunit.getRatio()};
    }, {result:"", startingValue:value});
    return reducedResult.result;
  }
}

second.initialize();
second.initialize = (function():void{return;});