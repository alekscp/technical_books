const ancestry = JSON.parse(require("./ancestry.js"));

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiffs = [];
ancestry.forEach(function(person) {
  var mother = byName[person.mother];

  if (mother != undefined) {
    ageDiffs.push(byName[person.name].born - mother.born);
  }
});

console.log(average(ageDiffs));
