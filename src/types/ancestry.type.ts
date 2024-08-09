import { Source, SourceMap } from './source.type';

/**
 * Represents the various ancestry names found in the game.
 * 
 * Each ancestry type categorizes a group of creatures with similar origins or characteristics.
 */
export type AncestryNames = 
// PHB
  | 'Dragonborn'
  | 'Dwarf'
  | 'Elf'
  | 'Gnome'
  | 'Half-Elf'
  | 'Halfling'
  | 'Half-Orc'
  | 'Human'
  | 'Tiefling'
  // MotM
  | 'Aarakocra'
  | 'Aasimar'
  | 'Air Genasi'
  | 'Bugbear'
  | 'Centaur'
  | 'Changeling'
  | 'Deep Gnome (Svirfneblin)'
  | 'Earth Genasi'
  | 'Eladrin'
  | 'Fairy'
  | 'Firbolg'
  | 'Fire Genasi'
  | 'Githyanki'
  | 'Githzerai'
  | 'Goblin'
  | 'Goliath'
  | 'Harengon'
  | 'Hobgoblin'
  | 'Kenku'
  | 'Kobold'
  | 'Lizardfolk'
  | 'Minotaur'
  | 'Orc'
  | 'Satyr'
  | 'Sea Elf'
  | 'Shadar-kai'
  | 'Shifter'
  | 'Tabaxi'
  | 'Tortle'
  | 'Triton'
  | 'Water Genasi'
  | 'Yuan-ti' 
  // StoDQ
  | 'Kender'
  // SAiS
  | 'Astral Elf'
  | 'Autognome'
  | 'Giff' 
  | 'Hadozee' 
  | 'Plasmoid' 
  | 'Thri-kreen' 
  // SACoC
  | 'Owlin' 
  // VRGtR
  | 'Dhampir' 
  | 'Hexblood' 
  | 'Reborn' 
  // MOoT
  | 'Leonin' 
  // ERftLW
  | 'Kalashtar' 
  | 'Warforged' 
  // AI
  | 'Verdan' 
  // GGtR
  | 'Loxodon' 
  | 'Simic Hybrid' 
  | 'Vedalken' 
  // SCAG
  | 'Feral Tiefling'
  // LR 
  | 'Locathah' 
  // OGA
  | 'Grung' 
  // BoET
  | 'Bearfolk' 
  | 'Darakhul' 
  | 'Erina' 
  | 'Quickstep' 
  | 'Ratatosk' 
  | 'Ravenfolk' 
  | 'Satarre' 
  | 'Shade' 
  | 'Shadow Goblin' 
  | 'Umbral Human' 
  // GHPP
  | 'The Disembodied' 
  | 'Wechseldkind' 
  // HCS
  | 'Cervan' 
  | 'Corvus' 
  | 'Gallus' 
  | 'Hedge' 
  | 'Jerbeen' 
  | 'Luma' 
  | 'Mapach' 
  | 'Raptor' 
  | 'Strig' 
  | 'Vulpin'; 

/**
 * Maps each AncestryName to its corresponding Source object.
 * 
 * This map helps track where each ancestry is referenced from.
 */
