
export type CreatureTypeName =
    | "Aberration"
    | "Beast"
    | "Celestial"
    | "Construct"
    | "Dragon"
    | "Elemental"
    | "Fey"
    | "Fiend"
    | "Giant"
    | "Humanoid"
    | "Monstrosity"
    | "Ooze"
    | "Plant"
    | "Undead"

export type CreatureTypeEmojiMap = {
    Aberration: "👹"
    Beast: "🐾"
    Celestial: "🌟"
    Construct: "🤖"
    Dragon: "🐉"
    Elemental: "✨"
    Fey: "🧚"
    Fiend: "😈"
    Giant: "🦶";
    Humanoid: "🧑"
    Monstrosity: "👾"
    Ooze: "🪼"
    Plant: "🌿";
    Undead: "💀"
} 
export type CreatureType = {
    name: CreatureTypeName
    emoji: CreatureTypeEmojiMap[CreatureTypeName]
}