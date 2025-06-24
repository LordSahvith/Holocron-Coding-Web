import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  if (!string1 || !string2) return false;

  const firstWordCount = getLetterCount(string1.trim());
  const secondWordCount = getLetterCount(string2.trim());

  return Object.keys(firstWordCount).length ===
    Object.keys(secondWordCount).length &&
    Object.keys(firstWordCount).every(
      letter => firstWordCount[letter] === secondWordCount[letter]
    )
    ? true
    : false;
};