export const AncestrySourceMap: Record<AncestryNames, Source> = {
  // PHB
  'Dragonborn': { id: 'PHB', name: SourceMap.PHB },
  'Dwarf': { id: 'PHB', name: SourceMap.PHB },
  'Elf': { id: 'PHB', name: SourceMap.PHB },
  'Gnome': { id: 'PHB', name: SourceMap.PHB },
  'Half-Elf': { id: 'PHB', name: SourceMap.PHB },
  'Halfling': { id: 'PHB', name: SourceMap.PHB },
  'Half-Orc': { id: 'PHB', name: SourceMap.PHB },
  'Human': { id: 'PHB', name: SourceMap.PHB },
  'Tiefling': { id: 'PHB', name: SourceMap.PHB },
  
  // MotM
  'Aarakocra': { id: 'MotM', name: SourceMap.MotM },
  'Aasimar': { id: 'MotM', name: SourceMap.MotM },
  'Air Genasi': { id: 'MotM', name: SourceMap.MotM },
  'Bugbear': { id: 'MotM', name: SourceMap.MotM },
  'Centaur': { id: 'MotM', name: SourceMap.MotM },
  'Changeling': { id: 'MotM', name: SourceMap.MotM },
  'Deep Gnome (Svirfneblin)': { id: 'MotM', name: SourceMap.MotM },
  'Earth Genasi': { id: 'MotM', name: SourceMap.MotM },
  'Eladrin': { id: 'MotM', name: SourceMap.MotM },
  'Fairy': { id: 'MotM', name: SourceMap.MotM },
  'Firbolg': { id: 'MotM', name: SourceMap.MotM },
  'Fire Genasi': { id: 'MotM', name: SourceMap.MotM },
  'Githyanki': { id: 'MotM', name: SourceMap.MotM },
  'Githzerai': { id: 'MotM', name: SourceMap.MotM },
  'Goblin': { id: 'MotM', name: SourceMap.MotM },
  'Goliath': { id: 'MotM', name: SourceMap.MotM },
  'Harengon': { id: 'MotM', name: SourceMap.MotM },
  'Hobgoblin': { id: 'MotM', name: SourceMap.MotM },
  'Kenku': { id: 'MotM', name: SourceMap.MotM },
  'Kobold': { id: 'MotM', name: SourceMap.MotM },
  'Lizardfolk': { id: 'MotM', name: SourceMap.MotM },
  'Minotaur': { id: 'MotM', name: SourceMap.MotM },
  'Orc': { id: 'MotM', name: SourceMap.MotM },
  'Satyr': { id: 'MotM', name: SourceMap.MotM },
  'Sea Elf': { id: 'MotM', name: SourceMap.MotM },
  'Shadar-kai': { id: 'MotM', name: SourceMap.MotM },
  'Shifter': { id: 'MotM', name: SourceMap.MotM },
  'Tabaxi': { id: 'MotM', name: SourceMap.MotM },
  'Tortle': { id: 'MotM', name: SourceMap.MotM },
  'Triton': { id: 'MotM', name: SourceMap.MotM },
  'Water Genasi': { id: 'MotM', name: SourceMap.MotM },
  'Yuan-ti': { id: 'MotM', name: SourceMap.MotM },
  
  // StoDQ
  'Kender': { id: 'SotDQ', name: SourceMap.SotDQ },
  
  // SAiS
  'Astral Elf': { id: 'SAiS', name: SourceMap.SAiS },
  'Autognome': { id: 'SAiS', name: SourceMap.SAiS },
  'Giff': { id: 'SAiS', name: SourceMap.SAiS },
  'Hadozee': { id: 'SAiS', name: SourceMap.SAiS },
  'Plasmoid': { id: 'SAiS', name: SourceMap.SAiS },
  'Thri-kreen': { id: 'SAiS', name: SourceMap.SAiS },
  
  // SACoC
  'Owlin': { id: 'SACoC', name: SourceMap.SACoC },
  
  // VRGtR
  'Dhampir': { id: 'VRGtR', name: SourceMap.VRGtR },
  'Hexblood': { id: 'VRGtR', name: SourceMap.VRGtR },
  'Reborn': { id: 'VRGtR', name: SourceMap.VRGtR },
  
  // MOoT
  'Leonin': { id: 'MOoT', name: SourceMap.MOoT },
  
  // ERftLW
  'Kalashtar': { id: 'ERftLW', name: SourceMap.ERftLW },
  'Warforged': { id: 'ERftLW', name: SourceMap.ERftLW },
  
  // AI
  'Verdan': { id: 'AI', name: SourceMap.AI },
  
  // GGtR
  'Loxodon': { id: 'GGtR', name: SourceMap.GGtR },
  'Simic Hybrid': { id: 'GGtR', name: SourceMap.GGtR },
  'Vedalken': { id: 'GGtR', name: SourceMap.GGtR },
  
  // SCAG
  'Feral Tiefling': { id: 'SCAG', name: SourceMap.SCAG },
  
  // LR
  'Locathah': { id: 'LR', name: SourceMap.LR },
  
  // OGA
  'Grung': { id: 'OGA', name: SourceMap.OGA },
  
  // BoET
  'Bearfolk': { id: 'BoET', name: SourceMap.BoET },
  'Darakhul': { id: 'BoET', name: SourceMap.BoET },
  'Erina': { id: 'BoET', name: SourceMap.BoET },
  'Quickstep': { id: 'BoET', name: SourceMap.BoET },
  'Ratatosk': { id: 'BoET', name: SourceMap.BoET },
  'Ravenfolk': { id: 'BoET', name: SourceMap.BoET },
  'Satarre': { id: 'BoET', name: SourceMap.BoET },
  'Shade': { id: 'BoET', name: SourceMap.BoET },
  'Shadow Goblin': { id: 'BoET', name: SourceMap.BoET },
  'Umbral Human': { id: 'BoET', name: SourceMap.BoET },
  
  // GHPP
  'The Disembodied': { id: 'GHPP', name: SourceMap.GHPP },
  'Wechseldkind': { id: 'GHPP', name: SourceMap.GHPP },
  
  // HCS
  'Cervan': { id: 'HCS', name: SourceMap.HCS },
  'Corvus': { id: 'HCS', name: SourceMap.HCS },
  'Gallus': { id: 'HCS', name: SourceMap.HCS },
  'Hedge': { id: 'HCS', name: SourceMap.HCS },
  'Jerbeen': { id: 'HCS', name: SourceMap.HCS },
  'Luma': { id: 'HCS', name: SourceMap.HCS },
  'Mapach': { id: 'HCS', name: SourceMap.HCS },
  'Raptor': { id: 'HCS', name: SourceMap.HCS },
  'Strig': { id: 'HCS', name: SourceMap.HCS },
  'Vulpin': { id: 'HCS', name: SourceMap.HCS },
};
