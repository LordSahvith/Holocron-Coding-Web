let originalArray = [1, 2, [3, 4], 5, [[6, [7, 8]]]];

/**
 * Flatten an array of nested arrays into a single array
 * @param {array} array - the array to flatten
 * @returns {array} result - the flattened array
 * @example [1, 2, 3, 4, 5, 6, 7, 8]
 */
function flattenWithSpread(array) {
  let result = [];

  for (let element of array) {
    result.push(
      ...(Array.isArray(element)
        ? flattenWithSpread(element) // recursive call to flatten nested arrays
        : [element]) // destructure and push non-array elements directly
    );
  }

  return result; // return the flattened array
}

/**
 * Flatten an array of nested arrays into a single array
 * @param {array} array - the array to flatten
 * @returns {array} - the flattened array
 * @example [1, 2, 3, 4, 5, 6, 7, 8]
 */
function flattenWithReduce(array) {
  return array.reduce((newArray, arrayItem) => {
    return Array.isArray(arrayItem)
      ? newArray.concat(flattenWithReduce(arrayItem)) // recursive call to flatten nested arrays
      : newArray.concat(arrayItem); // push non-array elements directly
  }, []);
}

// Example usage:
console.log(flattenWithSpread(originalArray)); // [1, 2, 3, 4, 5, 6]

console.log(
  originalArray.reduce((newArray, arrayItem) => {
    return newArray.concat(
      Array.isArray(arrayItem)
        ? flattenWithSpread(arrayItem) // flatten nested arrays
        : arrayItem // push non-array elements directly
    );
  }, [])
); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(
  originalArray.reduce((newArray, arrayItem) => {
    // flatten nested arrays or push non-array elements directly
    return newArray.concat(
      Array.isArray(arrayItem)
        ? flattenWithReduce(arrayItem) // flatten nested arrays
        : arrayItem // push non-array elements directly
    );
  }, [])
); // [1, 2, 3, 4, 5, 6, 7, 8]
