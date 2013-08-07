var curry = require('./fn').curry;
var deepEqual = require('./object').deepEqual;

module.exports = {
  any: any
, find: find
, indexOfFn: indexOfFn
, deepIndexOf: deepIndexOf
};

function any (xs, fn) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (fn(xs[i])) return true;
  }
  return false;
}

function find (xs, fn) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (fn(xs[i])) return xs[i];
  }
}

function indexOfFn (xs, fn) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (fn(xs[i])) return i;
  }
  return -1;
}

function deepIndexOf (list, obj) {
  return indexOfFn(list, curry(deepEqual, obj));
}

