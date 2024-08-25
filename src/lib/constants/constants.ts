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