export const CHARACTERS_PER_PAGE = 4;

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
]

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

export const SORT_BY_VALUES = [
  { name: "names_sended", value: "names_sended" },
  // { name: "random", value: "random" },
  { name: "name", value: "name" },
  { name: "id", value: "id" },
  { name: "_id", value: "_id" },
  { name: "powerstats.power", value: "powerstats.power" },
  { name: "powerstats.intelligence", value: "powerstats.intelligence" },
  { name: "powerstats.strength", value: "powerstats.strength" },
  { name: "powerstats.durability", value: "powerstats.durability" },
  { name: "powerstats.combat", value: "powerstats.combat" },
  { name: "powerstats.speed", value: "powerstats.speed" },
]

export const NAME_FIELD_VALUES = [
  { name: "name", value: "name" },
  { name: "fullName", value: "fullName" },
  { name: "aliases", value: "aliases" },
  { name: "alterEgos", value: "alterEgos" },
]

export const COMICS_DEFAULT = [
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
  "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
]

export const emptyCharacter: CharacterWithJoinTeamUniversePower = {
  "_id": "63744cef81b33ddcb37e913e",
  id: 0,
  name: 'None',
  slug: '0-None',
  powerstats: {
    intelligence: 60,
    strength: 70,
    speed: 60,
    durability: 70,
    power: 80,
    combat: 70,
    total: 79
  },
  appearance: {
    gender: 'Male',
    race: 'Human',
    height: ['', '- cm'],
    weight: ['- lb', '- kg'],
    eyeColor: '-',
    hairColor: '-',
    age: 'Age not available',
    description: ''
  },
  biography: {
    fullName: '-',
    alterEgos: '-',
    aliases: ['-'],
    placeOfBirth: '-',
    firstAppearance: '-',
    publisher: {
      value: 'None',
      name: 'None',
      comics: [],
      logo: 'https://flagsusa.com/wp-content/uploads/2018/01/products-dominicanrepublicgovPS__68148.1514879325.1280.1280.jpg',
      id: 0,
      description: 'None'
    },
    alignment: 'good',
    origin: 'The White Ranger is a powerful version of Tommy Oliver in the Power Rangers franchise, wielding new powers and leading the team with his Tigerzord.'
  },
  work: { occupation: '-', base: '-' },
  connections: {
    groupAffiliation: [
      /* {
        name: 'Power Rangers',
        value: 'Power Rangers',
        description:'A group of teenagers with attitude who morph into superheroes known as the Power Rangers, using their Zords to defend Earth from evil forces, led by villains like Rita Repulsa and Lord Zedd.',
        comics: [],
        id: 58,
        logo:'https://static.wikia.nocookie.net/logopedia/images/7/71/MMPR_Era_Logo.png',
        leaders: []
      } */
    ],
    relatives: '-',
  },
  images: {
    xs: '',
    sm: '',
    md: 'https://i1.sndcdn.com/avatars-PkAmzSOLCdxklQgS-AokumA-t240x240.jpg',
    lg: ''
  },

  powers: [
    /* {
      "_id": "5f6c9b3a3a3a3a3",
      value: 'Enhanced Senses',
      name: 'Enhanced Senses 👀',
      img: 'https://media1.tenor.com/m/0t75i6InJi0AAAAC/reflexes.gif',
      id: 16,
      description: 'Heightened sensory perception.',
      score: 50000,
      tier: 5
    },
    {
      "_id": "5f6c9b3a3a3a3a3",
      value: 'Martial Arts',
      name: 'Martial Arts 🥋',
      img: 'https://media1.tenor.com/m/YqrAOUwcnscAAAAC/dragon-ball-z-dbz.gif',
      id: 58,
      description: 'Expertise in martial arts.',
      score: 60000,
      tier: 6
    } */
  ],
  character_class: 0,
  logo: '',
  tier: 0,
  weaknesses: []
} /* {
  "_id": "5f6c9b3a3a3a3a3",
  "id": 0,
  "name": "None",
  "slug": "0-None",
  "powerstats": {
    "intelligence": 0,
    "strength": 0,
    "speed": 0,
    "durability": 0,
    "power": 0,
    "combat": 0,
    "total": 0
  },
  "appearance": {
    "gender": "None",
    "race": "None",
    "height": [
      "0'00",
      "0 cm"
    ],
    "weight": [
      "0 lb",
      "0 kg"
    ],
    "eyeColor": "None",
    "hairColor": "None",
    "age": "0-0 years old",
    "description": "No one"
  },
  "biography": {
    "fullName": "None",
    "alterEgos": "No alter egos.",
    "aliases": [

    ],
    "placeOfBirth": "None",
    "firstAppearance": "None",
    "publisher": {
      "id": 0,
      name: "None",
      value: "None",
      logo: "",
      comics: [],
      description: ""
    },
    "alignment": "None",
    "origin": "None"
  },
  "work": {
    "occupation": "None",
    "base": "None"
  },
  "connections": {
    "groupAffiliation": [

    ],
    "relatives": "None"
  },
  "images": {
    "xs": "",
    "sm": "",
    "md": "https://i1.sndcdn.com/avatars-PkAmzSOLCdxklQgS-AokumA-t240x240.jpg",
    "lg": ""
  },
  "powers": [

  ],
  "character_class": 0,
  "logo": "",
  "tier": 0,
  "weaknesses": []
} */


