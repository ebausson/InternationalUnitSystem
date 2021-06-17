"use strict";

import amount_of_substance from "../src/AmountOfSubstance";
import electric_current from "../src/ElectricCurrent";
import length from "../src/Length";
import luminous_intensity from "../src/LuminousIntensity";
import mass from "../src/Mass";
import temperature from "../src/Temperature";
import time from "../src/Time";

test("Testing Amount of substance unit.", () => {
  expect(new amount_of_substance(24).toString()).toBe("24mol");
});

test("Testing Electric current unit.", () => {
  expect(new electric_current(24).toString()).toBe("24A");
});

test("Testing Length unit.", () => {
  expect(new length(24).toString()).toBe("24m");
});

test("Testing Luminous intensity unit.", () => {
  expect(new luminous_intensity(24).toString()).toBe("24cd");
});

test("Testing Mass unit.", () => {
  expect(new mass(24).toString()).toBe("24kg");
});

test("Testing Temperature unit.", () => {
  expect(new temperature(24).toString()).toBe("24K");
});

test("Testing Time unit.", () => {
  expect(new time(24).toString()).toBe("24s");
});