"use strict";

import frequency from "../src/Frequency";
import hertz from "../src/units/Hertz";
import speed from "../src/Speed";
import surface from "../src/Surface";
import volume from "../src/Volume";
import composedunit from "../src/units/ComposedUnit";
import meter from "../src/units/Meter";
import unitOrderTuple from "../src/units/UnitOrderTuple";
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

test("Expecting the symbol of frequency to be 'Hz'.", () => {
  expect(new frequency(1).getUnit().getSymbol()).toBe("Hz");
});


test("Expecting a frequency of 24 Hertz to print as '24 Hz'.", () => {
  expect(new frequency(24).toString()).toBe("24 Hz");
});

test("Expecting dimensions of a hertz to be 's-1'.", () => {
  expect(hertz.getInstance().getComputedSymbol()).toBe("s-1");
});

test("Expecting the symbol of speed to be 'm.s-1'.", () => {
  expect(new speed(1).getUnit().getSymbol()).toBe("m.s-1");
});

test("Expecting to print a speed of 24 meter per second as '24 m.s-1'.", () => {
  expect(new speed(24).toString()).toBe("24 m.s-1");
});

test("Expecting the symbol of surface to be 'm2'.", () => {
  expect(new surface(1).getUnit().getSymbol()).toBe("m2");
});

test("Expecting the symbol of volume to be 'm3'.", () => {
  expect(new volume(1).getUnit().getSymbol()).toBe("m3");
});