function range(start, end, step) {
  if (typeof step === 'undefined') {
    step = 1;
  };

  var rangeLength = Math.abs(end - start) + 1;
  var output = [start];

  while (output.length < rangeLength) {
    lastNum = output[output.length - 1];

    if (end < start) {
      output.push(lastNum - Math.abs(step));
    } else {
      output.push(lastNum + step);
    };
  }

  return output;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
