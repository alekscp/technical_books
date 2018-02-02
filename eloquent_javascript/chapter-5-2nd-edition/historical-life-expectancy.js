const ancestry = JSON.parse(require("./ancestry.js"));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function getCentury(person) {
  return Math.ceil(person.died / 100);
}

function getAge(person) {
  return person.died - person.born;
}

function buildList() {
  var obj = {};

  for (var i = 0; i < ancestry.length; i++) {
    var person = ancestry[i];
    var personCentury = getCentury(person);

    if (obj.hasOwnProperty(personCentury)) {
      obj[personCentury].push(getAge(person));
    } else {
      obj[personCentury] = [getAge(person)];
    }
  }

  return obj;
}

function lifeExpectancyPerCentury() {
  var list = buildList();

  for (elem in list) {
    list[elem] = average(list[elem]);
  }

  return list;
}

console.log(lifeExpectancyPerCentury());
