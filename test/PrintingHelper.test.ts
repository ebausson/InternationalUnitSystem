"use strict";

import length from "../src/Length";
import notationprintinghelper from "../src/notation/NotationPrintingHelper";


/*Basic Notation Tests */
test("Basic notation: Printing the length of a 0 Meter object to return 0 m.", () => {
  expect(new length(0).toString()).toBe("0 m");
});

test("Basic notation: Printing the length of a 3 Meter object to return 3 m", () => {
  expect(new length(3).toString()).toBe("3 m");
});

test("Basic notation: Printing the length of a 50 Meter object to return 50 m", () => {
  expect(new length(50).toString()).toBe("50 m");
});

test("Basic notation: Printing the length of a 10000 Meter object to return 10000 m.", () => {
  expect(new length(10000).toString()).toBe("10000 m");
});

test("Basic notation: Printing the length of a 0.05 Meter object to return 0.05 m.", () => {
  expect(new length(0.05).toString()).toBe("0.05 m");
});


/* Scientific Notation Tests */
test("Scientific notation: Printing the length of a 12345 Meter object to return 1.234e+4 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(12345).toString()).toBe("1.234e+4 m");
});

test("Scientific notation: Printing the length of a 100000 Meter object to return 1e+5 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(100000).toString()).toBe("1e+5 m");
});

test("Scientific notation: Printing the length of a 72000 Meter object to return 7.2e+4 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(72000).toString()).toBe("7.2e+4 m");
});


/* Engineering Notation Tests */
test("Engineering notation: Printing the length of a 0 Meter object to return 0 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0 m");
});

test("Engineering notation: Printing the length of a 72300 Meter object to return 72.3e+3 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(72300).toString()).toBe("72.3e+3 m");
});

test("Engineering notation: Printing the length of a 12345678 Meter object to return 12.345e+6 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(12345678).toString()).toBe("12.346e+6 m");
});

test("Engineering notation: Printing the length of a 10000 Meter object to return 10e+3 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(10000).toString()).toBe("10e+3 m");
});

test("Engineering notation: Printing the length of a 0 Meter object to return 0 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0 m");
});

test("Engineering notation: Printing the length of a 0.5 Meter object to return 500e-3 m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0.5).toString()).toBe("500e-3 m");
});