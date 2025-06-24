class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(item => item !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(values) {
    let group = new Group;

    for (let value of values) {
      group.add(value);
    }

    return group;
  }

  toString() {
    return `Group(${this.#members.length}) { ${this.#members.join(', ')} }`;
  }
}

let group1 = new Group();
console.log(group1.has(1)); // false
group1.add(1);
console.log(group1.toString());
console.log(group1.has(1)); // true
group1.add(1);
group1.delete(1);
console.log(group1.has(1)); // false

let group2 = Group.from([1, 2]);
console.log(group2.toString());
console.log(group2.has(2)); // true
group2.add(2);
group2.delete(2);
console.log(group2.has(2)); // false

let set = new Set([1, 2]);
console.log(set);
