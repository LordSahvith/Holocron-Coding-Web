import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  const firstWordLetters = getLetterCount(
    string1.toLowerCase().replace(/\s/g, '')
  );
  const secondWordLetters = getLetterCount(
    string2.toLowerCase().replace(/\s/g, '')
  );

  return isEqual(firstWordLetters, secondWordLetters);
};
