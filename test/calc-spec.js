'use strict';

// spec/calc-cli-spec.js
var calc = require("../lib/calc.js");
 
describe("Simple addition", function () {
  it("should add 2 and 3", function () {
    var sum = calc.eval('2+3');
    expect(sum).toBe(5);
  });
  it("should add 0 and 0", function () {
    var sum = calc.eval('0+0');
    expect(sum).toBe(0);
  });
});    
