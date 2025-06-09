class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set plus(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
  }

  set minus(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

let vector = new Vector(4, 2);
console.log(vector); // Vector: { x: 4, y: 4 }
console.log(`length: ${vector.length}`); // length: 4.47213595499958
vector.plus = new Vector(2, 4);
console.log(vector); // Vector: { x: 6, y: 6 }
console.log(`length: ${vector.length}`); // length: 8.48528137423857
console.log(vector.toString()); // (6, 6)

let newVector = new Vector(vector.x, vector.y);
console.log(newVector); // Vector { x: 6, y: 6 }
console.log(`length: ${newVector.length}`); // length: 8.48528137423857
newVector.plus = new Vector(3, 7);
console.log(newVector); // Vector { x: 9, y: 13 }
console.log(`length: ${newVector.length}`); // length: 15.811388300841896
console.log(newVector.toString()); // (9, 13)
