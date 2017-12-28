function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var list = {value: arr[i], rest: list || null }
  }

  return list
}

function listToArray(list) {
  arr = [];

  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
