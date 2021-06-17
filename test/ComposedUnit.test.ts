"use strict";

import composedunit from "../src/units/ComposedUnit";
import unitOrderTuple from "../src/units/UnitOrderTuple";


import acceleration from "../src/Acceleration";
import action from "../src/Action";
import electric_charge from "../src/ElectricCharge";
import energy from "../src/Energy";
import frequency from "../src/Frequency";
import speed from "../src/Speed";
import surface from "../src/Surface";
import volume from "../src/Volume";

import joule from "../src/units/Joule";
import hertz from "../src/units/Hertz";
import meter from "../src/units/Meter";
import second from "../src/units/Second";


test("Expecting dimension to be sorted alphabetically before printing.", () => {
  const testUnit = new composedunit([new unitOrderTuple(second.getInstance(), -7), new unitOrderTuple(meter.getInstance(), 3)]);
  const testUnit2 = new composedunit([new unitOrderTuple(meter.getInstance(), 3), new unitOrderTuple(second.getInstance(), -9)]);
  expect(testUnit.getComputedSymbol()).toBe("m3.s-7");
  expect(testUnit2.getComputedSymbol()).toBe("m3.s-9");
});

test("Expecting dimension to be be unique.", () => {
  new composedunit([new unitOrderTuple(meter.getInstance(), -4)]);
  expect(() => {new composedunit([new unitOrderTuple(meter.getInstance(), -4)]);}).toThrow();
});

test("Remove order 0 units from dimensions.", () => {
  const testunit = new composedunit([new unitOrderTuple(meter.getInstance(), 5), new unitOrderTuple(second.getInstance(), 0)]);
  expect(testunit.getComputedSymbol()).toBe("m5");
});

test("Remove order number when it is 1 while printing dimensions.", () => {
  const testunit = new composedunit([new unitOrderTuple(meter.getInstance(), 5), new unitOrderTuple(second.getInstance(), 1)]);
  expect(testunit.getComputedSymbol()).toBe("m5.s");
});

//Acceleration
test("Acceleration: dimensions", () => {
  expect(new acceleration(1).getUnit().getComputedSymbol()).toBe("m.s-2");
});
test("Acceleration: printing", () => {
  expect(new acceleration(24).toString()).toBe("24m.s-2");
});

//Action
test("Action: dimensions", () => {
  expect(new action(1).getUnit().getComputedSymbol()).toBe("J.s");
});
test("Action: printing", () => {
  expect(new action(24).toString()).toBe("24J.s");
});

//Electric Charge
test("Electric Charge: dimensions", () => {
  expect(new electric_charge(1).getUnit().getComputedSymbol()).toBe("A.s");
});
test("Electric Charge: printing", () => {
  expect(new electric_charge(24).toString()).toBe("24A.s");
});

//Energy
test("Frequency: unit", () => {
  expect(joule.getInstance().getSymbol()).toBe("J");
});
test("Energy: dimensions", () => {
  expect(new energy(1).getUnit().getComputedSymbol()).toBe("kg.m2.s-2");
});
test("Energy: printing", () => {
  expect(new energy(24).toString()).toBe("24J");
});

//Frequency
test("Frequency: unit", () => {
  expect(hertz.getInstance().getSymbol()).toBe("Hz");
});
test("Frequency: dimensions", () => {
  expect(new frequency(1).getUnit().getComputedSymbol()).toBe("s-1");
});
test("Frequency: printing", () => {
  expect(new frequency(24).toString()).toBe("24Hz");
});

//Speed
test("Speed: dimensions", () => {
  expect(new speed(1).getUnit().getComputedSymbol()).toBe("m.s-1");
});
test("Speed: printing", () => {
  expect(new speed(24).toString()).toBe("24m.s-1");
});

//Surface
test("Surface: dimensions", () => {
  expect(new surface(1).getUnit().getComputedSymbol()).toBe("m2");
});
test("Surface: printing", () => {
  expect(new surface(24).toString()).toBe("24m2");
});

//Volume
test("vulume: dimensions", () => {
  expect(new volume(1).getUnit().getComputedSymbol()).toBe("m3");
});
test("volume: printing", () => {
  expect(new volume(24).toString()).toBe("24m3");
});