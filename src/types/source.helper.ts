import { Source, SourceID, SourceMap } from './source.type';

/**
 * Retrieves a Source object by its ID.
 *
 * @param {SourceID} id - The unique identifier of the source.
 * @returns {Source} The corresponding Source object with name and ID.
 * @throws Will throw an error if the SourceID is invalid.
 * @example const exampleSource = getSourceByID('PHB');
 * console.log(exampleSource); // { id: 'PHB', name: "Player's Handbook" }
 */
export function getSourceByID(id: SourceID): Source {
  const name = SourceMap[id];

  if (!name) {
    throw new Error(`Invalid SourceID: ${id}`);
  }

  return {
    id,
    name,
  };
}
