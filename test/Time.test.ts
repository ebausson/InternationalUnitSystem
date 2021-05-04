"use strict";

import time from "../src/Time";

test("Printing the duration of 40 Seconds return 40s.", () => {
  expect (new time(40).toString()).toBe("40s");
});

test("Trying to create a negative time should fail", () => {
  expect (() => {
    new time(-5);
  }).toThrow();
});

test("Printing the duration of 60 Seconds should return 1mn.", () => {
  expect(new time(60).toString()).toBe("1mn");
});

test("Printing the duration of 0.0001ms should return 100μs.", () => {
  expect (new time(0.0001).toString()).toBe("100μs");
});

test("Printing the duration of 1e8s should return 3year and 61 days.", () => {
  expect (new time(1e8).toString()).toBe("3y61d");
});

test("Printing the duration of 0s should return 0s.", () => {
  expect (new time(0).toString()).toBe("0s");
});
