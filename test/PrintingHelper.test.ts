"use strict";

import length from "../src/Length";
import notationprintinghelper from "../src/notation/NotationPrintingHelper";

test("Printing the length of a 3 Meter object to return 3m", () => {
  expect(new length(3).toString()).toBe("3m");
});

test("Printing the length of a 50 Meter object to return 50m", () => {
  expect(new length(50).toString()).toBe("50m");
});

test("Printing the length of a 10000 Meter object to return 10000m with basic notation printer", () => {
  expect(new length(10000).toString()).toBe("10000m");
});

test("Printing the length of a 0 Meter object to return 0m with basic notation printer", () => {
  expect(new length(0).toString()).toBe("0m");
});

/* Scientific Notation Tests */
test("Printing the length of a 12345 Meter object to return 1.234e+4m with scientific notation printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(12345).toString()).toBe("1.234e+4m");
});

test("Printing the length of a 100000 Meter object to return 1e+5m with scientific notation printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(100000).toString()).toBe("1e+5m");
});

test("Printing the length of a 72000 Meter object to return 7.2e+4m with scientific notation printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(72000).toString()).toBe("7.2e+4m");
});

/* Engineering Notation Tests */
test("Printing the length of a 0 Meter object to return 0m with engineering notation printer", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0m");
});

test("Engineering notation: Printing the length of a 72300 Meter object to return 72.3e+3m ", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(72300).toString()).toBe("72.3e+3m");
});

test("Engineering notation: Printing the length of a 12345678 Meter object to return 12.345e+6m", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(12345678).toString()).toBe("12.346e+6m");
});

test("Engineering notation: Printing the length of a 10000 Meter object to return 10e+3m", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(10000).toString()).toBe("10e+3m");
});

test("Engineering notation: Printing the length of a 0 Meter object to return 0m ", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0m");
});

test("Engineering notation: Printing the length of a 0.5 Meter object to return 500e-3m ", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0.5).toString()).toBe("500e-3m");
});