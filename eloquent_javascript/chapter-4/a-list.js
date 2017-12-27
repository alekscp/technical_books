function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var list = {value: arr[i], rest: list || null }
  }

  return list
}

console.log(arrayToList([10, 20]));
