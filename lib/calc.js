/*
 * calc
 * https://github.com/khanhhua/calc-cli/tree/master
 *
 * Copyright (c) 2014 Khanh Hua
 * Licensed under the MIT license.
 */

'use strict';

function parse(expression) {
  var rgx = /(\d+)([+\-*\/])(\d+)/i;
  var groups = expression.match(rgx);
  // type: operator: operand1: operand2
  // type denotes `unary`, `binary`, `tertiary` or more
  // TODO to be optimized with some opcode (shorter name for operator type)
  return ['binary',groups[2],groups[1],groups[3]]; 
}

function unary(operator, operand1) {
  // TODO
}

function binary(operator, operand1, operand2) {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);
  switch (operator) {
    case '+': 
      return operand1 + operand2;
    case '-': 
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return 0;
  }
}

function safe(expression){
  if (expression) {
    return true;
  } else {
		return false;
  }
}

exports.evaluate = function(expr) {
  var ret = 0;
  if (safe(expr)) {
    var token = parse(expr);
    switch (token[0]) {
      case 'binary':
        ret = binary(token[1],token[2],token[3]);
        break;
      default: break;
    }
    return ret;
  }
  else {
    return '';
  }
};

