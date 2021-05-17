"use strict";

export default abstract class internationalsystemunit {
  private static unitsRegistry:internationalsystemunit[];

  public static initialize():void {
    internationalsystemunit.unitsRegistry = Array<internationalsystemunit>(0);
  }

  public abstract getSymbol():string;
  
  public getComputedSymbol():string {
    return this.getSymbol();
  }

  public getPositiveUnits():internationalsystemunit[] {
    return [this];
  }

  public getNegativeUnits():internationalsystemunit[] {
    return [];
  }

  public static registerUnit(unit:internationalsystemunit):void {
    if (internationalsystemunit.unitsRegistry.find(element => element.getSymbol() == unit.getSymbol())) {
      throw new Error("Unit with Symbol '" + unit.getSymbol() + "' already exist in registry.");
    }
    this.unitsRegistry.push(unit);
  }

  public static listUnits(): internationalsystemunit[] {
    return [...this.unitsRegistry];
  }

  public static getUnits(symbol:string):internationalsystemunit {
    const lookup = this.unitsRegistry.find(unit => unit.getSymbol() === symbol);
    if (lookup === undefined) {
      throw new TypeError("Could not locate expected unit (" + symbol + ")");
    }
    return lookup;
  }
}

internationalsystemunit.initialize();
internationalsystemunit.initialize = (function():void{return;});