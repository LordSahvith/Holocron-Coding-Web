import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  if (!string1 || !string2) return false;

  if (string1.length !== string2.length) return false;
};
