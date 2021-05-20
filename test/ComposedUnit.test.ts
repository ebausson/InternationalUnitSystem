"use strict";

import frequency from "../src/Frequency";
import hertz from "../src/units/Hertz";
import speed from "../src/Speed";

test("Expecting the symbol of frequency to be 'Hz'.", () => {
  expect(new frequency(1).getUnit().getSymbol()).toBe("Hz");
});


test("Expecting a frequency of 24 Hertz to print as '24 Hz'.", () => {
  expect(new frequency(24).toString()).toBe("24 Hz");
});

test("Expecting dimensions of a hertz to be 's-1'.", () => {
  expect(hertz.getInstance().getComputedSymbol()).toBe("s-1");
});


test("Expecting to print a speed of 24 meter per second as '24 m.s-1'.", () => {
  expect(new speed(24).toString()).toBe("24 m.s-1");
});
