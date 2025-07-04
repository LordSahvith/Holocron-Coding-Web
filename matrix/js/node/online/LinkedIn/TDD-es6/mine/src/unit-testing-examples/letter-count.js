// 'cat' -> { c: 1, a: 1, t: 1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1 }

export const getLetterCount = string => {
  return string.split('').reduce(
    (acc, letter) => ({
      ...acc,
      [letter]: acc[letter] ? acc[letter] + 1 : 1,
    }),
    {}
  );
};
