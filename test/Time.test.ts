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