// const dc = [
//   37,
//   44,
//   16,
//   41,
//   69,
//   17,
//   65,
//   34,
//   2,
//   5,
//   51,
//   19,
//   18,
//   24,
//   27,
//   21,
//   26,
//   43,
//   20,
//   46,
//   23,
//   42
// ]

// MAYBE THERE IS STILL A MISTAKE AFTER THIS UPDATE... ?

// export const AllTeamsWithId = [
//   { name: 'Flash Family', id: 17 },
//   { name: 'Weapon X', id: 17 }, // 6 // marvel
//   { name: 'Sinister Six', id: 18 },
//   { name: 'Lanterns Corps (All)', id: 18 }, // 67 //dc
// ]

// // export const AllTeamsWithId = [
//   // { name: 'The Avengers', id: 1 },
//   // { name: 'Justice League', id: 2 },
//   // { name: 'Fantastic Four', id: 3 },
//   // { name: 'Guardians of the Galaxy', id: 4 },
//   // { name: 'Justice League-Original', id: 5 },
//   // { name: 'Weapon X', id: 6 },
//   // { name: 'New Warriors', id: 7 },
//   // { name: 'Warriors of the Sky', id: 8 },
//   // { name: 'New Mutants', id: 9 },
//   // { name: 'Legion of Monsters', id: 10 },
//   // { name: 'Inhumans', id: 11 },
//   // { name: 'Black Order', id: 12 },
//   // { name: 'Marvel Knights', id: 13 },
//   // { name: 'Secret Avengers', id: 14 },
//   // { name: 'Jujutsu Kaisen', id: 15 },
//   // { name: 'Batman Family', id: 16 },
//   // { name: 'Flash Family', id: 17 },
//   // { name: 'Sinister Six', id: 18 },
//   // { name: 'Justice Society of America', id: 19 },
//   // { name: 'Secret Society of Super Villains', id: 20 },
//   // { name: 'Marvel Family', id: 21 },
//   // { name: 'Black Clover', id: 22 },
//   // { name: 'Superman Family / Kriptonian', id: 23 },
//   // { name: 'The Terrifics', id: 24 },
//   // { name: 'X-Men', id: 25 },
//   // { name: 'New Guardians Corps', id: 26 },
//   // { name: 'Legion of Super-Heroes', id: 27 },
//   // { name: 'X-Force', id: 28 },
//   // { name: 'Brotherhood of Evil Mutants', id: 29 },
//   // { name: 'Demon Slayer', id: 30 },
//   // { name: 'Defenders', id: 31 },
//   // { name: 'Midnight Sons', id: 32 },
//   // { name: 'Illuminati', id: 33 },
//   // { name: 'Injustice_League', id: 34 },
//   // { name: 'Thunderbolts', id: 35 },
//   // { name: 'Fantastic Four-Original', id: 36 },
//   // { name: 'Aquaman Family', id: 37 },
//   // { name: 'Ultimates', id: 38 },
//   // { name: 'S.H.I.E.L.D', id: 39 },
//   // { name: 'MCU Villains', id: 40 },
//   // { name: 'Crimebusters / Watchmen', id: 41 },
//   // { name: 'Teen Titans', id: 42 },
//   // { name: 'Outsiders', id: 43 },
//   // { name: 'Assorted Batman rogues', id: 44 },
//   // { name: 'Dragon Ball', id: 45 },
//   // { name: 'Suicide Squad', id: 46 },
//   // { name: 'Hulk Family', id: 47 },
//   // { name: 'One Piece', id: 48 },
//   // { name: 'Young avengers', id: 49 },
//   // { name: 'X-Men-Original', id: 50 },
//   // { name: 'Justice_League Dark', id: 51 },
//   // { name: 'One Punch Man', id: 52 },
//   // { name: 'Attack on Titan', id: 53 },
//   // { name: 'Supernatural', id: 54 },
//   // { name: 'Incredible Family', id: 55 },
//   // { name: 'Future Foundation', id: 56 },
//   // { name: 'Metal Alchemist', id: 57 },
//   // { name: 'Power Rangers', id: 58 },
//   // { name: 'Naruto Shippuden', id: 59 },
//   // { name: 'Chainsaw Man', id: 60 },
//   // { name: 'Bleach', id: 61 },
//   // { name: 'Mario Universe', id: 62 },
//   // { name: 'Teenage Mutant Ninja Turtles', id: 63 },
//   // { name: 'Symbiotes', id: 64 },
//   // { name: 'Green Lantern Corps', id: 65 },
//   // { name: 'Heroes For Hire', id: 66 },
//   // { name: 'Lanterns Corps (All)', id: 67 },
//   // { name: 'Asgardians', id: 68 },
//   // { name: 'Crime Syndicate', id: 69 },
//   // { name: 'Eternals', id: 70 },
//   // { name: 'Hydra', id: 71 },
//   // { name: 'Agents of Atlas', id: 72 },
//   // { name: 'Avengers-Original', id: 73 },
//   // { name: 'Ben 10', id: 74 },
//   // { name: 'Dark_avengers', id: 75 },
//   // { name: 'Sonic Universe', id: 76 },
//   // { name: 'Spider-Army', id: 77 },
// // ]