"use strict";

import internationalsystemunit from "./InternationalSystemUnit";
import unitcountertuple from "./UnitCounterTuple";

export default class composedunit extends internationalsystemunit {
  private positiveUnits:internationalsystemunit[];
  private negativeUnits:internationalsystemunit[];
  private symbol:string;
  private baseUnitsSymbol:string;

  constructor(positiveUnits:internationalsystemunit[], negativeUnits:internationalsystemunit[], symbol?:string) {
    super();
    const reducedUnit = this.reduceUnits(positiveUnits, negativeUnits);
    this.positiveUnits = reducedUnit.positiveUnits;
    this.negativeUnits = reducedUnit.negativeUnits;
    this.baseUnitsSymbol = reducedUnit.computedSymbol;
    this.symbol = symbol || this.baseUnitsSymbol;
    internationalsystemunit.registerUnit(this);
  }

  public getPositiveUnits():internationalsystemunit[] {
    return this.positiveUnits;
  }

  public getNegativeUnits():internationalsystemunit[] {
    return this.negativeUnits;
  }

  public getSymbol():string {
    return  this.symbol;
  }
  
  public getComputedSymbol():string {
    return this.baseUnitsSymbol;
  }

  private reduceUnits(positiveUnits:internationalsystemunit[], negativeUnits:internationalsystemunit[]) {
    const unitList = this.initializeUnitList();
    const partialUnitList = this.populateUnitListWithUnits(unitList, positiveUnits, 1);
    const completeUnitList = this.populateUnitListWithUnits(partialUnitList, negativeUnits, -1);

    const positiveUnitsTuples = completeUnitList.filter(tuple => tuple.getCounter() > 0);
    const positiveUnitsArray = this.toUnitsArray(positiveUnitsTuples);

    const negativeUnitsTuples = completeUnitList.filter(tuple => tuple.getCounter() < 0);
    const negativeUnitsArray = this.toUnitsArray(negativeUnitsTuples);

    const computedSymbol = this.computeBaseUnitSymbol(completeUnitList.filter(tuple => tuple.getCounter() != 0));

    return {positiveUnits:positiveUnitsArray, negativeUnits:negativeUnitsArray, computedSymbol:computedSymbol};
  }

  private initializeUnitList():unitcountertuple[] {
    const unitList = internationalsystemunit.listUnits();
    return unitList.map(this.mapToUnitCounterTuple, 0);
  }

  private populateUnitListWithUnits(target:unitcountertuple[], units:internationalsystemunit[], dimensionMultiplier=1):unitcountertuple[] {
    return [...target].map(uct => {
      const instanceCount = units.filter(unit=> unit.getSymbol() == uct.getSymbol()).length;
      return new unitcountertuple(uct.getSymbol(), uct.getCounter() + instanceCount * dimensionMultiplier);
    });
  }

  private mapToUnitCounterTuple(unit:internationalsystemunit, dimensionMultiplier=1):unitcountertuple {
    return new unitcountertuple(unit.getSymbol(), dimensionMultiplier);
  }

  private toUnitsArray(unitsTuples:unitcountertuple[]):internationalsystemunit[] {
    const toto = unitsTuples.map(tuple => {
      const isu = internationalsystemunit.getUnits(tuple.getSymbol());
      return Array<internationalsystemunit>(Math.abs(tuple.getCounter())).fill(isu);
    });
    return Array<internationalsystemunit>(0).concat(...toto);
  }

  private computeBaseUnitSymbol(tuples:unitcountertuple[]):string {
    const sortedTuples = tuples.sort((tuple1, tuple2) => {return tuple1.getSymbol() > tuple2.getSymbol() ? 1 : -1;});
    return sortedTuples.map(tuple => {return tuple.getSymbol() + tuple.getCounter();} ).join(" ");
  }
}