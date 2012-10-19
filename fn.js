module.exports = {
  curry: curry
};

function curry (fn/*, prefix...*/) {
  var prefix = Array.prototype.slice.call(arguments, 1);
  return function () {
    var args = prefix.concat(Array.prototype.slice.call(arguments, 0));
    return fn.apply(this, args);
  };
}
