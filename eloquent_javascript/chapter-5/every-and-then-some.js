function some(arr, func) {
  var match = false;

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      match = true;
      break;
    }
  }

  return match;
}

function every(arr, func) {
  var match = true;

  for (var i= 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      match = false;
      break;
    }
  }

  return match;
}

console.log(every([NaN, NaN, NaN], isNaN)); // → true
console.log(every([NaN, NaN, 4], isNaN)); // → false
console.log(some([NaN, 3, 4], isNaN)); // → true
console.log(some([2, 3, 4], isNaN)); // → false
