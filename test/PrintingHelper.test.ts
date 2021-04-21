"use strict";

import length from "../src/Length";
import notationprintinghelper from "../src/notation/NotationPrintingHelper";

test("Printing the length of a 3 Meter object to return 3m", () => {
  expect(new length(3).toString()).toBe("3m");
});

test("Printing the length of a 50 Meter object to return 50m", () => {
  expect(new length(50).toString()).toBe("50m");
});

test("Printing the length of a 10000 Meter object to return 10000m with basic printer", () => {
  expect(new length(10000).toString()).toBe("10000m");
});

test("Printing the length of a 0 Meter object to return 0m with basic printer", () => {
  expect(new length(0).toString()).toBe("0m");
});

test("Printing the length of a 12345 Meter object to return 1.234*10^4m with scientific printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(12345).toString()).toBe("1.234*10^4m");
});

test("Printing the length of a 10000 Meter object to return 1*10^4m with scientific printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(10000).toString()).toBe("1*10^4m");
});

test("Printing the length of a 72000 Meter object to return 7.2*10^4m with scientific printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(72000).toString()).toBe("7.2*10^4m");
});

test("Printing the length of a 0 Meter object to return 0m with scientific printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(0).toString()).toBe("0m");
});