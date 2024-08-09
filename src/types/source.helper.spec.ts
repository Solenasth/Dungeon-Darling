import { describe, it, expect } from 'vitest';
import { getSourceByID } from './source.helper';
import { SourceID, Source } from './source.type';


describe('getSourceByID', () => {
  it('should return the correct source for a valid SourceID', () => {
    const id: SourceID = 'PHB';
    const expectedSource: Source = {
      id: 'PHB',
      name: "Player's Handbook",
    };

    const result = getSourceByID(id);

    expect(result).toEqual(expectedSource);
  });

  it('should return the correct source name for another valid SourceID', () => {
    const id: SourceID = 'MotM';
    const expectedSource: Source = {
      id: 'MotM',
      name: 'Mordenkainen Presents: Monsters of the Multiverse',
    };

    const result = getSourceByID(id);

    expect(result).toEqual(expectedSource);
  });

  it('should throw an error if the SourceID does not exist in SourceMap', () => {
    const invalidID = 'INVALID' as SourceID; // Casting to bypass TypeScript error for test purposes

    expect(() => getSourceByID(invalidID)).toThrowError(`Invalid SourceID: ${invalidID}`);
  });
});
