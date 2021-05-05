"use strict";

import composedunit from "./ComposedUnit";
import second from "./Second";

export default class hertz extends composedunit {
  private static instance:hertz;

  private constructor(){
    super([], [second.getInstance()]);
  }
  static getInstance(): import("./InternationalSystemUnit").default {
    throw new Error("Method not implemented.");
  }

  getSymbol(): string {
    return "Hz";
  }

}