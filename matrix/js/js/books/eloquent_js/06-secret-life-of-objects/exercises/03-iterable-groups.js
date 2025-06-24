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
    let group = new Group();

    for (let value of values) {
      group.add(value);
    }

    return group;
  }

  toString() {
    return `Group(${this.#members.length}) { ${this.#members.join(', ')} }`;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position === this.#members.length) {
      return { done: true };
    } else {
      let result = {
        value: this.#members[this.#position],
        done: false,
      };
      this.#position++;
      return result;
    }
  }
}

let group = Group.from([1, 2]);
for (let item of group) {
  console.log(item);
}
