/*
 * calc
 * https://github.com/khanhhua/calc-cli/tree/master
 *
 * Copyright (c) 2014 Khanh Hua
 * Licensed under the MIT license.
 */

'use strict';

function safe(expression){
  if (expression) {
    return true;
  } else {
		return false;
  }
}

exports.eval = function(expr) {
  if (safe(expr)) {
    return eval(expr);
  }
  else {
    return '';
  }
};
