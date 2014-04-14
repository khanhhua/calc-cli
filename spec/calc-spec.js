'use strict';

// spec/calc-cli-spec.js
var calc = require("../lib/calc.js");
 
describe("Simple addition", function () {
  it("should add 2 and 3", function () {
    var ret = calc.evaluate('2+3');
    expect(ret).toBe(5);
  });
  it("should add 0 and 0", function () {
    var ret = calc.evaluate('0+0');
    expect(ret).toBe(0);
  });
});

describe("Simple subtraction", function () {
  it("should subtract 2 fron 3", function () {
    var ret = calc.evaluate('3-2');
    expect(ret).toBe(1);
  });
  it("should subtract 0 from 0", function () {
    var ret = calc.evaluate('0-0');
    expect(ret).toBe(0);
  });
});
