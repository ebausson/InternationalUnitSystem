"use strict";

import internationalsystemunit from "./InternationalSystemUnit";
import subunit from "./SubUnit";

export default class second extends internationalsystemunit {
  private static instance:second;
  private static subunits:subunit[];

  private constructor(){
    super();
    this.initSubunits();
  }
  private initSubunits() {
    second.subunits = [
      new subunit("ns", 1/1e9),
      new subunit("μs", 1/1e6),
      new subunit("ms", 1/1e3),
      new subunit("s", 1),
      new subunit("mn", 60),
      new subunit("h", 3600),
      new subunit("d", 86400),
      new subunit("year", 31557600),
    ];
  }

  public static getInstance():second {
    if (typeof second.instance !==  "object") {
      second.instance || (second.instance= new second());
      second.getInstance = function():second {
        return second.instance;
      };
    }
    return second.getInstance();
  }

  getSymbol(): string {
    return "s";
  }



}