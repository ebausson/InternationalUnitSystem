"use strict";

export default class subunit {
  private symbol:string;
  private ratio:number;

  constructor(symbol:string, ratio:number) {
    this.symbol = symbol;
    this.ratio = ratio;
  }

  public getRatio() {
    return this.ratio;
  }

  public getSymbol() {
    return this.symbol;
  }
}