function countBs(str) {
  var counter = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "B")
      counter += 1;
  }

  return counter;
}

console.log(countBs("BBC"));
