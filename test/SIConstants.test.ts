"use strict";

import internationalsystemunitconstanthelper from "../src/InternationSystemConstantsHelper";

test("Speed of light: value", () => {
  expect(internationalsystemunitconstanthelper.getSpeedOfLight().getValue()).toBe(299792458);
});

test("Speed of light: printing", () => {
  expect(internationalsystemunitconstanthelper.getSpeedOfLight().toString()).toBe("299792458 m.s-1");
});

test("Transition frequency of Cesium: value", () => {
  expect(internationalsystemunitconstanthelper.getHyperfineTransitionFrequencyOfCesium().getValue()).toBe(9192631770);
});

test("Transition frequency of Cesium: printing", () => {
  expect(internationalsystemunitconstanthelper.getHyperfineTransitionFrequencyOfCesium().toString()).toBe("9192631770 Hz");
});