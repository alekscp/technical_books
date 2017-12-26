function reverseArray(arr) {
  arrInitialLength = arr.length;
  newArr = [];

  for (var i = 0; i < arrInitialLength; i++) {
    newArr[i] = arr.pop();
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  arrHalfLength = Math.floor(arr.length / 2)

  for (var i = 0; i < arrHalfLength; i++) {
    lastElemToSwap = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = lastElemToSwap;
  }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
