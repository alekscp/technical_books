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
  this.isRange = true;
  arr = test(from, to);

  ArraySeq.call(this, arr);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

RangeSeq.prototype.seq = function() {
  var arr = [];

  for (var i = this.from; i == this.to; i++) {
    arr.push(i);
  }

  this.seq = arr;
};

function test(from, to) {
  var arr = [];

  for (var i = from; i == to; i++) {
    console.log(i)
    arr.push(i);
  }

  return arr;
};
// Object.defineProperty(RangeSeq.prototype, "seq", {
//   set: function(arr) {
//     this.seq = arr;
//   }
// });

function logFive(sequence) {
  console.log(sequence.seq)
  if (sequence.isRange) { 
    console.log("HEY")
    sequence.buildSequence; }

  console.log(sequence)
  for (var i = 0; i < 5; i++) {

    if (sequence.isEndReached()) {
      break;
    } else {
      console.log(sequence.next())
    }
  }
}

// logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
