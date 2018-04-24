// Adds `blank` to all strings
String.prototype.blank = function() {
  return (/^\s*$/).test(this);
}

// Adds `last` to all arrays
Array.prototype.last = function() {
  return this[this.length - 1];
}
