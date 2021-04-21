"use strict";

import displaynotation from "./DisplayNotation";
import basicnotation from "./BasicNotation";
import scientificnotation from "./ScientificNotation";
import dimension from "../Dimension";

export default class notationprintinghelper {
  private static defaultNotation:displaynotation;


  public static getDefaultDisplayNotation():displaynotation {
    return notationprintinghelper.defaultNotation || ( notationprintinghelper.defaultNotation = basicnotation.getInstance());
  }

  public static setDefaultDisplayNotation(notation:displaynotation):void {
    notationprintinghelper.defaultNotation = notation;
  }

  public static setDefaultDisplayNotationToBasicNotation():void {
    notationprintinghelper.defaultNotation = basicnotation.getInstance();
  }

  public static setDefaultDisplayNotationToScientificNotation():void {
    notationprintinghelper.defaultNotation = scientificnotation.getInstance();
  }

  public static print(dimension:dimension):string {
    return notationprintinghelper.getDefaultDisplayNotation().print(dimension);
  }

}