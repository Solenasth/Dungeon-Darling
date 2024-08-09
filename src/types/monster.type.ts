import { AncestryNames } from './ancestry.type';
import { Condition, DamageType, Size } from './generic.type';

/**
 * Represents the various creature types found in the game.
 *
 * Each creature type categorizes a group of monsters with similar characteristics.
 */
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

/**
 * Maps each CreatureTypeName to a corresponding emoji.
 *
 * The emoji serves as a quick visual reference for the creature type.
 */
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

/**
 * Represents a creature type with its name and associated emoji.
 *
 * This interface combines the name of the creature type with its corresponding visual representation.
 */
export interface CreatureType {
  /** The name of the creature type */
  name: CreatureTypeName;
  /** The emoji associated with the creature type */
  emoji: CreatureTypeEmojiMap[CreatureTypeName];
}

/**
 * Represents the damage modifiers a creature has.
 *
 * This includes resistances, immunities, and vulnerabilities to various damage types.
 */
interface DamageModifiers {
  /** The damage types this creature is resistant to */
  resistance: DamageType[];
  /** The damage types this creature is immune to */
  immunity: DamageType[];
  /** The damage types this creature is vulnerable to */
  vulnerability: DamageType[];
}

/**
 * Represents a creature in the game, including its type, size, and other attributes.
 */
export interface Creature {
  /** The type of creature, including its name and emoji */
  creatureType: CreatureType;
  /** The damage modifiers this creature has, including resistances, immunities, and vulnerabilities */
  damageModifiers: DamageModifiers;
  /** The size category of the creature */
  creatureSize: Size;
  /** The conditions this creature is immune to */
  conditionImmunity: Condition[];
  /** The subtype of the creature,
   * tipically an ancestry for humanoids. species or subtype of creature. or none */
  subtype?: AncestryNames | undefined;
}
