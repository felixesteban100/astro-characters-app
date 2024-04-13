export const CHARACTERS_PER_PAGE = 12;

export const ALLRACES = [
  { value: "All", name: "All races" },
  { value: "Human", name: "Human 🌎" },
  { value: "Metahuman", name: "Metahuman 🧬" },
  { value: "Alien", name: "Alien 👽" },
  { value: "Kryptonian", name: "Kryptonian 👽" },
  { value: "Symbiote", name: "Symbiote 👽" },
  { value: "Mutant", name: "Mutant 🧬" },
  { value: "Atlantean", name: "Atlantean 🐟" },
  { value: "Demon", name: "Demon 😈" },
  { value: "Android", name: "Android 🤖" },
  { value: "Cyborg", name: "Cyborg 🤖" },
  { value: "Animal", name: "Animal 🥦" },
  { value: "Zombie", name: "Zombie 🧟‍♂️🧟‍♀️" },
  { value: "Amazon", name: "Amazon 🥦" },
  { value: "Eternal", name: "Eternal 👽" },
  { value: "Inhuman", name: "Inhuman 🧬" },
  { value: "Asgardian", name: "Asgardian 👽" },
  { value: "Cosmic Entity", name: "Cosmic Entity 🌌" },
] /* as const; */

export const ALLALIGMENTS = [
  {
    value: "All",
    name: "All aligments",
  },
  {
    value: "good",
    name: "Hero 😃",
  },
  {
    value: "bad",
    name: "Villain 😡",
  },
  {
    value: "neutral",
    name: "Anti-hero 😐",
  },
] /* as const; */

export const ALLGENDERS = [
  {
    value: "both",
    name: "Both genders",
  },
  {
    value: "Female",
    name: "Female 🚺",
  },
  {
    value: "Male",
    name: "Male 🚹",
  },
] /* as const; */


export const ALLUNIVERSE = [
  { value: "All", name: "All universes" },
  { value: "Marvel Comics", name: "Marvel" },
  { value: "DC Comics", name: "DC" },
  { value: "Shueisha", name: "Shueisha" },
  { value: "Dark Horse Comics", name: "Dark Horse Comics" },
  { value: "George Lucas", name: "George Lucas" },
  { value: "SEGA", name: "SEGA" },
  { value: "IDW Publishing", name: "IDW Publishing" },
  { value: "Image Comics", name: "Image Comics" },
  { value: "Warner Bros", name: "Warner Bros" },
  { value: 'Super Sentai', name: 'Super Sentai' },
  // { value: "Angel", name: "Angel" },
  { value: "NBC - Heroes", name: "NBC - Heroes" },
  { value: "Tempest", name: "Tempest" },
  { value: "SyFy", name: "SyFy" },
  { value: "ABC Studios", name: "ABC Studios" },
  { value: "Icon Comics", name: "Icon Comics" },
  { value: "Universal Studios", name: "Universal Studios" },
  { value: "Gemini V", name: "Gemini V" },
  { value: "Star Trek", name: "Star Trek" },
  // { value: "Goliath", name: "Goliath" },
  // { value: "Deadpool", name: "Deadpool" },
  { value: "Wildstorm", name: "Wildstorm" },
  { value: "South Park", name: "South Park" },
  { value: "Sony Pictures", name: "Sony Pictures" },
  { value: "Vindicator II", name: "Vindicator II" },
  { value: "Titan Books", name: "Titan Books" },
  { value: "J. K. Rowling", name: "J. K. Rowling" },
  { value: "Microsoft", name: "Microsoft" },
  // { value: "She-Thing", name: "She-Thing" },
  { value: "Rebellion", name: "Rebellion" },
  { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
  { value: "Carolco Pictures", name: "Carolco Pictures" },
  { value: "ARK corporation", name: "ARK corporation" },
  { value: "Paramount Pictures", name: "Paramount Pictures" },
  { value: "-", name: "-" },
  // { value: null, name: "null" },
  { value: "Real people", name: "Real people" },

  //
] /* as const; */

export const SORT_BY_VALUES = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]

export const COMICS_DEFAULT = [
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
]

