function range(low, high) {
  var output = [];

  for (var i = 0; output.length < high; i++)
    output.push(low + i);

  return output;
}

console.log(range(1, 10));
