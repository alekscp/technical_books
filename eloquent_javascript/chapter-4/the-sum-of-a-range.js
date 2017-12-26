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

function sum(arr) {
  output = 0;

  for (var i = 0; i < arr.length; i++) {
    output += arr[i];
  }

  return output;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
