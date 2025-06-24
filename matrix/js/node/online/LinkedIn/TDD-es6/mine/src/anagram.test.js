import { expect } from 'chai';
import { isAnagram } from './anagram';

describe('isAnagram - basic functionality', () => {
  it('returns false if either string has extra letters', () => {
    const expected = false;
    const actual = isAnagram('below', 'elbows');

    expect(actual).to.equal(expected);
  });

  it('returns true if both strings have exactly the same letters and letter counts', () => {
    const expected = true;
    const actual = isAnagram('below', 'elbow') && isAnagram('listen', 'silent');

    expect(actual).to.equal(expected);
  });

  it('returns true even if either the strings has spaces anywhere in string', () => {
    const expected = true;
    const actual =
      isAnagram('conversation', 'voices rant on') &&
      isAnagram('racecar', 'car race') &&
      isAnagram('below ', ' elbow') &&
      isAnagram(' listen ', 'silent ');

    expect(actual).to.equal(expected);
  });

  it('returns true regardless of case (lower or upper)', () => {
    const expected = true;
    const actual =
      isAnagram('STATE', 'taste') &&
      isAnagram('conversation', 'Voices rant on') &&
      isAnagram('racecar', 'Car Race');

    expect(actual).to.equal(expected);
  });
});
