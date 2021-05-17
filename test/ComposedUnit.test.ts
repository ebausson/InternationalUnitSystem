"use strict";

import frequency from "../src/Frequency";
import second from "../src/units/Second";
import hertz from "../src/units/Hertz";


test("Expecting a frequency of 24 Hertz to print as '24Hz'.", () => {
  expect(new frequency(24).toString()).toBe("24Hz");
});

test("Expecting the positive dimension of frequency to be empty.", () => {
  expect(new frequency(1).getUnit().getPositiveUnits().length).toBe(0);
});

test("Expecting the negative dimension of frequency to contain second.", () => {
  expect(new frequency(1).getUnit().getNegativeUnits().length).toBe(1);
  expect(new frequency(1).getUnit().getNegativeUnits()[0]).toBe(second.getInstance());
});

test("Expecting dimensions of a hertz to be 's-1'.", () => {
  expect(hertz.getInstance().getComputedSymbol()).toBe("s-1");
});
