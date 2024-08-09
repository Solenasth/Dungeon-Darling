/**
 * Represents the names of different sources.
 * 
 * These are the official books and materials from which the game content is derived.
 */
  export type SourceName =
  | "Player's Handbook"
  | 'Mordenkainen Presents: Monsters of the Multiverse'
  | 'Dragonlance: Shadow of the Dragon Queen'
  | 'Spelljammer: Adventures in Space'
  | 'Strixhaven: A Curriculum of Chaos'
  | 'Van Richten’s Guide to Ravenloft'
  | 'Mythic Odysseys of Theros'
  | 'Eberron: Rising from the Last War'
  | 'Acquisitions Incorporated'
  | 'Guildmasters’ Guide to Ravnica'
  | "Sword Coast Adventurer's Guide"
  | 'Locathah Rising'
  | 'One Grung Above'
  | 'Book of Ebon Tides '
  | 'Grim Hollow: Player Pack '
  | 'Humblewood Campaign Setting ';

/**
 * Represents the unique identifier for each source.
 * 
 * The identifiers are abbreviated versions of the source names.
 */
  export type SourceID =
  | 'PHB'
  | 'MotM'
  | 'SotDQ'
  | 'SAiS'
  | 'SACoC'
  | 'VRGtR'
  | 'MOoT'
  | 'ERftLW'
  | 'AI'
  | 'GGtR'
  | 'SCAG'
  | 'LR'
  | 'OGA'
  | 'BoET'
  | 'GHPP'
  | 'HCS';

/**
 * Maps each SourceID to its corresponding SourceName.
 */
export const SourceMap: Record<SourceID, SourceName> = {
  PHB: "Player's Handbook",
  MotM: 'Mordenkainen Presents: Monsters of the Multiverse',
  SotDQ: 'Dragonlance: Shadow of the Dragon Queen',
  SAiS: 'Spelljammer: Adventures in Space',
  SACoC: 'Strixhaven: A Curriculum of Chaos',
  VRGtR: 'Van Richten’s Guide to Ravenloft',
  MOoT: 'Mythic Odysseys of Theros',
  ERftLW: 'Eberron: Rising from the Last War',
  AI: 'Acquisitions Incorporated',
  GGtR: 'Guildmasters’ Guide to Ravnica',
  SCAG: "Sword Coast Adventurer's Guide",
  LR: 'Locathah Rising',
  OGA: 'One Grung Above',
  BoET: 'Book of Ebon Tides ',
  GHPP: 'Grim Hollow: Player Pack ',
  HCS: 'Humblewood Campaign Setting ',
};

/**
 * Represents a source with its name and identifier.
 */
export interface Source {
    /** The unique identifier for the source */
  id: SourceID;
  /** The full name of the source */
  name: SourceName;
}

