export const CHARACTERS_PER_PAGE = 8;

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

export const UNIVERSES_WITH_TEAMS = ["Marvel Comics", "DC Comics", "Dark Horse Comics", "IDW Publishing", "Shueisha", "Warner Bros", "Super Sentai", "SEGA"] /* as const */

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
      "value": "360° Vision",
      "name": "360° Vision"
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

export function getTeamByUniverse(universe: string): { name: string, value: string, img: string }[] {
  switch (universe) {
    case "Marvel Comics":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "Asgardians",
          value: "Asgardians",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deqsmlv-740da833-0582-4672-9c63-a58f1f79565c.png/v1/fill/w_638,h_604/asgard_logo_by_spiderbyte64_deqsmlv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA0IiwicGF0aCI6IlwvZlwvYTIxYzI4MTYtNDlkNC00YTViLWI2ZGItNzYzNGE1ZWE4NjcxXC9kZXFzbWx2LTc0MGRhODMzLTA1ODItNDY3Mi05YzYzLWE1OGYxZjc5NTY1Yy5wbmciLCJ3aWR0aCI6Ijw9NjM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R5bMAGrtXXim7EM_A84hkucgZewYCUOzB8_Uevmkwlc",
        },
        {
          name: "Agents of Atlas",
          value: "Agents of Atlas",
          img: "https://static.wikia.nocookie.net/marveldatabase/images/7/7c/Agents_of_Atlas_Vol_3_4_Logo.png",
        },
        {
          name: "Avengers",
          value: "Avengers",
          img: "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png",
        },
        {
          name: "Avengers-Original",
          value: "Avengers-Original",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA",
        },
        {
          name: "Black Order",
          value: "Black Order",
          img: "https://static.wikia.nocookie.net/marveldatabase/images/0/0a/Black_Order_Vol_1_Logo.png",
        },
        {
          name: "Brotherhood of Evil Mutants",
          value: "Brotherhood of Evil Mutants",
          img: "https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg",
        },
        {
          name: "Dark avengers",
          value: "Dark avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14",
        },
        {
          name: "Defenders",
          value: "Defenders",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8",
        },
        {
          name: "Eternals",
          value: "Eternals",
          img: "https://www.firstcomicsnews.com/wp-content/uploads/2019/07/Eternals-Logo.png",
        },
        {
          name: "Fantastic Four",
          value: "Fantastic Four",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82d0ec62-144a-47ae-aebb-f112f2a3b50b/ddghfpv-954536f0-f6f2-45c9-9f3a-468e21363b42.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyZDBlYzYyLTE0NGEtNDdhZS1hZWJiLWYxMTJmMmEzYjUwYlwvZGRnaGZwdi05NTQ1MzZmMC1mNmYyLTQ1YzktOWYzYS00NjhlMjEzNjNiNDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cfqvk-n8nviTwKKScn8a-iJ-Qx1sR_fa9DWOKXx9TBA",
        },
        {
          name: "Fantastic Four-Original",
          value: "Fantastic Four-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fantastic_Four_logo_%28blue_and_white%29.svg/800px-Fantastic_Four_logo_%28blue_and_white%29.svg.png",
        },
        {
          name: "Future Foundation",
          value: "Future Foundation",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc",
        },
        {
          name: "Guardians of the Galaxy",
          value: "Guardians of the Galaxy",
          img: "https://static.wikia.nocookie.net/logopedia/images/2/2d/GOTG_merch_logo.png",
        },
        {
          name: "Heroes For Hire",
          value: "Heroes For Hire",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI",
        },
        {
          name: "Hulk Family",
          value: "Hulk Family",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png",
        },
        {
          name: "Hydra",
          value: "Hydra",
          img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png",
        },

        {
          name: "Illuminati",
          value: "Illuminati",
          img: "https://i.ytimg.com/vi/kMzBLe2X-aE/maxresdefault.jpg",
        },
        {
          name: "Inhumans",
          value: "Inhumans",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY",
        },
        {
          name: "Legion of Monsters",
          value: "Legion of Monsters",
          img: "https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg",
        },
        {
          name: "Marvel Knights",
          value: "Marvel Knights",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4",
        },
        {
          name: "Midnight Sons",
          value: "Midnight Sons",
          img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/1723/0gPKGnGXftV59bXu6NgH9wXA.png",
        },
        {
          name: "MCU Villains",
          value: "MCU Villains",
          //https://tiermaker.com/images/avatars-2022/Ostrazo/Ostrazo.jpg?1665249362
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk",
        },
        {
          name: "New Mutants",
          value: "New Mutants",
          img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc",
        },
        {
          name: "New Warriors",
          value: "New Warriors",
          img: "https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png",
        },
        {
          name: "Secret Avengers",
          value: "Secret Avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI",
        },
        {
          name: "S.H.I.E.L.D",
          value: "S.H.I.E.L.D",
          img: "https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png",
        },
        {
          name: "Sinister Six",
          value: "Sinister Six",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo",
        },
        {
          name: "Spider-Army",
          value: "Spider-Army",
          img: "https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg",
        },
        {
          name: "Symbiotes",
          value: "Symbiotes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/087e4223-8511-4640-b630-2e29d173cf6a/dd8o0k1-3ba7b37c-d8b5-4da0-bf85-8fda58951f9c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4N2U0MjIzLTg1MTEtNDY0MC1iNjMwLTJlMjlkMTczY2Y2YVwvZGQ4bzBrMS0zYmE3YjM3Yy1kOGI1LTRkYTAtYmY4NS04ZmRhNTg5NTFmOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H8J5fVOUzAJVgQfHJ-BBHlYvxlgv189xwNv5f7NwiLQ",
        },
        {
          name: "Thunderbolts",
          value: "Thunderbolts",
          img: "https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg",
        },
        {
          name: "Ultimates",
          value: "Ultimates",
          img: "https://static.wikia.nocookie.net/marvelcrossroads/images/2/25/Ultimates_%285641%29.png",
        },
        {
          name: "Warriors of the Sky",
          value: "Warriors of the Sky",
          img: "https://media.pocketgamer.com/artwork/na-25218-1572349365/marvel-future-fight-ios-android-symbols_jpg_820.jpg",
        },
        {
          name: "Weapon X",
          value: "Weapon X",
          img: "https://static.wikia.nocookie.net/logocomics/images/6/6c/Weapon-X_%281995%29-2.png",
        },
        {
          name: "X-Force",
          value: "X-Force",
          img: "https://static.wikia.nocookie.net/logocomics/images/b/b4/X-Force%281991-2002%29.png",
        },
        {
          name: "X-Men",
          value: "X-Men",
          // img: 'https://assets.stickpng.com/images/6160517776000b00045a7d7e.png'
          // img: "https://cdn.mos.cms.futurecdn.net/ZmMkFCTgBNMoxEohbzBXJm.jpg",
          img: "https://seeklogo.com/images/X/x-men-logo-F16A0D1D4D-seeklogo.com.png",
        },
        {
          name: "X-Men-Original",
          value: "X-Men-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/X_symbol_from_X-Men_logo.svg/240px-X_symbol_from_X-Men_logo.svg.png",
        },
        {
          name: "Young avengers",
          value: "Young avengers",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY",
        },
      ];

    case "DC Comics":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "Aquaman Family",
          value: "Aquaman Family",
          img: "https://1000logos.net/wp-content/uploads/2018/12/Aquaman-logo.png",
        },
        {
          name: "Assorted Batman rogues",
          value: "Assorted Batman rogues",
          // img: "https://w0.peakpx.com/wallpaper/555/276/HD-wallpaper-batman-villains-joker-comics-scarecrow-peguin-superheroes-catwoman-two-face-dc-comics-batman-villains-poison-ivy.jpg",
          img: "https://i.imgur.com/dpV2h6W.png",
        },
        {
          name: "Batman Family",
          value: "Batman Family",
          img: "https://1.bp.blogspot.com/--SVWM1KMnVg/Xw91Rg-CF5I/AAAAAAAAmYk/31fWiKwl520MlvOY5q3deIke4dibyB8UACLcBGAsYHQ/s1600/228-2288332_gotham-knights-logo-png-transparent-batman-gotham-knights.png",
        },
        {
          name: "Crimebusters / Watchmen",
          value: "Crimebusters",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0",
        },
        {
          name: "Crime Syndicate",
          value: "Crime Syndicate",
          img: "https://www.dafont.com/img/illustration/c/r/crime_syndicate.png",
        },
        {
          name: "Flash Family / Speedsters",
          value: "Flash Family",
          img: "https://i.pinimg.com/736x/b4/1c/f7/b41cf7951ae77dcf210eaa20e4b0172b--logos-flash.jpg",
        },
        {
          name: "Green Lantern Corps",
          value: "Green Lantern Corps",
          img: "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png",
        },
        {
          name: "Injustice League",
          value: "Injustice League",
          img: "https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg",
        },
        {
          name: "Justice League",
          value: "Justice League",
          img: "https://heroichollywood.com/wp-content/uploads/2017/09/justice-league-logo-square-4.jpg",
        },
        {
          name: "Justice League-Original",
          value: "Justice League-Original",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Justice_League_2017_Movie_Logo.svg/1274px-Justice_League_2017_Movie_Logo.svg.png",
        },
        {
          name: "Justice League Dark",
          value: "Justice League Dark",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck",
        },
        {
          name: "Justice Society of America",
          value: "Justice Society of America",
          img: "https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg",
        },
        {
          name: "Lanterns Corps (All)",
          value: "Lantern Corps",
          img: "https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq",
        },
        {
          name: "The Terrifics",
          value: "The Terrifics",
          img: "https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png",
        },
        {
          name: "Legion of Super-Heroes",
          value: "Legion of Super-Heroes",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808",
        },
        {
          name: "Marvel Family",
          value: "Marvel Family",
          img: "https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png",
        },
        {
          name: "New Guardians Corps",
          value: "New Guardians",
          img: "https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png",
        },
        {
          name: "Outsiders",
          value: "Outsiders",
          img: "https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png",
        },
        {
          name: "Secret Society of Super Villains",
          value: "Secret Society of Super Villains",
          img: "https://static.wikia.nocookie.net/comicbookuniverse/images/f/f4/Villians.png",
        },
        {
          name: "Suicide Squad",
          value: "Suicide Squad",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/de3t87x-a54ce749-e4b1-4bc1-adea-12e26110d5d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGUzdDg3eC1hNTRjZTc0OS1lNGIxLTRiYzEtYWRlYS0xMmUyNjExMGQ1ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jl2NhATv61lvYrInZzGu5VCEV3PYzREWNSIl6_aD0lQ",
        },
        {
          name: "Superman Family / Kriptonian",
          value: "Superman Family",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png",
        },
        {
          name: "Teen Titans",
          value: "Teen Titans",
          img: "https://dccomicsnews.com/wp-content/uploads/2018/02/titans-logo-e1518302381244.png",
        },
      ];

    case "Dark Horse Comics":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "Incredible Family",
          value: "Incredible Family",
          img: "https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png",
        },
      ];

    case "IDW Publishing":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "Teenage Mutant Ninja Turtles",
          value: "Teenage Mutant Ninja Turtles",
          img: "https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png",
        },
      ];

    case "Shueisha":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "One Piece",
          value: "One Piece",
          img: "https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png",
        },
        {
          name: "Black Clover",
          value: "Black Clover",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76af57fc-7d8b-4116-8c09-75841b6d2da8/dbmt5i0-681aa9ed-9f39-43f6-9d29-cfb23030bf9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2YWY1N2ZjLTdkOGItNDExNi04YzA5LTc1ODQxYjZkMmRhOFwvZGJtdDVpMC02ODFhYTllZC05ZjM5LTQzZjYtOWQyOS1jZmIyMzAzMGJmOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8r1Wcr1xhY_GfHs_ljKeHjTmWd8AhzMSOpJFOeIhotk",
        },
        {
          name: "Dragon Ball",
          value: "Dragon Ball",
          img: "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png",
        },
        {
          name: "Demon Slayer",
          value: "Demon Slayer",
          img: "https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png",
        },
        {
          name: "Jujutsu Kaisen",
          value: "Jujutsu Kaisen",
          img: "https://i.pinimg.com/originals/66/fd/03/66fd03b4ab97f1d45e2bfc5e00f94a2f.png",
        },
        {
          name: "Bleach",
          value: "Bleach",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg",
        },
        {
          name: "Attack on Titan",
          value: "Attack on Titan",
          img: "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png",
        },
        {
          name: "Naruto Shippuden",
          value: "Naruto Shippuden",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw",
        },
        {
          name: "One Punch Man",
          value: "One Punch Man",
          img: "https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg",
        },
        {
          name: "Chainsaw Man",
          value: "Chainsaw Man",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png",
        },
        {
          name: "Metal Alchemist",
          value: "Metal Alchemist",
          img: "https://m.media-amazon.com/images/I/71p7ercPcHL.jpg",
        },
      ];

    case "Warner Bros":
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: "Ben 10",
          value: "Ben 10",
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b700c630-9435-4853-b567-d025115b827b/degakzn-576504c0-f8f6-40f0-b130-3a19544a0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3MDBjNjMwLTk0MzUtNDg1My1iNTY3LWQwMjUxMTViODI3YlwvZGVnYWt6bi01NzY1MDRjMC1mOGY2LTQwZjAtYjEzMC0zYTE5NTQ0YTBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yPaYT4GYrakHIDBEXastMExHC4xVn4_kUFmgvd5J7sA",
        },
        {
          name: "Supernatural",
          value: "Supernatural",
          img: "https://supernaturalmerch.store/wp-content/uploads/2020/10/Supernatural-Store-logo-1-1.png",
        },
      ];

    case 'Super Sentai':
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: 'Power Rangers',
          value: 'Power Rangers',
          img: 'https://static.wikia.nocookie.net/logopedia/images/7/71/MMPR_Era_Logo.png'
        }
      ]

    case 'SEGA':
      return [
        {
          name: "All teams",
          value: "All",
          img: "",
        },
        {
          name: 'Sonic Universe',
          value: 'Sonic Universe',
          img: 'https://static.wikia.nocookie.net/sonic/images/9/95/Sonic_Universe_Logo.png'
        },
        {
          name: 'Mario Universe',
          value: 'Mario Universe',
          img: 'https://ssb.wiki.gallery/images/9/96/MarioTitle.svg'
        }
      ]
    default:
      return [];
  }
}

