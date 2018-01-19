function ArraySeq(arr) {
  this.seq = arr;
  this.counter = 0;
  this.length = arr.length;
}

ArraySeq.prototype.next = function() {
  value = this.seq[this.counter];
  this.counter++;

  return value;
}

ArraySeq.prototype.isEndReached = function() {
  if (this.counter == this.length) {
    return true;
  } else {
    return false;
  }
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;

  ArraySeq.call(this, buildArray(from, to));
}
RangeSeq.prototype = Object.create(ArraySeq.prototype);

function buildArray(from, to) {
  var arr = [];

  for (var i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
}

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (sequence.isEndReached()) {
      break;
    } else {
      console.log(sequence.next())
    }
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
