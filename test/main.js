/*jshint esnext: true */

import * as calculator from "../src/calculator";

describe("A Calculator", function() {
  it("should be able to add two numbers", function() {
    expect(calculator.add(1, 2)).toEqual(3);
  });
});
