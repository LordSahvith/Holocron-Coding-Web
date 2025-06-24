import { expect } from 'chai';
import { isAnagram } from './anagram';

describe('isAnagram - basic functionality', () => {
  it('returns false if either or both arguments are emtpy strings', () => {
    const expected = false;
    const actual =
      isAnagram('', '') && isAnagram('', 'test') && isAnagram('test', '');

    expect(actual).equal(expected);
  });

  it("returns false if both strings aren't the same length", () => {
    const expected = false;
    const actual = isAnagram('below', 'elbows');

    expect(actual).equal(expected);
  });

  it('returns true if both strings have exactly the same letters and letter counts', () => {
    const expected = true;
    const actual = isAnagram('below', 'elbow') && isAnagram('listen', 'silent');

    expect(actual).equal(expected);
  });

  it('returns true even if the strings has spaces at the beginning or end of string', () => {
    const expected = true;
    const actual =
      isAnagram('below ', ' elbow') && isAnagram(' listen ', 'silent ');

    expect(actual).equal(expected);
  });

  it('returns true even if either the strings has spaces anywhere in string', () => {
    const expected = true;
    const actual =
      isAnagram('conversation', 'voices rant on') &&
      isAnagram('racecar', 'car race');

    expect(actual).equal(expected);
  });

  it('returns true regardless of case (lower or upper)', () => {
    const expected = true;
    const actual =
      isAnagram('STATE', 'taste') &&
      isAnagram('conversation', 'Voices rant on') &&
      isAnagram('racecar', 'Car Race');

    expect(actual).equal(expected);
  });
});
