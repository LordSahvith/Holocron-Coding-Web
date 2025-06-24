import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  if (!string1 || !string2) return false;

  const firstWordCount = getLetterCount(
    string1.toLowerCase().replace(/\s/g, '')
  );
  const secondWordCount = getLetterCount(
    string2.toLowerCase().replace(/\s/g, '')
  );

  return Object.keys(firstWordCount).length ===
    Object.keys(secondWordCount).length &&
    Object.keys(firstWordCount).every(
      letter => firstWordCount[letter] === secondWordCount[letter]
    )
    ? true
    : false;
};
