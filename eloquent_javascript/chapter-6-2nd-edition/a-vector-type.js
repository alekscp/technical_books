function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  sumOnX = this.x + vector.x;
  sumOnY = this.y + vector.y;

  return new Vector(sumOnX, sumOnY);
}

Vector.prototype.minus = function(vector) {
  diffOnX = this.x - vector.x;
  diffOnY = this.y - vector.y;

  return new Vector(diffOnX, diffOnY);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3))); // → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // → 5
