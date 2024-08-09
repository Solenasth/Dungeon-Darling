export type CreatureTypeName =
  | 'Aberration'
  | 'Beast'
  | 'Celestial'
  | 'Construct'
  | 'Dragon'
  | 'Elemental'
  | 'Fey'
  | 'Fiend'
  | 'Giant'
  | 'Humanoid'
  | 'Monstrosity'
  | 'Ooze'
  | 'Plant'
  | 'Undead';

export interface CreatureTypeEmojiMap {
  Aberration: '👹';
  Beast: '🐾';
  Celestial: '🌟';
  Construct: '🤖';
  Dragon: '🐉';
  Elemental: '✨';
  Fey: '🧚';
  Fiend: '😈';
  Giant: '🦶';
  Humanoid: '🧑';
  Monstrosity: '👾';
  Ooze: '🪼';
  Plant: '🌿';
  Undead: '💀';
}

export interface CreatureType {
  name: CreatureTypeName;
  emoji: CreatureTypeEmojiMap[CreatureTypeName];
}
