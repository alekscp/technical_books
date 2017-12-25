function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, chr) {
  var counter = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == chr)
      counter += 1;
  }

  return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
