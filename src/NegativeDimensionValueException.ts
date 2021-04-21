"use strict";

export default class negativedimensionvalueexception extends Error {
  
  constructor(value:number){
    super("Negative value (" + value + ") are not allowed in Dimensions");
  }
  
}