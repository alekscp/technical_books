function deepEqual(arg1, arg2) {
  if (areObjectsAndNotNull(arg1, arg2)) {
    if (comparison == false) {
      return false;
    }

    for (property in arg1) {
      if (propertiesCount(arg1[property]) != propertiesCount(arg2[property])) {
        return false;
      }

      var comparison = deepEqual(arg1[property], arg2[property]);
    }
  } else {
    return arg1 === arg2;
  }

  return comparison;
}

function areObjectsAndNotNull(arg1, arg2) {
  if ((typeof arg1 == 'object' && arg1 != null) && (typeof arg2 == 'object' && arg2 != null)) {
    return true;
  } else {
    return false;
  }
}

function propertiesCount(obj) {
  properties = [];

  for (elem in obj) {
    properties.push(elem);
  }

  return properties.length;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(1, 2));
console.log(deepEqual("hello", "hello"));
