/**
 * Represents the different types of damage that can be inflicted.
 * 
 * These are the standard damage types encountered in gameplay.
 */
export type DamageTypeNames =
  | 'Acid'
  | 'Bludgeoning'
  | 'Cold'
  | 'Fire'
  | 'Force'
  | 'Lightning'
  | 'Necrotic'
  | 'Piercing'
  | 'Poison'
  | 'Psychic'
  | 'Radiant'
  | 'Slashing'
  | 'Thunder';

/**
 * Maps each DamageTypeName to a corresponding emoji.
 * 
 * Use this map to associate a visual representation with each damage type.
 */
export interface DamageTypeEmojiMap {
  Acid: '🧪';
  Bludgeoning: '🔨';
  Cold: '🧊';
  Fire: '🔥';
  Force: '💥';
  Lightning: '🌩️';
  Necrotic: '💀';
  Piercing: '🗡️';
  Poison: '🐍';
  Psychic: '🧠';
  Radiant: '🌟';
  Slashing: '🪓';
  Thunder: '🔊';
}

/**
 * Represents a damage type with its name and associated emoji.
 * 
 * This interface combines the name of the damage type with its corresponding visual representation.
 */
export interface DamageType {
  /** The name of the damage type */
  name: DamageTypeNames;
  /** The emoji associated with the damage type */
  emoji: DamageTypeEmojiMap[DamageTypeNames];
}

/**
 * Represents the size categories of creatures.
 * 
 * These sizes are used to classify creatures based on their physical dimensions.
 */
export type Size = 'Tiny' | 'Small' | 'Medium' | 'Huge' | 'Gargantuan';

/**
 * Represents the various conditions that can affect a creature.
 * 
 * Conditions are status effects that can impose various penalties or restrictions on creatures.
 */
export type Condition =
  | 'Blinded'
  | 'Charmed'
  | 'Deafened'
  | 'Disease'
  | 'Exhaustion'
  | 'Frightened'
  | 'Grappled'
  | 'Incapacitated'
  | 'Invisible'
  | 'Paralyzed'
  | 'Petrified'
  | 'Poisoned'
  | 'Prone'
  | 'Restrained'
  | 'Stunned'
  | 'Unconscious';
