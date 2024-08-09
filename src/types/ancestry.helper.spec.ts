import { describe, it, expect } from 'vitest';
import { getSourceByAncestry } from './ancestry.helper';
import { AncestryNames } from './ancestry.type';
import { Source } from './source.type';

describe('getSourceByAncestry', () => {
  it('should return the correct source for a valid AncestryName (PHB)', () => {
    const ancestry: AncestryNames = 'Elf';
    const expectedSource: Source = { id: 'PHB', name: "Player's Handbook" };

    const result = getSourceByAncestry(ancestry);

    expect(result).toEqual(expectedSource);
  });

  it('should return the correct source for another valid AncestryName (MotM)', () => {
    const ancestry: AncestryNames = 'Githyanki';
    const expectedSource: Source = { id: 'MotM', name: 'Mordenkainen Presents: Monsters of the Multiverse' };

    const result = getSourceByAncestry(ancestry);

    expect(result).toEqual(expectedSource);
  });

  it('should throw an error if the AncestryName does not exist', () => {
    const invalidAncestry = 'InvalidAncestry' as AncestryNames;

    expect(() => getSourceByAncestry(invalidAncestry)).toThrowError(`Invalid AncestryName: ${invalidAncestry}`);
  });

  it('should handle ancestries from other sources (SAiS)', () => {
    const ancestry: AncestryNames = 'Giff';
    const expectedSource: Source = { id: 'SAiS', name: 'Spelljammer: Adventures in Space' };

    const result = getSourceByAncestry(ancestry);

    expect(result).toEqual(expectedSource);
  });

  it('should handle ancestries from other sources (SotDQ)', () => {
    const ancestry: AncestryNames = 'Kender';
    const expectedSource: Source = { id: 'SotDQ', name: 'Dragonlance: Shadow of the Dragon Queen' };

    const result = getSourceByAncestry(ancestry);

    expect(result).toEqual(expectedSource);
  });
});
