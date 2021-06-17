"use strict";

import length from "../src/Length";
import notationprintinghelper from "../src/notation/NotationPrintingHelper";


/*Basic Notation Tests */
test("Basic notation: Printing the length of 0 Meter.", () => {
  expect(new length(0).toString()).toBe("0m");
});

test("Basic notation: Printing the length of 3 Meter.", () => {
  expect(new length(3).toString()).toBe("3m");
});

test("Basic notation: Printing the length of 50 Meter.", () => {
  expect(new length(50).toString()).toBe("50m");
});

test("Basic notation: Printing the length of  10000 Meter.", () => {
  expect(new length(10000).toString()).toBe("10000m");
});

test("Basic notation: Printing the length of 0.05 Meter.", () => {
  expect(new length(0.05).toString()).toBe("0.05m");
});


/* Scientific Notation Tests */
test("Scientific notation: Printing the length of 12345 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(12345).toString()).toBe("1.234e+4m");
});

test("Scientific notation: Printing the length of 100000 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(100000).toString()).toBe("1e+5m");
});

test("Scientific notation: Printing the length of a 72000 Meter object to return 7.2e+4m.", () => {
  notationprintinghelper.setDefaultDisplayNotationToScientificNotation();
  expect(new length(72000).toString()).toBe("7.2e+4m");
});


/* Engineering Notation Tests */
test("Engineering notation: Printing the length of 0 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0m");
});

test("Engineering notation: Printing the length of 72300 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(72300).toString()).toBe("72.3e+3m");
});

test("Engineering notation: Printing the length of 12345678 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(12345678).toString()).toBe("12.346e+6m");
});

test("Engineering notation: Printing the length of 10000.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(10000).toString()).toBe("10e+3m");
});

test("Engineering notation: Printing the length of 0 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0).toString()).toBe("0m");
});

test("Engineering notation: Printing the length of 0.5 Meter.", () => {
  notationprintinghelper.setDefaultDisplayNotationToEngineeringNotation();
  expect(new length(0.5).toString()).toBe("500e-3m");
});