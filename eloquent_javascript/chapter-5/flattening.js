var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce( (prev, curr) => prev.concat(curr) ));
