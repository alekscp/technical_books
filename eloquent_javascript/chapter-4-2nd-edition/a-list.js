function arrayToList(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var list = prepend(arr[i], list);
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

function prepend(elem, list) {
  if (list == null) {
    return {value: elem, rest: null};
  } else {
    return {value: elem, rest: list};
  }
}

function nth(list, num) {
  if (num == 0) {
    return list.value;
  } else {
    for (var node = list; node; node = node.rest) {
      return nth(node, num - 1);
    }
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
