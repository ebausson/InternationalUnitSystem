"use strict";

export default class unitcountertuple {
  symbol: string;
  counter: number;

  constructor(symbol:string, counter:number) {
    this.symbol = symbol;
    this.counter = counter;
  }

  public getSymbol():string {
    return this.symbol;
  }

  public getCounter():number {
    return this.counter;
  }

  public addToCounter(value:number):void {
    this.counter += value;
  }

}