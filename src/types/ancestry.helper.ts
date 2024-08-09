import { AncestryNames, AncestrySourceMap } from "./ancestry.type";
import { Source } from "./source.type";

/**
 * Retrieves the Source object associated with a specific AncestryName.
 *
 * @param {AncestryNames} ancestry - The name of the ancestry.
 * @returns {Source} The corresponding Source object with name and ID.
 * @throws Will throw an error if the AncestryName is invalid.
 */
export function getSourceByAncestry(ancestry: AncestryNames): Source {
  const source = AncestrySourceMap[ancestry];
  
  if (!source) {
    throw new Error(`Invalid AncestryName: ${ancestry}`);
  }

  return source;
}