export const ALLUNIVERSESWITHTEAMS: UniversesWithItsTeams[] = [
  {
    "info": {
      "value": "Marvel Comics",
      "name": "Marvel"
    },
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png",
    "teams": [
      {
        "name": "Asgardians",
        "value": "Asgardians",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deqsmlv-740da833-0582-4672-9c63-a58f1f79565c.png/v1/fill/w_638,h_604/asgard_logo_by_spiderbyte64_deqsmlv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA0IiwicGF0aCI6IlwvZlwvYTIxYzI4MTYtNDlkNC00YTViLWI2ZGItNzYzNGE1ZWE4NjcxXC9kZXFzbWx2LTc0MGRhODMzLTA1ODItNDY3Mi05YzYzLWE1OGYxZjc5NTY1Yy5wbmciLCJ3aWR0aCI6Ijw9NjM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R5bMAGrtXXim7EM_A84hkucgZewYCUOzB8_Uevmkwlc"
      },
      {
        "name": "Agents of Atlas",
        "value": "Agents of Atlas",
        "img": "https://static.wikia.nocookie.net/marveldatabase/images/7/7c/Agents_of_Atlas_Vol_3_4_Logo.png"
      },
      {
        "name": "Avengers",
        "value": "Avengers",
        "img": "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png"
      },
      {
        "name": "Avengers-Original",
        "value": "Avengers-Original",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA"
      },
      {
        "name": "Black Order",
        "value": "Black Order",
        "img": "https://static.wikia.nocookie.net/marveldatabase/images/0/0a/Black_Order_Vol_1_Logo.png"
      },
      {
        "name": "Brotherhood of Evil Mutants",
        "value": "Brotherhood of Evil Mutants",
        "img": "https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg"
      },
      {
        "name": "Dark avengers",
        "value": "Dark avengers",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14"
      },
      {
        "name": "Defenders",
        "value": "Defenders",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8"
      },
      {
        "name": "Eternals",
        "value": "Eternals",
        "img": "https://www.firstcomicsnews.com/wp-content/uploads/2019/07/Eternals-Logo.png"
      },
      {
        "name": "Fantastic Four",
        "value": "Fantastic Four",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82d0ec62-144a-47ae-aebb-f112f2a3b50b/ddghfpv-954536f0-f6f2-45c9-9f3a-468e21363b42.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyZDBlYzYyLTE0NGEtNDdhZS1hZWJiLWYxMTJmMmEzYjUwYlwvZGRnaGZwdi05NTQ1MzZmMC1mNmYyLTQ1YzktOWYzYS00NjhlMjEzNjNiNDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cfqvk-n8nviTwKKScn8a-iJ-Qx1sR_fa9DWOKXx9TBA"
      },
      {
        "name": "Fantastic Four-Original",
        "value": "Fantastic Four-Original",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fantastic_Four_logo_%28blue_and_white%29.svg/800px-Fantastic_Four_logo_%28blue_and_white%29.svg.png"
      },
      {
        "name": "Future Foundation",
        "value": "Future Foundation",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc"
      },
      {
        "name": "Guardians of the Galaxy",
        "value": "Guardians of the Galaxy",
        "img": "https://static.wikia.nocookie.net/logopedia/images/2/2d/GOTG_merch_logo.png"
      },
      {
        "name": "Heroes For Hire",
        "value": "Heroes For Hire",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI"
      },
      {
        "name": "Hulk Family",
        "value": "Hulk Family",
        "img": "https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png"
      },
      {
        "name": "Hydra",
        "value": "Hydra",
        "img": "https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png"
      },
      {
        "name": "Illuminati",
        "value": "Illuminati",
        "img": "https://i.ytimg.com/vi/kMzBLe2X-aE/maxresdefault.jpg"
      },
      {
        "name": "Inhumans",
        "value": "Inhumans",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY"
      },
      {
        "name": "Legion of Monsters",
        "value": "Legion of Monsters",
        "img": "https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg"
      },
      {
        "name": "Marvel Knights",
        "value": "Marvel Knights",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4"
      },
      {
        "name": "Midnight Sons",
        "value": "Midnight Sons",
        "img": "https://image.api.playstation.com/vulcan/ap/rnd/202108/1723/0gPKGnGXftV59bXu6NgH9wXA.png"
      },
      {
        "name": "MCU Villains",
        "value": "MCU Villains",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk"
      },
      {
        "name": "New Mutants",
        "value": "New Mutants",
        "img": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc"
      },
      {
        "name": "New Warriors",
        "value": "New Warriors",
        "img": "https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png"
      },
      {
        "name": "Secret Avengers",
        "value": "Secret Avengers",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI"
      },
      {
        "name": "S.H.I.E.L.D",
        "value": "S.H.I.E.L.D",
        "img": "https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png"
      },
      {
        "name": "Sinister Six",
        "value": "Sinister Six",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo"
      },
      {
        "name": "Spider-Army",
        "value": "Spider-Army",
        "img": "https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg"
      },
      {
        "name": "Symbiotes",
        "value": "Symbiotes",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/087e4223-8511-4640-b630-2e29d173cf6a/dd8o0k1-3ba7b37c-d8b5-4da0-bf85-8fda58951f9c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4N2U0MjIzLTg1MTEtNDY0MC1iNjMwLTJlMjlkMTczY2Y2YVwvZGQ4bzBrMS0zYmE3YjM3Yy1kOGI1LTRkYTAtYmY4NS04ZmRhNTg5NTFmOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H8J5fVOUzAJVgQfHJ-BBHlYvxlgv189xwNv5f7NwiLQ"
      },
      {
        "name": "Thunderbolts",
        "value": "Thunderbolts",
        "img": "https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg"
      },
      {
        "name": "Ultimates",
        "value": "Ultimates",
        "img": "https://static.wikia.nocookie.net/marvelcrossroads/images/2/25/Ultimates_%285641%29.png"
      },
      {
        "name": "Warriors of the Sky",
        "value": "Warriors of the Sky",
        "img": "https://media.pocketgamer.com/artwork/na-25218-1572349365/marvel-future-fight-ios-android-symbols_jpg_820.jpg"
      },
      {
        "name": "Weapon X",
        "value": "Weapon X",
        "img": "https://static.wikia.nocookie.net/logocomics/images/6/6c/Weapon-X_%281995%29-2.png"
      },
      {
        "name": "X-Force",
        "value": "X-Force",
        "img": "https://static.wikia.nocookie.net/logocomics/images/b/b4/X-Force%281991-2002%29.png"
      },
      {
        "name": "X-Men",
        "value": "X-Men",
        "img": "https://seeklogo.com/images/X/x-men-logo-F16A0D1D4D-seeklogo.com.png"
      },
      {
        "name": "X-Men-Original",
        "value": "X-Men-Original",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/X_symbol_from_X-Men_logo.svg/240px-X_symbol_from_X-Men_logo.svg.png"
      },
      {
        "name": "Young avengers",
        "value": "Young avengers",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY"
      }
    ]
  },
  {
    "info": {
      "value": "DC Comics",
      "name": "DC"
    },
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png",
    "teams": [
      {
        "name": "Aquaman Family",
        "value": "Aquaman Family",
        "img": "https://1000logos.net/wp-content/uploads/2018/12/Aquaman-logo.png"
      },
      {
        "name": "Assorted Batman rogues",
        "value": "Assorted Batman rogues",
        "img": "https://i.imgur.com/dpV2h6W.png"
      },
      {
        "name": "Batman Family",
        "value": "Batman Family",
        "img": "https://1.bp.blogspot.com/--SVWM1KMnVg/Xw91Rg-CF5I/AAAAAAAAmYk/31fWiKwl520MlvOY5q3deIke4dibyB8UACLcBGAsYHQ/s1600/228-2288332_gotham-knights-logo-png-transparent-batman-gotham-knights.png"
      },
      {
        "name": "Crimebusters / Watchmen",
        "value": "Crimebusters",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0"
      },
      {
        "name": "Crime Syndicate",
        "value": "Crime Syndicate",
        "img": "https://www.dafont.com/img/illustration/c/r/crime_syndicate.png"
      },
      {
        "name": "Flash Family / Speedsters",
        "value": "Flash Family",
        "img": "https://i.pinimg.com/736x/b4/1c/f7/b41cf7951ae77dcf210eaa20e4b0172b--logos-flash.jpg"
      },
      {
        "name": "Green Lantern Corps",
        "value": "Green Lantern Corps",
        "img": "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png"
      },
      {
        "name": "Injustice League",
        "value": "Injustice League",
        "img": "https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg"
      },
      {
        "name": "Justice League",
        "value": "Justice League",
        "img": "https://heroichollywood.com/wp-content/uploads/2017/09/justice-league-logo-square-4.jpg"
      },
      {
        "name": "Justice League-Original",
        "value": "Justice League-Original",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Justice_League_2017_Movie_Logo.svg/1274px-Justice_League_2017_Movie_Logo.svg.png"
      },
      {
        "name": "Justice League Dark",
        "value": "Justice League Dark",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck"
      },
      {
        "name": "Justice Society of America",
        "value": "Justice Society of America",
        "img": "https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg"
      },
      {
        "name": "Lanterns Corps (All)",
        "value": "Lantern Corps",
        "img": "https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq"
      },
      {
        "name": "The Terrifics",
        "value": "The Terrifics",
        "img": "https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png"
      },
      {
        "name": "Legion of Super-Heroes",
        "value": "Legion of Super-Heroes",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808"
      },
      {
        "name": "Marvel Family",
        "value": "Marvel Family",
        "img": "https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png"
      },
      {
        "name": "New Guardians Corps",
        "value": "New Guardians",
        "img": "https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png"
      },
      {
        "name": "Outsiders",
        "value": "Outsiders",
        "img": "https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png"
      },
      {
        "name": "Secret Society of Super Villains",
        "value": "Secret Society of Super Villains",
        "img": "https://static.wikia.nocookie.net/comicbookuniverse/images/f/f4/Villians.png"
      },
      {
        "name": "Suicide Squad",
        "value": "Suicide Squad",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/de3t87x-a54ce749-e4b1-4bc1-adea-12e26110d5d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGUzdDg3eC1hNTRjZTc0OS1lNGIxLTRiYzEtYWRlYS0xMmUyNjExMGQ1ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jl2NhATv61lvYrInZzGu5VCEV3PYzREWNSIl6_aD0lQ"
      },
      {
        "name": "Superman Family / Kriptonian",
        "value": "Superman Family",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png"
      },
      {
        "name": "Teen Titans",
        "value": "Teen Titans",
        "img": "https://dccomicsnews.com/wp-content/uploads/2018/02/titans-logo-e1518302381244.png"
      }
    ]
  },
  {
    "info": {
      "value": "Shueisha",
      "name": "Shueisha"
    },
    "img": "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png",
    "teams": [
      {
        "name": "One Piece",
        "value": "One Piece",
        "img": "https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png"
      },
      {
        "name": "Black Clover",
        "value": "Black Clover",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76af57fc-7d8b-4116-8c09-75841b6d2da8/dbmt5i0-681aa9ed-9f39-43f6-9d29-cfb23030bf9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2YWY1N2ZjLTdkOGItNDExNi04YzA5LTc1ODQxYjZkMmRhOFwvZGJtdDVpMC02ODFhYTllZC05ZjM5LTQzZjYtOWQyOS1jZmIyMzAzMGJmOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8r1Wcr1xhY_GfHs_ljKeHjTmWd8AhzMSOpJFOeIhotk"
      },
      {
        "name": "Dragon Ball",
        "value": "Dragon Ball",
        "img": "https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png"
      },
      {
        "name": "Demon Slayer",
        "value": "Demon Slayer",
        "img": "https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png"
      },
      {
        "name": "Jujutsu Kaisen",
        "value": "Jujutsu Kaisen",
        "img": "https://i.pinimg.com/originals/66/fd/03/66fd03b4ab97f1d45e2bfc5e00f94a2f.png"
      },
      {
        "name": "Bleach",
        "value": "Bleach",
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg"
      },
      {
        "name": "Attack on Titan",
        "value": "Attack on Titan",
        "img": "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png"
      },
      {
        "name": "Naruto Shippuden",
        "value": "Naruto Shippuden",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw"
      },
      {
        "name": "One Punch Man",
        "value": "One Punch Man",
        "img": "https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg"
      },
      {
        "name": "Chainsaw Man",
        "value": "Chainsaw Man",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png"
      },
      {
        "name": "Metal Alchemist",
        "value": "Metal Alchemist",
        "img": "https://m.media-amazon.com/images/I/71p7ercPcHL.jpg"
      }
    ]
  },
  {
    "info": {
      "value": "Dark Horse Comics",
      "name": "Dark Horse Comics"
    },
    "img": "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png",
    "teams": [
      {
        "name": "Incredible Family",
        "value": "Incredible Family",
        "img": "https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png"
      }
    ]
  },
  {
    "info": {
      "value": "SEGA",
      "name": "SEGA"
    },
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/800px-SEGA_logo.svg.png",
    "teams": [
      {
        "name": "Sonic Universe",
        "value": "Sonic Universe",
        "img": "https://static.wikia.nocookie.net/sonic/images/9/95/Sonic_Universe_Logo.png"
      },
      {
        "name": "Mario Universe",
        "value": "Mario Universe",
        "img": "https://ssb.wiki.gallery/images/9/96/MarioTitle.svg"
      }
    ]
  },
  {
    "info": {
      "value": "IDW Publishing",
      "name": "IDW Publishing"
    },
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png",
    "teams": [
      {
        "name": "Teenage Mutant Ninja Turtles",
        "value": "Teenage Mutant Ninja Turtles",
        "img": "https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png"
      }
    ]
  },
  {
    "info": {
      "value": "Warner Bros",
      "name": "Warner Bros"
    },
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png",
    "teams": [
      {
        "name": "Ben 10",
        "value": "Ben 10",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b700c630-9435-4853-b567-d025115b827b/degakzn-576504c0-f8f6-40f0-b130-3a19544a0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3MDBjNjMwLTk0MzUtNDg1My1iNTY3LWQwMjUxMTViODI3YlwvZGVnYWt6bi01NzY1MDRjMC1mOGY2LTQwZjAtYjEzMC0zYTE5NTQ0YTBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yPaYT4GYrakHIDBEXastMExHC4xVn4_kUFmgvd5J7sA"
      },
      {
        "name": "Supernatural",
        "value": "Supernatural",
        "img": "https://supernaturalmerch.store/wp-content/uploads/2020/10/Supernatural-Store-logo-1-1.png"
      }
    ]
  },
  {
    "info": {
      "value": "Super Sentai",
      "name": "Super Sentai"
    },
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0edd84a8-10d0-47e4-919d-bd37e670d24e/df8jt2a-c466bdae-03b1-4101-9b7d-ff9b390f3690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlZGQ4NGE4LTEwZDAtNDdlNC05MTlkLWJkMzdlNjcwZDI0ZVwvZGY4anQyYS1jNDY2YmRhZS0wM2IxLTQxMDEtOWI3ZC1mZjliMzkwZjM2OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v7K-_yO7lBPO-ovgXQIZ3WQRIkamd7md2DajHQYv52w",
    "teams": [
      {
        "name": "Power Rangers",
        "value": "Power Rangers",
        "img": "https://static.wikia.nocookie.net/logopedia/images/7/71/MMPR_Era_Logo.png"
      }
    ]
  }
]