export const ALLPOWERS: {
  name: string;
  value: string;
  img?: string;
}[] = [
    {
      "value": "All",
      // "name": "All powers ✨"
      "name": "All powers",
    },
    {
      "value": "Absorption and Mimicry of Materials",
      "name": "Absorption and Mimicry of Materials 🔄"
    },
    {
      "value": "Accelerated Healing",
      "name": "Accelerated Healing"
    },
    {
      "value": "Acid Projection",
      "name": "Acid Projection"
    },
    {
      "value": "Acidic Blood",
      "name": "Acidic Blood"
    },
    {
      "value": "Acidic Touch",
      "name": "Acidic Touch"
    },
    {
      "value": "Acrobat",
      "name": "Acrobat"
    },
    {
      "value": "Acrobatics",
      "name": "Acrobatics 🤸"
    },
    {
      "value": "Adamantium Claws",
      "name": "Adamantium Claws"
    },
    {
      "value": "Adaptability",
      "name": "Adaptability 🔄"
    },
    {
      "value": "Adaptation",
      "name": "Adaptation 🔄"
    },
    {
      "value": "Adaptive Evolution",
      "name": "Adaptive Evolution"
    },
    {
      "value": "Adhesive Skin",
      "name": "Adhesive Skin"
    },
    {
      "value": "Advanced Alien Technology",
      "name": "Advanced Alien Technology 👽🛸"
    },
    {
      "value": "Advanced Endoskeleton",
      "name": "Advanced Endoskeleton"
    },
    {
      "value": "Advanced Technology",
      "name": "Advanced Technology 🛠️"
    },
    {
      "value": "Advanced Technology Suit",
      "name": "Advanced Technology Suit"
    },
    {
      "value": "Advanced Weaponry",
      "name": "Advanced Weaponry"
    },
    {
      "value": "Aerokinesis",
      "name": "Aerokinesis"
    },
    {
      "value": "Agility",
      "name": "Agility"
    },
    {
      "value": "Air Manipulation",
      "name": "Air Manipulation"
    },
    {
      "value": "Alchemy",
      "name": "Alchemy"
    },
    {
      "value": "Alien Physiology",
      "name": "Alien Physiology"
    },
    {
      "value": "Amphibious Physiology",
      "name": "Amphibious Physiology 🐸"
    },
    {
      "value": "Android Physiology",
      "name": "Android Physiology 🤖"
    },
    {
      "value": "Angel Physiology",
      "name": "Angel Physiology"
    },
    {
      "value": "Angelic Powers",
      "name": "Angelic Powers"
    },
    {
      "value": "Animal Communication",
      "name": "Animal Communication 🐾🗣️"
    },
    {
      "value": "Animal Instincts",
      "name": "Animal Instincts"
    },
    {
      "value": "Animal Mimicry",
      "name": "Animal Mimicry 🐾"
    },
    {
      "value": "Animalistic Agility",
      "name": "Animalistic Agility 🐾"
    },
    {
      "value": "Anti-Magic",
      "name": "Anti-Magic"
    },
    {
      "value": "Antibody Generation",
      "name": "Antibody Generation"
    },
    {
      "value": "Aquatic Adaptation",
      "name": "Aquatic Adaptation"
    },
    {
      "value": "Archaeology Knowledge",
      "name": "Archaeology Knowledge"
    },
    {
      "value": "Archery",
      "name": "Archery"
    },
    {
      "value": "Armor",
      "name": "Armor"
    },
    {
      "value": "Armored Suit",
      "name": "Armored Suit"
    },
    {
      "value": "Astral Projection",
      "name": "Astral Projection"
    },
    {
      "value": "Atlantean Physiology",
      "name": "Atlantean Physiology"
    },
    {
      "value": "Atmospheric Pressure Control",
      "name": "Atmospheric Pressure Control"
    },
    {
      "value": "Atomic Breath",
      "name": "Atomic Breath"
    },
    {
      "value": "Avarice Empowerment",
      "name": "Avarice Empowerment"
    },
    {
      "value": "Avian Physiology",
      "name": "Avian Physiology"
    },
    {
      "value": "Axe Proficiency",
      "name": "Axe Proficiency"
    },
    {
      "value": "Bio-Android Physiology",
      "name": "Bio-Android Physiology"
    },
    {
      "value": "Bio-Electric Blasts",
      "name": "Bio-Electric Blasts"
    },
    {
      "value": "Biological Constructs Creation",
      "name": "Biological Constructs Creation"
    },
    {
      "value": "Bionic Enhancements",
      "name": "Bionic Enhancements"
    },
    {
      "value": "Blade Proficiency",
      "name": "Blade Proficiency"
    },
    {
      "value": "Blaster Proficiency",
      "name": "Blaster Proficiency"
    },
    {
      "value": "Blood Demon Art",
      "name": "Blood Demon Art"
    },
    {
      "value": "Blue Lantern Ring Mastery",
      "name": "Blue Lantern Ring Mastery"
    },
    {
      "value": "Bo Staff Proficiency",
      "name": "Bo Staff Proficiency 🏹"
    },
    {
      "value": "Body Modification",
      "name": "Body Modification"
    },
    {
      "value": "Bone Projection",
      "name": "Bone Projection"
    },
    {
      "value": "Boomerang Proficiency",
      "name": "Boomerang Proficiency"
    },
    {
      "value": "Bounty Hunting Skills",
      "name": "Bounty Hunting Skills 🎯"
    },
    {
      "value": "Breaking the Fourth Wall",
      "name": "Breaking the Fourth Wall"
    },
    {
      "value": "Breath of Thunder Techniques",
      "name": "Breath of Thunder Techniques"
    },
    {
      "value": "Breath of Water Techniques",
      "name": "Breath of Water Techniques"
    },
    {
      "value": "Butterfly Mode",
      "name": "Butterfly Mode"
    },
    {
      "value": "Byakugan",
      "name": "Byakugan"
    },
    {
      "value": "Canary Cry",
      "name": "Canary Cry 🗣️"
    },
    {
      "value": "Carbonadium Tentacles",
      "name": "Carbonadium Tentacles"
    },
    {
      "value": "Chainsaw Devil Powers",
      "name": "Chainsaw Devil Powers"
    },
    {
      "value": "Chakra Absorption",
      "name": "Chakra Absorption"
    },
    {
      "value": "Chakra Control",
      "name": "Chakra Control"
    },
    {
      "value": "Chakra Manipulation",
      "name": "Chakra Manipulation"
    },
    {
      "value": "Chakra Sensing",
      "name": "Chakra Sensing"
    },
    {
      "value": "Chaos Control",
      "name": "Chaos Control"
    },
    {
      "value": "Chaos Magic",
      "name": "Chaos Magic"
    },
    {
      "value": "Chaos Spear",
      "name": "Chaos Spear"
    },
    {
      "value": "Charging Attack",
      "name": "Charging Attack"
    },
    {
      "value": "Chemical Weaponry",
      "name": "Chemical Weaponry"
    },
    {
      "value": "Chi Manipulation",
      "name": "Chi Manipulation"
    },
    {
      "value": "Chlorokinesis",
      "name": "Chlorokinesis"
    },
    {
      "value": "Chronokinesis",
      "name": "Chronokinesis"
    },
    {
      "value": "Chuck Norris",
      "name": "Chuck Norris"
    },
    {
      "value": "Claws",
      "name": "Claws 🔪"
    },
    {
      "value": "Clumsiness",
      "name": "Clumsiness"
    },
    {
      "value": "Cold Gun",
      "name": "Cold Gun"
    },
    {
      "value": "Cold Immunity",
      "name": "Cold Immunity"
    },
    {
      "value": "Combat Expertise",
      "name": "Combat Expertise"
    },
    {
      "value": "Combat Skills",
      "name": "Combat Skills"
    },
    {
      "value": "Combat Training",
      "name": "Combat Training"
    },
    {
      "value": "Computer Hacking",
      "name": "Computer Hacking"
    },
    {
      "value": "Concussive Blasts",
      "name": "Concussive Blasts 💥"
    },
    {
      "value": "Connection to the Green",
      "name": "Connection to the Green"
    },
    {
      "value": "Construct Creation",
      "name": "Construct Creation"
    },
    {
      "value": "Contortionist",
      "name": "Contortionist"
    },
    {
      "value": "Control over Bees",
      "name": "Control over Bees"
    },
    {
      "value": "Corruption Negation",
      "name": "Corruption Negation 🚫"
    },
    {
      "value": "Cosmic Awareness",
      "name": "Cosmic Awareness 🌌"
    },
    {
      "value": "Cosmic Being",
      "name": "Cosmic Being"
    },
    {
      "value": "Cosmic Control Rod",
      "name": "Cosmic Control Rod"
    },
    {
      "value": "Cosmic Energy Manipulation",
      "name": "Cosmic Energy Manipulation"
    },
    {
      "value": "Cosmic Fire Manipulation",
      "name": "Cosmic Fire Manipulation"
    },
    {
      "value": "Cosmic Power Absorption",
      "name": "Cosmic Power Absorption 💫⚡"
    },
    {
      "value": "Cosmic Power Manipulation",
      "name": "Cosmic Power Manipulation"
    },
    {
      "value": "Cosmic Staff Manipulation",
      "name": "Cosmic Staff Manipulation"
    },
    {
      "value": "Costumed Gadgets",
      "name": "Costumed Gadgets"
    },
    {
      "value": "Crime Boss",
      "name": "Crime Boss"
    },
    {
      "value": "Criminal Network",
      "name": "Criminal Network"
    },
    {
      "value": "Criminal Planning",
      "name": "Criminal Planning"
    },
    {
      "value": "Crocodile Physiology",
      "name": "Crocodile Physiology"
    },
    {
      "value": "Cryo-Suit",
      "name": "Cryo-Suit"
    },
    {
      "value": "Cryokinesis",
      "name": "Cryokinesis"
    },
    {
      "value": "Cursed Energy Manipulation",
      "name": "Cursed Energy Manipulation"
    },
    {
      "value": "Cybernetic Enhancements",
      "name": "Cybernetic Enhancements"
    },
    {
      "value": "Cybernetic Tail",
      "name": "Cybernetic Tail"
    },
    {
      "value": "Cyborg Physiology",
      "name": "Cyborg Physiology"
    },
    {
      "value": "Dark Dimension Connection",
      "name": "Dark Dimension Connection"
    },
    {
      "value": "Dark Dimension Lord",
      "name": "Dark Dimension Lord"
    },
    {
      "value": "Dark Elf Physiology",
      "name": "Dark Elf Physiology"
    },
    {
      "value": "Dark Magic",
      "name": "Dark Magic"
    },
    {
      "value": "Darkforce Constructs",
      "name": "Darkforce Constructs"
    },
    {
      "value": "Darkforce Manipulation",
      "name": "Darkforce Manipulation 🌑"
    },
    {
      "value": "Darkness Manipulation",
      "name": "Darkness Manipulation"
    },
    {
      "value": "Death Manipulation",
      "name": "Death Manipulation"
    },
    {
      "value": "Death Touch",
      "name": "Death Touch"
    },
    {
      "value": "Demon Physiology",
      "name": "Demon Physiology"
    },
    {
      "value": "Demon Powers",
      "name": "Demon Powers"
    },
    {
      "value": "Demon Summoning",
      "name": "Demon Summoning"
    },
    {
      "value": "Density Control",
      "name": "Density Control"
    },
    {
      "value": "Density Manipulation",
      "name": "Density Manipulation"
    },
    {
      "value": "Detective Skills",
      "name": "Detective Skills 🕵️‍♂️"
    },
    {
      "value": "Diamond Form",
      "name": "Diamond Form 💎"
    },
    {
      "value": "Dimensional Energy Manipulation",
      "name": "Dimensional Energy Manipulation"
    },
    {
      "value": "Dimensional Manipulation",
      "name": "Dimensional Manipulation 🌌"
    },
    {
      "value": "Dimensional Storage",
      "name": "Dimensional Storage"
    },
    {
      "value": "Dimensional Travel",
      "name": "Dimensional Travel 🌌"
    },
    {
      "value": "Diplomacy",
      "name": "Diplomacy"
    },
    {
      "value": "Disguise Mastery",
      "name": "Disguise Mastery"
    },
    {
      "value": "Divergent Fist",
      "name": "Divergent Fist"
    },
    {
      "value": "Divine Armor",
      "name": "Divine Armor"
    },
    {
      "value": "Divine Spirit",
      "name": "Divine Spirit"
    },
    {
      "value": "Divine Weaponry Proficiency",
      "name": "Divine Weaponry Proficiency"
    },
    {
      "value": "Dragon Dagger Mastery",
      "name": "Dragon Dagger Mastery"
    },
    {
      "value": "Dragon Physiology",
      "name": "Dragon Physiology 🐉"
    },
    {
      "value": "Dual Blade Proficiency",
      "name": "Dual Blade Proficiency"
    },
    {
      "value": "Dual Personality",
      "name": "Dual Personality"
    },
    {
      "value": "Dual Swordsmanship",
      "name": "Dual Swordsmanship"
    },
    {
      "value": "Duplication",
      "name": "Duplication"
    },
    {
      "value": "Durability",
      "name": "Durability 🛡️"
    },
    {
      "value": "Dynamic Entry",
      "name": "Dynamic Entry"
    },
    {
      "value": "Earth Manipulation",
      "name": "Earth Manipulation"
    },
    {
      "value": "Echolocation",
      "name": "Echolocation"
    },
    {
      "value": "Egg-Laying",
      "name": "Egg-Laying"
    },
    {
      "value": "Eggmobile Piloting",
      "name": "Eggmobile Piloting"
    },
    {
      "value": "Eight Gates",
      "name": "Eight Gates"
    },
    {
      "value": "Elasticity",
      "name": "Elasticity"
    },
    {
      "value": "Electricity Absorption",
      "name": "Electricity Absorption"
    },
    {
      "value": "Electricity Manipulation",
      "name": "Electricity Manipulation"
    },
    {
      "value": "Electrified Whips",
      "name": "Electrified Whips"
    },
    {
      "value": "Electrokinesis",
      "name": "Electrokinesis"
    },
    {
      "value": "Electromagnetic Manipulation",
      "name": "Electromagnetic Manipulation"
    },
    {
      "value": "Elemental Breath",
      "name": "Elemental Breath"
    },
    {
      "value": "Elemental Control",
      "name": "Elemental Control 🌍"
    },
    {
      "value": "Elemental Manipulation",
      "name": "Elemental Manipulation"
    },
    {
      "value": "Elemental Transmutation",
      "name": "Elemental Transmutation"
    },
    {
      "value": "Empathy",
      "name": "Empathy"
    },
    {
      "value": "Energy Absorption",
      "name": "Energy Absorption ⚡"
    },
    {
      "value": "Energy Beams",
      "name": "Energy Beams"
    },
    {
      "value": "Energy Blasts",
      "name": "Energy Blasts"
    },
    {
      "value": "Energy Constructs",
      "name": "Energy Constructs ⚡"
    },
    {
      "value": "Energy Manipulation",
      "name": "Energy Manipulation ⚡"
    },
    {
      "value": "Energy Projection",
      "name": "Energy Projection ⚡"
    },
    {
      "value": "Energy Spear Mastery",
      "name": "Energy Spear Mastery"
    },
    {
      "value": "Energy-Enhanced Sword",
      "name": "Energy-Enhanced Sword"
    },
    {
      "value": "Engineering Genius",
      "name": "Engineering Genius 🛠️🧠"
    },
    {
      "value": "Engineering Skills",
      "name": "Engineering Skills"
    },
    {
      "value": "Enhanced Accuracy",
      "name": "Enhanced Accuracy"
    },
    {
      "value": "Enhanced Agility",
      "name": "Enhanced Agility"
    },
    {
      "value": "Enhanced Balance",
      "name": "Enhanced Balance"
    },
    {
      "value": "Enhanced Botany Knowledge",
      "name": "Enhanced Botany Knowledge"
    },
    {
      "value": "Enhanced Durability",
      "name": "Enhanced Durability 🛡️💪"
    },
    {
      "value": "Enhanced Healing",
      "name": "Enhanced Healing"
    },
    {
      "value": "Enhanced Intelligence",
      "name": "Enhanced Intelligence"
    },
    {
      "value": "Enhanced Jumping",
      "name": "Enhanced Jumping"
    },
    {
      "value": "Enhanced Marksmanship",
      "name": "Enhanced Marksmanship"
    },
    {
      "value": "Enhanced Memory",
      "name": "Enhanced Memory"
    },
    {
      "value": "Enhanced Mental Capabilities",
      "name": "Enhanced Mental Capabilities"
    },
    {
      "value": "Enhanced Persuasion",
      "name": "Enhanced Persuasion"
    },
    {
      "value": "Enhanced Physiology",
      "name": "Enhanced Physiology"
    },
    {
      "value": "Enhanced Reflexes",
      "name": "Enhanced Reflexes ⚡"
    },
    {
      "value": "Enhanced Senses",
      "name": "Enhanced Senses 👀"
    },
    {
      "value": "Enhanced Speed",
      "name": "Enhanced Speed"
    },
    {
      "value": "Enhanced Stamina",
      "name": "Enhanced Stamina 💪"
    },
    {
      "value": "Enhanced Strength",
      "name": "Enhanced Strength 💪"
    },
    {
      "value": "Espionage Expert",
      "name": "Espionage Expert"
    },
    {
      "value": "Espionage Skills",
      "name": "Espionage Skills"
    },
    {
      "value": "Exceptional Combat Skills",
      "name": "Exceptional Combat Skills"
    },
    {
      "value": "Exoskeleton Suit",
      "name": "Exoskeleton Suit 🦾"
    },
    {
      "value": "Expert Acrobat",
      "name": "Expert Acrobat 🤸"
    },
    {
      "value": "Expert Archer",
      "name": "Expert Archer"
    },
    {
      "value": "Expert Assassin",
      "name": "Expert Assassin"
    },
    {
      "value": "Expert Chemist",
      "name": "Expert Chemist"
    },
    {
      "value": "Expert Combatant",
      "name": "Expert Combatant"
    },
    {
      "value": "Expert Engineer",
      "name": "Expert Engineer"
    },
    {
      "value": "Expert Hacker",
      "name": "Expert Hacker"
    },
    {
      "value": "Expert Marksman",
      "name": "Expert Marksman 🎯"
    },
    {
      "value": "Expert Marksmanship",
      "name": "Expert Marksmanship"
    },
    {
      "value": "Expert Pilot",
      "name": "Expert Pilot"
    },
    {
      "value": "Expert Pyrotechnician",
      "name": "Expert Pyrotechnician"
    },
    {
      "value": "Expert Spy",
      "name": "Expert Spy"
    },
    {
      "value": "Expert Strategist",
      "name": "Expert Strategist 🧠"
    },
    {
      "value": "Expert Swordsman",
      "name": "Expert Swordsman"
    },
    {
      "value": "Expert Tactician",
      "name": "Expert Tactician"
    },
    {
      "value": "Expert Thief",
      "name": "Expert Thief"
    },
    {
      "value": "Expertise in Blaming Others",
      "name": "Expertise in Blaming Others"
    },
    {
      "value": "Explosive Devices Proficiency",
      "name": "Explosive Devices Proficiency"
    },
    {
      "value": "Explosive Energy Manipulation",
      "name": "Explosive Energy Manipulation 💥⚡"
    },
    {
      "value": "Fear Manipulation",
      "name": "Fear Manipulation"
    },
    {
      "value": "Fear Toxins",
      "name": "Fear Toxins"
    },
    {
      "value": "Fighting Skills",
      "name": "Fighting Skills"
    },
    {
      "value": "Fire Breath",
      "name": "Fire Breath 🔥"
    },
    {
      "value": "Fire Immunity",
      "name": "Fire Immunity"
    },
    {
      "value": "Fire Manipulation",
      "name": "Fire Manipulation"
    },
    {
      "value": "Fire Release",
      "name": "Fire Release"
    },
    {
      "value": "Fireball Projection",
      "name": "Fireball Projection"
    },
    {
      "value": "Flame Breathing Techniques",
      "name": "Flame Breathing Techniques"
    },
    {
      "value": "Flame Manipulation",
      "name": "Flame Manipulation"
    },
    {
      "value": "Flaming Sword",
      "name": "Flaming Sword"
    },
    {
      "value": "Flexibility",
      "name": "Flexibility"
    },
    {
      "value": "Flight",
      "name": "Flight ✈️",
      "img": "https://i.pinimg.com/originals/0b/d9/cf/0bd9cf40c11c8d8280461a2ecf051bba.gif"
    },
    {
      "value": "Flora Colossus Physiology",
      "name": "Flora Colossus Physiology"
    },
    {
      "value": "Flying Thunder God Technique",
      "name": "Flying Thunder God Technique"
    },
    {
      "value": "Force Field Generation",
      "name": "Force Field Generation 🛡️"
    },
    {
      "value": "Force Fields",
      "name": "Force Fields"
    },
    {
      "value": "Force Powers",
      "name": "Force Powers"
    },
    {
      "value": "Force Sensitivity",
      "name": "Force Sensitivity"
    },
    {
      "value": "Freeze Vision",
      "name": "Freeze Vision"
    },
    {
      "value": "Frost Giant Physiology",
      "name": "Frost Giant Physiology"
    },
    {
      "value": "Fusion Dance",
      "name": "Fusion Dance"
    },
    {
      "value": "Gadgetry",
      "name": "Gadgetry"
    },
    {
      "value": "Gadgets",
      "name": "Gadgets 🔧"
    },
    {
      "value": "Genetic Manipulation",
      "name": "Genetic Manipulation"
    },
    {
      "value": "Genius-Level Intellect",
      "name": "Genius-Level Intellect 🧠"
    },
    {
      "value": "Genjutsu Mastery",
      "name": "Genjutsu Mastery"
    },
    {
      "value": "Gentle Fist",
      "name": "Gentle Fist"
    },
    {
      "value": "Geokinesis",
      "name": "Geokinesis"
    },
    {
      "value": "Geomancy",
      "name": "Geomancy"
    },
    {
      "value": "Giant Physiology",
      "name": "Giant Physiology"
    },
    {
      "value": "Glider Proficiency",
      "name": "Glider Proficiency"
    },
    {
      "value": "Gliding Abilities",
      "name": "Gliding Abilities"
    },
    {
      "value": "Goblin Gadgets",
      "name": "Goblin Gadgets"
    },
    {
      "value": "Goblin Glider",
      "name": "Goblin Glider"
    },
    {
      "value": "Graviton Manipulation",
      "name": "Graviton Manipulation"
    },
    {
      "value": "Gravity Manipulation",
      "name": "Gravity Manipulation"
    },
    {
      "value": "Green Lantern Ring Mastery",
      "name": "Green Lantern Ring Mastery 💍"
    },
    {
      "value": "Ground Pound",
      "name": "Ground Pound"
    },
    {
      "value": "Growth Manipulation",
      "name": "Growth Manipulation"
    },
    {
      "value": "Gum-Gum Fruit Powers",
      "name": "Gum-Gum Fruit Powers"
    },
    {
      "value": "Haki",
      "name": "Haki"
    },
    {
      "value": "Hand-to-Hand Combat",
      "name": "Hand-to-Hand Combat 👊"
    },
    {
      "value": "Healing",
      "name": "Healing ⚕️"
    },
    {
      "value": "Healing Abilities",
      "name": "Healing Abilities"
    },
    {
      "value": "Healing Blood",
      "name": "Healing Blood ⚕️"
    },
    {
      "value": "Healing Factor",
      "name": "Healing Factor 🩺"
    },
    {
      "value": "Heat Absorption",
      "name": "Heat Absorption"
    },
    {
      "value": "Heat Generation",
      "name": "Heat Generation"
    },
    {
      "value": "Heat Immunity",
      "name": "Heat Immunity"
    },
    {
      "value": "Heat Vision",
      "name": "Heat Vision 🔥👀"
    },
    {
      "value": "Hellfire Manipulation",
      "name": "Hellfire Manipulation"
    },
    {
      "value": "Hellspawn Physiology",
      "name": "Hellspawn Physiology"
    },
    {
      "value": "Hexes",
      "name": "Hexes"
    },
    {
      "value": "High Intelligence",
      "name": "High Intelligence"
    },
    {
      "value": "Hindsight Analysis",
      "name": "Hindsight Analysis"
    },
    {
      "value": "Historical Knowledge",
      "name": "Historical Knowledge"
    },
    {
      "value": "Hope Empowerment",
      "name": "Hope Empowerment"
    },
    {
      "value": "Human Boulder",
      "name": "Human Boulder"
    },
    {
      "value": "Hydrokinesis",
      "name": "Hydrokinesis"
    },
    {
      "value": "Hypnosis",
      "name": "Hypnosis"
    },
    {
      "value": "Ice Constructs",
      "name": "Ice Constructs"
    },
    {
      "value": "Ice Form",
      "name": "Ice Form"
    },
    {
      "value": "Ice Generation",
      "name": "Ice Generation"
    },
    {
      "value": "Ice Manipulation",
      "name": "Ice Manipulation"
    },
    {
      "value": "Ice Weaponry",
      "name": "Ice Weaponry"
    },
    {
      "value": "Illusion Casting",
      "name": "Illusion Casting"
    },
    {
      "value": "Illusion Creation",
      "name": "Illusion Creation"
    },
    {
      "value": "Illusion Manipulation",
      "name": "Illusion Manipulation"
    },
    {
      "value": "Illusions",
      "name": "Illusions"
    },
    {
      "value": "Immortality",
      "name": "Immortality"
    },
    {
      "value": "Inanimate Object Communication",
      "name": "Inanimate Object Communication"
    },
    {
      "value": "Indomitable Will",
      "name": "Indomitable Will"
    },
    {
      "value": "Insect Breathing Techniques",
      "name": "Insect Breathing Techniques"
    },
    {
      "value": "Insect Communication",
      "name": "Insect Communication 🦟🗣️"
    },
    {
      "value": "Insect Control",
      "name": "Insect Control"
    },
    {
      "value": "Insect Physiology",
      "name": "Insect Physiology"
    },
    {
      "value": "Intangibility",
      "name": "Intangibility 👻"
    },
    {
      "value": "Intelligence",
      "name": "Intelligence"
    },
    {
      "value": "Interdimensional Travel",
      "name": "Interdimensional Travel"
    },
    {
      "value": "Intimidation",
      "name": "Intimidation"
    },
    {
      "value": "Intuitive Aptitude",
      "name": "Intuitive Aptitude"
    },
    {
      "value": "Inuzuka Clan Techniques",
      "name": "Inuzuka Clan Techniques"
    },
    {
      "value": "Inventing",
      "name": "Inventing"
    },
    {
      "value": "Inventor",
      "name": "Inventor"
    },
    {
      "value": "Invisibility",
      "name": "Invisibility"
    },
    {
      "value": "Invisibility to Most Humans",
      "name": "Invisibility to Most Humans"
    },
    {
      "value": "Invulnerability",
      "name": "Invulnerability 🔒"
    },
    {
      "value": "Jet Propulsion",
      "name": "Jet Propulsion ✈️"
    },
    {
      "value": "Jumping Abilities",
      "name": "Jumping Abilities"
    },
    {
      "value": "Kamui",
      "name": "Kamui"
    },
    {
      "value": "Kenjutsu",
      "name": "Kenjutsu"
    },
    {
      "value": "Ki Manipulation",
      "name": "Ki Manipulation"
    },
    {
      "value": "Kinetic Energy Manipulation",
      "name": "Kinetic Energy Manipulation"
    },
    {
      "value": "Kite-Based Gadgets",
      "name": "Kite-Based Gadgets"
    },
    {
      "value": "Knife Mastery",
      "name": "Knife Mastery"
    },
    {
      "value": "Kryptonite Power Source",
      "name": "Kryptonite Power Source"
    },
    {
      "value": "Leadership",
      "name": "Leadership"
    },
    {
      "value": "Levitation",
      "name": "Levitation"
    },
    {
      "value": "Life-Force Absorption",
      "name": "Life-Force Absorption"
    },
    {
      "value": "Light Absorption",
      "name": "Light Absorption"
    },
    {
      "value": "Light Generation",
      "name": "Light Generation"
    },
    {
      "value": "Light Manipulation",
      "name": "Light Manipulation 💡"
    },
    {
      "value": "Lightning Release",
      "name": "Lightning Release"
    },
    {
      "value": "Lightsaber Combat",
      "name": "Lightsaber Combat ⚔️"
    },
    {
      "value": "Limitless",
      "name": "Limitless"
    },
    {
      "value": "Liquid Filling",
      "name": "Liquid Filling"
    },
    {
      "value": "Liquid Metal Mimicry",
      "name": "Liquid Metal Mimicry"
    },
    {
      "value": "Living Light Daggers",
      "name": "Living Light Daggers 🗡️"
    },
    {
      "value": "Longevity",
      "name": "Longevity"
    },
    {
      "value": "Love Breathing Techniques",
      "name": "Love Breathing Techniques"
    },
    {
      "value": "Love Empowerment",
      "name": "Love Empowerment"
    },
    {
      "value": "Lunar Powers",
      "name": "Lunar Powers"
    },
    {
      "value": "Magic Energy Manipulation",
      "name": "Magic Energy Manipulation"
    },
    {
      "value": "Magic Lightning Manipulation",
      "name": "Magic Lightning Manipulation"
    },
    {
      "value": "Magic Manipulation",
      "name": "Magic Manipulation"
    },
    {
      "value": "Magic Spells",
      "name": "Magic Spells"
    },
    {
      "value": "Magnetic Force Fields",
      "name": "Magnetic Force Fields"
    },
    {
      "value": "Magnetokinesis",
      "name": "Magnetokinesis"
    },
    {
      "value": "Makluan Power Rings Mastery",
      "name": "Makluan Power Rings Mastery"
    },
    {
      "value": "Mall Cop Skills",
      "name": "Mall Cop Skills"
    },
    {
      "value": "Malleable Physiology",
      "name": "Malleable Physiology"
    },
    {
      "value": "Mana Sensing",
      "name": "Mana Sensing"
    },
    {
      "value": "Marksman",
      "name": "Marksman"
    },
    {
      "value": "Marksmanship",
      "name": "Marksmanship"
    },
    {
      "value": "Martial Arts",
      "name": "Martial Arts 🥋"
    },
    {
      "value": "Masked Identity",
      "name": "Masked Identity"
    },
    {
      "value": "Master Acrobat",
      "name": "Master Acrobat"
    },
    {
      "value": "Master Archer",
      "name": "Master Archer"
    },
    {
      "value": "Master Assassin",
      "name": "Master Assassin"
    },
    {
      "value": "Master Combatant",
      "name": "Master Combatant"
    },
    {
      "value": "Master Criminal",
      "name": "Master Criminal"
    },
    {
      "value": "Master Detective",
      "name": "Master Detective 🔍"
    },
    {
      "value": "Master Manipulator",
      "name": "Master Manipulator"
    },
    {
      "value": "Master Marksman",
      "name": "Master Marksman"
    },
    {
      "value": "Master of Disguise",
      "name": "Master of Disguise"
    },
    {
      "value": "Master Spy",
      "name": "Master Spy"
    },
    {
      "value": "Master Strategist",
      "name": "Master Strategist"
    },
    {
      "value": "Master Swordsman",
      "name": "Master Swordsman"
    },
    {
      "value": "Master Tactician",
      "name": "Master Tactician"
    },
    {
      "value": "Matter Manipulation",
      "name": "Matter Manipulation"
    },
    {
      "value": "Matter Transmutation",
      "name": "Matter Transmutation"
    },
    {
      "value": "Mech Piloting",
      "name": "Mech Piloting"
    },
    {
      "value": "Mech Suit Piloting",
      "name": "Mech Suit Piloting"
    },
    {
      "value": "Mechanical Engineering",
      "name": "Mechanical Engineering"
    },
    {
      "value": "Mechanical Tentacles",
      "name": "Mechanical Tentacles"
    },
    {
      "value": "Medical Ninjutsu",
      "name": "Medical Ninjutsu"
    },
    {
      "value": "Metal Arm",
      "name": "Metal Arm"
    },
    {
      "value": "Metal Manipulation",
      "name": "Metal Manipulation"
    },
    {
      "value": "Microwave Energy Manipulation",
      "name": "Microwave Energy Manipulation"
    },
    {
      "value": "Military Training",
      "name": "Military Training"
    },
    {
      "value": "Mind Control",
      "name": "Mind Control"
    },
    {
      "value": "Mirror Manipulation",
      "name": "Mirror Manipulation"
    },
    {
      "value": "Mist Breathing Techniques",
      "name": "Mist Breathing Techniques"
    },
    {
      "value": "Mjolnir Control",
      "name": "Mjolnir Control"
    },
    {
      "value": "Mjolnir Wielding",
      "name": "Mjolnir Wielding"
    },
    {
      "value": "Molecular Manipulation",
      "name": "Molecular Manipulation"
    },
    {
      "value": "Molten Form",
      "name": "Molten Form"
    },
    {
      "value": "Monster Hunting Skills",
      "name": "Monster Hunting Skills"
    },
    {
      "value": "Motorcycle Proficiency",
      "name": "Motorcycle Proficiency"
    },
    {
      "value": "Multiple Identities",
      "name": "Multiple Identities"
    },
    {
      "value": "Multiple Personalities",
      "name": "Multiple Personalities"
    },
    {
      "value": "Multipower",
      "name": "Multipower"
    },
    {
      "value": "Music Proficiency",
      "name": "Music Proficiency"
    },
    {
      "value": "Mystic Arts",
      "name": "Mystic Arts 🧙"
    },
    {
      "value": "Mystical Mace",
      "name": "Mystical Mace"
    },
    {
      "value": "Necromancy",
      "name": "Necromancy"
    },
    {
      "value": "Necroplasm Manipulation",
      "name": "Necroplasm Manipulation"
    },
    {
      "value": "Neurotoxin Secretion",
      "name": "Neurotoxin Secretion"
    },
    {
      "value": "Nichirin Sword",
      "name": "Nichirin Sword"
    },
    {
      "value": "Nightcrawler Physiology",
      "name": "Nightcrawler Physiology 🌀"
    },
    {
      "value": "Ninjutsu",
      "name": "Ninjutsu"
    },
    {
      "value": "Nth Metal Mace",
      "name": "Nth Metal Mace"
    },
    {
      "value": "Nuclear Manipulation",
      "name": "Nuclear Manipulation"
    },
    {
      "value": "Occult Knowledge",
      "name": "Occult Knowledge"
    },
    {
      "value": "Olympic-Level Athlete",
      "name": "Olympic-Level Athlete"
    },
    {
      "value": "Omega Beams",
      "name": "Omega Beams 🌀"
    },
    {
      "value": "Omnipotence",
      "name": "Omnipotence ✨"
    },
    {
      "value": "Omnipresence",
      "name": "Omnipresence"
    },
    {
      "value": "Omniscience",
      "name": "Omniscience"
    },
    {
      "value": "Omnitrix Alien Transformations",
      "name": "Omnitrix Alien Transformations"
    },
    {
      "value": "Optic Blasts",
      "name": "Optic Blasts"
    },
    {
      "value": "Orange Lantern Ring Mastery",
      "name": "Orange Lantern Ring Mastery"
    },
    {
      "value": "Organic Husk Shedding",
      "name": "Organic Husk Shedding"
    },
    {
      "value": "Organic Steel Transformation",
      "name": "Organic Steel Transformation 🔩"
    },
    {
      "value": "Paranormal Expertise",
      "name": "Paranormal Expertise"
    },
    {
      "value": "Parasol Combat",
      "name": "Parasol Combat"
    },
    {
      "value": "Particle Manipulation",
      "name": "Particle Manipulation"
    },
    {
      "value": "Peak Human Condition",
      "name": "Peak Human Condition"
    },
    {
      "value": "Penance Stare",
      "name": "Penance Stare"
    },
    {
      "value": "Phasing",
      "name": "Phasing"
    },
    {
      "value": "Pheromone Control",
      "name": "Pheromone Control"
    },
    {
      "value": "Philosophical Knowledge",
      "name": "Philosophical Knowledge"
    },
    {
      "value": "Phoenix Force",
      "name": "Phoenix Force"
    },
    {
      "value": "Photographic Reflexes",
      "name": "Photographic Reflexes"
    },
    {
      "value": "Photokinesis",
      "name": "Photokinesis"
    },
    {
      "value": "Piko Piko Hammer Proficiency",
      "name": "Piko Piko Hammer Proficiency"
    },
    {
      "value": "Pilot",
      "name": "Pilot"
    },
    {
      "value": "Plant Manipulation",
      "name": "Plant Manipulation"
    },
    {
      "value": "Plasma Generation",
      "name": "Plasma Generation"
    },
    {
      "value": "Plasma Manipulation",
      "name": "Plasma Manipulation"
    },
    {
      "value": "Plasma Projection",
      "name": "Plasma Projection"
    },
    {
      "value": "Poison Generation",
      "name": "Poison Generation"
    },
    {
      "value": "Poison Mastery",
      "name": "Poison Mastery"
    },
    {
      "value": "Polka Dot Technology",
      "name": "Polka Dot Technology"
    },
    {
      "value": "Poltergust G-00",
      "name": "Poltergust G-00"
    },
    {
      "value": "Pop Star Skills",
      "name": "Pop Star Skills"
    },
    {
      "value": "Possession",
      "name": "Possession"
    },
    {
      "value": "Potara Fusion",
      "name": "Potara Fusion"
    },
    {
      "value": "Power Absorption",
      "name": "Power Absorption"
    },
    {
      "value": "Power Cosmic",
      "name": "Power Cosmic"
    },
    {
      "value": "Power Manifestation",
      "name": "Power Manifestation"
    },
    {
      "value": "Power Mimicry",
      "name": "Power Mimicry 💫"
    },
    {
      "value": "Power Negation",
      "name": "Power Negation"
    },
    {
      "value": "Powered Armor Suit",
      "name": "Powered Armor Suit"
    },
    {
      "value": "Powered Exoskeleton",
      "name": "Powered Exoskeleton"
    },
    {
      "value": "Precognition",
      "name": "Precognition"
    },
    {
      "value": "Prehensile Hair",
      "name": "Prehensile Hair"
    },
    {
      "value": "Prehensile Tail",
      "name": "Prehensile Tail"
    },
    {
      "value": "Private Investigation Skills",
      "name": "Private Investigation Skills"
    },
    {
      "value": "Probability Manipulation",
      "name": "Probability Manipulation 🎲"
    },
    {
      "value": "Psionic Abilities",
      "name": "Psionic Abilities"
    },
    {
      "value": "Psionic Armor Manifestation",
      "name": "Psionic Armor Manifestation"
    },
    {
      "value": "Psionic Diamond Shards",
      "name": "Psionic Diamond Shards 💎"
    },
    {
      "value": "Psionic Energy Manipulation",
      "name": "Psionic Energy Manipulation 💫⚡"
    },
    {
      "value": "Psionic Entity",
      "name": "Psionic Entity"
    },
    {
      "value": "Psionic Powers",
      "name": "Psionic Powers"
    },
    {
      "value": "Psionic Shields",
      "name": "Psionic Shields"
    },
    {
      "value": "Psionics",
      "name": "Psionics 💫"
    },
    {
      "value": "Psychic Constructs",
      "name": "Psychic Constructs 🧠"
    },
    {
      "value": "Psychic Powers",
      "name": "Psychic Powers"
    },
    {
      "value": "Psychic Resistance",
      "name": "Psychic Resistance"
    },
    {
      "value": "Psychokinesis",
      "name": "Psychokinesis"
    },
    {
      "value": "Psychological Warfare",
      "name": "Psychological Warfare"
    },
    {
      "value": "Psychopathy",
      "name": "Psychopathy"
    },
    {
      "value": "Pumpkin Bombs",
      "name": "Pumpkin Bombs"
    },
    {
      "value": "Pyrokinesis",
      "name": "Pyrokinesis"
    },
    {
      "value": "Quantum Bands",
      "name": "Quantum Bands"
    },
    {
      "value": "Quantum Manipulation",
      "name": "Quantum Manipulation"
    },
    {
      "value": "Quasi-Sonic Scream",
      "name": "Quasi-Sonic Scream"
    },
    {
      "value": "Quidditch Skills",
      "name": "Quidditch Skills"
    },
    {
      "value": "Radar Sense",
      "name": "Radar Sense"
    },
    {
      "value": "Radiation Immunity",
      "name": "Radiation Immunity"
    },
    {
      "value": "Radiation Manipulation",
      "name": "Radiation Manipulation"
    },
    {
      "value": "Rage Empowerment",
      "name": "Rage Empowerment"
    },
    {
      "value": "Rapid Cellular Regeneration",
      "name": "Rapid Cellular Regeneration"
    },
    {
      "value": "Rasengan",
      "name": "Rasengan"
    },
    {
      "value": "Razor-Sharp Feathers",
      "name": "Razor-Sharp Feathers 🦅"
    },
    {
      "value": "Reality Perception",
      "name": "Reality Perception"
    },
    {
      "value": "Reality Warping",
      "name": "Reality Warping 🌀"
    },
    {
      "value": "Red Lantern Ring Mastery",
      "name": "Red Lantern Ring Mastery"
    },
    {
      "value": "Reflexes",
      "name": "Reflexes"
    },
    {
      "value": "Regeneration",
      "name": "Regeneration ⚕️"
    },
    {
      "value": "Regenerative Healing Factor",
      "name": "Regenerative Healing Factor"
    },
    {
      "value": "Reincarnation",
      "name": "Reincarnation"
    },
    {
      "value": "Repulsor Blasts",
      "name": "Repulsor Blasts"
    },
    {
      "value": "Researcher",
      "name": "Researcher"
    },
    {
      "value": "Resistance to Aging",
      "name": "Resistance to Aging"
    },
    {
      "value": "Retrocognition",
      "name": "Retrocognition"
    },
    {
      "value": "Rinnegan",
      "name": "Rinnegan"
    },
    {
      "value": "Robotics",
      "name": "Robotics"
    },
    {
      "value": "Robotics Expertise",
      "name": "Robotics Expertise"
    },
    {
      "value": "Rock-Like Skin",
      "name": "Rock-Like Skin"
    },
    {
      "value": "Royal Diplomacy",
      "name": "Royal Diplomacy"
    },
    {
      "value": "Rubber Physiology",
      "name": "Rubber Physiology"
    },
    {
      "value": "Sage Mode",
      "name": "Sage Mode"
    },
    {
      "value": "Saiyan Physiology",
      "name": "Saiyan Physiology"
    },
    {
      "value": "Sand Manipulation",
      "name": "Sand Manipulation"
    },
    {
      "value": "Sarcasm",
      "name": "Sarcasm"
    },
    {
      "value": "Segway Riding",
      "name": "Segway Riding"
    },
    {
      "value": "Senjutsu",
      "name": "Senjutsu"
    },
    {
      "value": "Sentient Planet",
      "name": "Sentient Planet"
    },
    {
      "value": "Serpent Breathing Techniques",
      "name": "Serpent Breathing Techniques"
    },
    {
      "value": "Shadow Clones",
      "name": "Shadow Clones"
    },
    {
      "value": "Shadow Manipulation",
      "name": "Shadow Manipulation"
    },
    {
      "value": "Shape-shifting",
      "name": "Shape-shifting"
    },
    {
      "value": "Shape-Shifting",
      "name": "Shape-Shifting"
    },
    {
      "value": "Shapeshifting",
      "name": "Shapeshifting 🔄"
    },
    {
      "value": "Sharingan",
      "name": "Sharingan"
    },
    {
      "value": "Sharingan Abilities",
      "name": "Sharingan Abilities"
    },
    {
      "value": "Sharp Claws",
      "name": "Sharp Claws"
    },
    {
      "value": "Shell Defense",
      "name": "Shell Defense"
    },
    {
      "value": "Shield Mastery",
      "name": "Shield Mastery"
    },
    {
      "value": "Shielding",
      "name": "Shielding"
    },
    {
      "value": "Shinra Tensei",
      "name": "Shinra Tensei"
    },
    {
      "value": "Shockwave Generation",
      "name": "Shockwave Generation"
    },
    {
      "value": "Six Eyes",
      "name": "Six Eyes"
    },
    {
      "value": "Six Paths Techniques",
      "name": "Six Paths Techniques"
    },
    {
      "value": "Size Manipulation",
      "name": "Size Manipulation 📏"
    },
    {
      "value": "Skateboarding Skills",
      "name": "Skateboarding Skills"
    },
    {
      "value": "Skilled Combatant",
      "name": "Skilled Combatant ⚔️"
    },
    {
      "value": "Skilled Fighter",
      "name": "Skilled Fighter"
    },
    {
      "value": "Skilled Marksman",
      "name": "Skilled Marksman 🎯"
    },
    {
      "value": "Skilled Martial Artist",
      "name": "Skilled Martial Artist"
    },
    {
      "value": "Skilled Pilot",
      "name": "Skilled Pilot"
    },
    {
      "value": "Slayer Powers",
      "name": "Slayer Powers"
    },
    {
      "value": "Snake Techniques",
      "name": "Snake Techniques"
    },
    {
      "value": "Solar Energy Absorption",
      "name": "Solar Energy Absorption"
    },
    {
      "value": "Solar Radiation Absorption",
      "name": "Solar Radiation Absorption"
    },
    {
      "value": "Solid Sound Constructs",
      "name": "Solid Sound Constructs"
    },
    {
      "value": "Sonic Manipulation",
      "name": "Sonic Manipulation"
    },
    {
      "value": "Sonic Scream",
      "name": "Sonic Scream"
    },
    {
      "value": "Sorcery",
      "name": "Sorcery 🧙"
    },
    {
      "value": "Soul Manipulation",
      "name": "Soul Manipulation"
    },
    {
      "value": "Soul Reaper Powers",
      "name": "Soul Reaper Powers"
    },
    {
      "value": "Soul Sword",
      "name": "Soul Sword"
    },
    {
      "value": "Soultaker Sword",
      "name": "Soultaker Sword"
    },
    {
      "value": "Sound Breathing Techniques",
      "name": "Sound Breathing Techniques"
    },
    {
      "value": "Sound Manipulation",
      "name": "Sound Manipulation 🔊"
    },
    {
      "value": "Space Travel",
      "name": "Space Travel 🚀"
    },
    {
      "value": "Space-Time Ninjutsu",
      "name": "Space-Time Ninjutsu"
    },
    {
      "value": "Speed",
      "name": "Speed"
    },
    {
      "value": "Speed Force Aura",
      "name": "Speed Force Aura ⚡"
    },
    {
      "value": "Speed Force Conduit",
      "name": "Speed Force Conduit"
    },
    {
      "value": "Speed Force Connection",
      "name": "Speed Force Connection"
    },
    {
      "value": "Spell Casting",
      "name": "Spell Casting"
    },
    {
      "value": "Spider Physiology",
      "name": "Spider Physiology"
    },
    {
      "value": "Spider-Sense",
      "name": "Spider-Sense"
    },
    {
      "value": "Spin Attack",
      "name": "Spin Attack"
    },
    {
      "value": "Staff Proficiency",
      "name": "Staff Proficiency"
    },
    {
      "value": "Starship Command",
      "name": "Starship Command"
    },
    {
      "value": "Starship Pilot",
      "name": "Starship Pilot"
    },
    {
      "value": "Stealth",
      "name": "Stealth"
    },
    {
      "value": "Stealth Technology",
      "name": "Stealth Technology"
    },
    {
      "value": "Stellar Physiology",
      "name": "Stellar Physiology"
    },
    {
      "value": "Stinger Blasts",
      "name": "Stinger Blasts"
    },
    {
      "value": "Stinger Protrusion",
      "name": "Stinger Protrusion"
    },
    {
      "value": "Stone Breathing Techniques",
      "name": "Stone Breathing Techniques"
    },
    {
      "value": "Strategist",
      "name": "Strategist"
    },
    {
      "value": "String-String Fruit Powers",
      "name": "String-String Fruit Powers"
    },
    {
      "value": "Summoning Technique",
      "name": "Summoning Technique"
    },
    {
      "value": "Super Canine Strength",
      "name": "Super Canine Strength"
    },
    {
      "value": "Super Soldier Serum",
      "name": "Super Soldier Serum"
    },
    {
      "value": "Super Speed",
      "name": "Super Speed"
    },
    {
      "value": "Superhuman Agility",
      "name": "Superhuman Agility"
    },
    {
      "value": "Superhuman Durability",
      "name": "Superhuman Durability 🦾"
    },
    {
      "value": "Superhuman Intelligence",
      "name": "Superhuman Intelligence 🧠"
    },
    {
      "value": "Superhuman Physiology",
      "name": "Superhuman Physiology"
    },
    {
      "value": "Superhuman Reflexes",
      "name": "Superhuman Reflexes"
    },
    {
      "value": "Superhuman Senses",
      "name": "Superhuman Senses"
    },
    {
      "value": "Superhuman Speed",
      "name": "Superhuman Speed 🏃‍♂️💨"
    },
    {
      "value": "Superhuman Strength",
      "name": "Superhuman Strength 💪"
    },
    {
      "value": "Supersonic Speed",
      "name": "Supersonic Speed"
    },
    {
      "value": "Surfboard Manipulation",
      "name": "Surfboard Manipulation"
    },
    {
      "value": "Survivability",
      "name": "Survivability"
    },
    {
      "value": "Survival Skills",
      "name": "Survival Skills"
    },
    {
      "value": "Susanoo",
      "name": "Susanoo"
    },
    {
      "value": "Swimming",
      "name": "Swimming"
    },
    {
      "value": "Swordsmanship",
      "name": "Swordsmanship"
    },
    {
      "value": "Symbiote Manipulation",
      "name": "Symbiote Manipulation"
    },
    {
      "value": "Symbiote Physiology",
      "name": "Symbiote Physiology"
    },
    {
      "value": "Synthetic Physiology",
      "name": "Synthetic Physiology"
    },
    {
      "value": "T-Spheres",
      "name": "T-Spheres"
    },
    {
      "value": "Tactical Analysis",
      "name": "Tactical Analysis"
    },
    {
      "value": "Tactical Expertise",
      "name": "Tactical Expertise 🔍"
    },
    {
      "value": "Tactical Genius",
      "name": "Tactical Genius 🧠🔍"
    },
    {
      "value": "Tactical Skills",
      "name": "Tactical Skills"
    },
    {
      "value": "Taijutsu Mastery",
      "name": "Taijutsu Mastery"
    },
    {
      "value": "Tail Attacks",
      "name": "Tail Attacks"
    },
    {
      "value": "Tail Stinger",
      "name": "Tail Stinger"
    },
    {
      "value": "Talons",
      "name": "Talons"
    },
    {
      "value": "Tattoo Physiology",
      "name": "Tattoo Physiology"
    },
    {
      "value": "Techno-Organic Physiology",
      "name": "Techno-Organic Physiology"
    },
    {
      "value": "Technological Adaptation",
      "name": "Technological Adaptation"
    },
    {
      "value": "Technological Interface",
      "name": "Technological Interface"
    },
    {
      "value": "Technological Invention",
      "name": "Technological Invention"
    },
    {
      "value": "Technological Sorcery",
      "name": "Technological Sorcery 🧙‍♂️⚙️"
    },
    {
      "value": "Technology Expertise",
      "name": "Technology Expertise"
    },
    {
      "value": "Technopathy",
      "name": "Technopathy"
    },
    {
      "value": "Telekinesis",
      "name": "Telekinesis 🧠"
    },
    {
      "value": "Telepathic Bond with Birds",
      "name": "Telepathic Bond with Birds 🦜"
    },
    {
      "value": "Telepathic Communication with Marine Life",
      "name": "Telepathic Communication with Marine Life"
    },
    {
      "value": "Telepathy",
      "name": "Telepathy 🧠"
    },
    {
      "value": "Teleportation",
      "name": "Teleportation 🌌"
    },
    {
      "value": "Temporal Manipulation",
      "name": "Temporal Manipulation 🕰️"
    },
    {
      "value": "Thievery Skills",
      "name": "Thievery Skills"
    },
    {
      "value": "Thunderclap and Flash",
      "name": "Thunderclap and Flash"
    },
    {
      "value": "Time Manipulation",
      "name": "Time Manipulation"
    },
    {
      "value": "Time Manipulation Resistance",
      "name": "Time Manipulation Resistance"
    },
    {
      "value": "Time Perception",
      "name": "Time Perception"
    },
    {
      "value": "Time Travel",
      "name": "Time Travel ⏳"
    },
    {
      "value": "Titan Shifting",
      "name": "Titan Shifting"
    },
    {
      "value": "Toad Ninjutsu",
      "name": "Toad Ninjutsu"
    },
    {
      "value": "Toad Summoning",
      "name": "Toad Summoning"
    },
    {
      "value": "Tongue Grab",
      "name": "Tongue Grab"
    },
    {
      "value": "Toughness",
      "name": "Toughness"
    },
    {
      "value": "Toxic Plant Manipulation",
      "name": "Toxic Plant Manipulation"
    },
    {
      "value": "Toxic Saliva",
      "name": "Toxic Saliva"
    },
    {
      "value": "Toxin Generation",
      "name": "Toxin Generation"
    },
    {
      "value": "Toxin Immunity",
      "name": "Toxin Immunity"
    },
    {
      "value": "Tracking Skills",
      "name": "Tracking Skills"
    },
    {
      "value": "Transformation",
      "name": "Transformation"
    },
    {
      "value": "Trick Arrows",
      "name": "Trick Arrows"
    },
    {
      "value": "Tripartite Physiology",
      "name": "Tripartite Physiology"
    },
    {
      "value": "Tusks",
      "name": "Tusks"
    },
    {
      "value": "Umbrella Proficiency",
      "name": "Umbrella Proficiency"
    },
    {
      "value": "Underwater Adaptation",
      "name": "Underwater Adaptation"
    },
    {
      "value": "Underwater Breathing",
      "name": "Underwater Breathing"
    },
    {
      "value": "Unspecified",
      "name": "Unspecified"
    },
    {
      "value": "Unstoppable Momentum",
      "name": "Unstoppable Momentum"
    },
    {
      "value": "Unyielding Morality",
      "name": "Unyielding Morality"
    },
    {
      "value": "Valkyrie Powers",
      "name": "Valkyrie Powers"
    },
    {
      "value": "Vampire Physiology",
      "name": "Vampire Physiology"
    },
    {
      "value": "Vampirism",
      "name": "Vampirism"
    },
    {
      "value": "Venom Blast",
      "name": "Venom Blast"
    },
    {
      "value": "Venomous Bite",
      "name": "Venomous Bite"
    },
    {
      "value": "Vertical Maneuvering Equipment",
      "name": "Vertical Maneuvering Equipment"
    },
    {
      "value": "Vertigo Inducement",
      "name": "Vertigo Inducement"
    },
    {
      "value": "Vibranium Suit",
      "name": "Vibranium Suit"
    },
    {
      "value": "Vibranium Technology",
      "name": "Vibranium Technology"
    },
    {
      "value": "Vibration Manipulation",
      "name": "Vibration Manipulation"
    },
    {
      "value": "Vibro-Blast Gauntlets",
      "name": "Vibro-Blast Gauntlets"
    },
    {
      "value": "Violet Lantern Ring Mastery",
      "name": "Violet Lantern Ring Mastery"
    },
    {
      "value": "Vulcan Nerve Pinch",
      "name": "Vulcan Nerve Pinch"
    },
    {
      "value": "Wall-Crashing",
      "name": "Wall-Crashing"
    },
    {
      "value": "Wall-Crawling",
      "name": "Wall-Crawling"
    },
    {
      "value": "Water Absorption",
      "name": "Water Absorption"
    },
    {
      "value": "Water Breathing",
      "name": "Water Breathing"
    },
    {
      "value": "Water Breathing Techniques",
      "name": "Water Breathing Techniques"
    },
    {
      "value": "Water Form",
      "name": "Water Form"
    },
    {
      "value": "Weapon Mastery",
      "name": "Weapon Mastery"
    },
    {
      "value": "Weapon Proficiency",
      "name": "Weapon Proficiency 🔫"
    },
    {
      "value": "Weapon Systems",
      "name": "Weapon Systems"
    },
    {
      "value": "Weaponry Expert",
      "name": "Weaponry Expert"
    },
    {
      "value": "Weapons Proficiency",
      "name": "Weapons Proficiency"
    },
    {
      "value": "Weapons Systems",
      "name": "Weapons Systems"
    },
    {
      "value": "Weather Manipulation",
      "name": "Weather Manipulation"
    },
    {
      "value": "Web Generation",
      "name": "Web Generation 🕸️"
    },
    {
      "value": "Web-Slinging",
      "name": "Web-Slinging"
    },
    {
      "value": "Werewolf Physiology",
      "name": "Werewolf Physiology"
    },
    {
      "value": "Whip Proficiency",
      "name": "Whip Proficiency"
    },
    {
      "value": "Wind Breathing Techniques",
      "name": "Wind Breathing Techniques"
    },
    {
      "value": "Wind Magic",
      "name": "Wind Magic"
    },
    {
      "value": "Wing Manifestation",
      "name": "Wing Manifestation"
    },
    {
      "value": "Winged Flight",
      "name": "Winged Flight"
    },
    {
      "value": "Witchcraft",
      "name": "Witchcraft"
    },
    {
      "value": "Wizardry",
      "name": "Wizardry"
    },
    {
      "value": "Wood Release",
      "name": "Wood Release"
    },
    {
      "value": "Xenomorph Physiology",
      "name": "Xenomorph Physiology"
    },
    {
      "value": "Yellow Lantern Ring Mastery",
      "name": "Yellow Lantern Ring Mastery"
    },
    {
      "value": "Yellow Power Ring Mastery",
      "name": "Yellow Power Ring Mastery"
    },
    {
      "value": "Zord Control",
      "name": "Zord Control"
    }
  ]
