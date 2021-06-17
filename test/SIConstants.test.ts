"use strict";

import internationalsystemunitconstanthelper from "../src/InternationSystemConstantsHelper";

test("Speed of light: value", () => {
  expect(internationalsystemunitconstanthelper.getSpeedOfLight().getValue()).toBe(299792458);
});

test("Speed of light: printing", () => {
  expect(internationalsystemunitconstanthelper.getSpeedOfLight().toString()).toBe("299792458m.s-1");
});

test("Transition frequency of Cesium: value", () => {
  expect(internationalsystemunitconstanthelper.getHyperfineTransitionFrequencyOfCesium().getValue()).toBe(9192631770);
});

test("Transition frequency of Cesium: printing", () => {
  expect(internationalsystemunitconstanthelper.getHyperfineTransitionFrequencyOfCesium().toString()).toBe("9192631770Hz");
});

test("Plank constant: value", () => {
  expect(internationalsystemunitconstanthelper.getPlankConstant().getValue()).toBe(6.62607015e-34);
});

test("Plank constant: printing", () => {
  expect(internationalsystemunitconstanthelper.getPlankConstant().toString()).toBe("6.62607015e-34J.s");
});