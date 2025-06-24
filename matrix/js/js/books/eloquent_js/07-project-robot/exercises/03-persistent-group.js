class PGroup {
  #members = [];

  constructor(members) {
    this.#members = members;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.#members.concat(value));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.#members.filter(item => item !== value));
  }

  has(value) {
    return this.#members.includes(value);
  }

  static empty = new PGroup([]);
}

let group1 = PGroup.empty.add(1);
let group2 = group1.add(2);
let group3 = group2.delete(1);

console.log(group2.has(2)); // true
console.log(group1.has(2)); // false
console.log(group3.has(1)); // false
