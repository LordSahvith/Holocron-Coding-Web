function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a != "object" || a == null ||
      typeof b != "object" || b == null) {
    return false;
  }

  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  
  return true;
}

// Example usage:
let obj1 = { name: "Savith", age: 33, details: { city: "Dromound Kass" } };
let obj2 = obj1; // Same reference
let obj3 = { name: "Savith", age: 30, details: { city: "Korriban" } };
console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj1, null)); // false
console.log(deepEqual(obj1, { name: "Savith", age: 33 })); // false
