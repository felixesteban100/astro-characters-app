import { collectionCharacters } from "./mongodb";

/* CHARACTERS PAGE */
export function AlignmentTranslator(alignment: string) {
  return alignment === "good" ? "Hero" : alignment === "bad" ? "Villain" : "Anti-Hero"
}


export function getWinnerBetweenTwoCharacters(first: Character, second: Character, firstStats: number, secondStats: number) {
  return firstStats === secondStats ? "Tie" : firstStats > secondStats ? first.name : second.name
}

export function getCharacterStatsNumber(selectedCharacter: Character) {
  return Math.floor(Object.entries(selectedCharacter.powerstats).reduce((acc, [_, value]) => {
    acc += value
    return acc
  }, 0) / 6)
}

export function getQueryOptions(
  characterName: string | null,
  side: string | null,
  universe: string | null,
  team: string | null,
  gender: string | null,
  race: string | null,
  power: string | null,
  characterOrFullName: boolean,
  includesOrExact: boolean
) {
  const queryOptions: QueryOptions = {};

  if (characterName && characterName !== "") {
    const characterNames = characterName.split(",");
    const names: string = characterNames.reduce((acc, name, index) => {
      if (index === 0) return `${name}`;
      acc = `${acc}|${name.trim()}`;
      return acc;
    }, "");

    if (includesOrExact) {
      if (characterOrFullName === false) {
        queryOptions.name = new RegExp(names, "ig"); // works
      } else {
        queryOptions["biography.fullName"] = new RegExp(names, "ig"); // works
      }
    } else {
      if (characterOrFullName === false) {
        queryOptions.name = new RegExp(`^(${names})$`, "i");
      } else {
        queryOptions["biography.fullName"] = new RegExp(`^(${names})$`, "i");
      }
    }
  }

  if (side && side !== "All") queryOptions["biography.alignment"] = side;
  if (universe && universe !== "All") {
    queryOptions["biography.publisher"] = universe;
    if (team && team !== "All")
      // fix this so that the filters like the avengers doesn't add characters like green goblin because he has the dark avengers
      queryOptions["connections.groupAffiliation"] = new RegExp(
        team,
        "g"
      ); /* new RegExp(`^(\\b${team}\\b|[ ,]${team}\\b)`, "i"); */
  }
  if (gender && gender !== "both") queryOptions["appearance.gender"] = gender;
  if (race && race !== "All") queryOptions["appearance.race"] = new RegExp(race, "ig");
  if (power && power !== "All") queryOptions["powers"] = new RegExp(power, "ig");

  return queryOptions;
}

export async function getRandomIdRecursively() {
  try {
    const randomCharacter = await collectionCharacters.findOne({ id: parseInt((Math.floor(Math.random() * 780) + 1).toString()) })
    if (!randomCharacter) {
      return getRandomIdRecursively()
    }
    return randomCharacter?.id.toString()
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}


// to use in any of the pages.astro files
// ADD A NEW PROPERTY USING AI
// // example : {"character_key/property to search each one": "character_value of that property"}
// const currentCharactersToUpdate = {}

// // const allCharacters = await collectionCharacters.find({ }).toArray()
// Object.entries(currentCharactersToUpdate).forEach(([character_name, character_powers/* characters_age */]) => {
//   // const totalPowerstats: number = Object.values(character.powerstats).reduce((acc, cur) => acc + cur)
//   // console.log(`${character_name} has ${character_age}`)
//   const addNewField = collectionCharacters.updateOne({ name: character_name}, { $set: {"powers": character_powers } });
// })

// const allTeams: Team[] = ALLUNIVERSESWITHTEAMS.reduce((allTeams, universe) => {
//   // const img = publisherIMG(team.value)
//   // const teams = getTeamByUniverse(universe.value)
//   universe.teams.forEach((team) => {
//     allTeams.push({
//       ...team,
//       description: "",
//       members: [], // to add all the members all the characters in the mongodb 'characters' collecion must have the groupAffiliation property as an array
//       universe: {...universe.info, img: universe.img},
//       comics: []
//     })
//   })

//   return allTeams
// }, new Array<Team>())

// console.log(allTeams.length)
// console.log(ALLUNIVERSE.length)

// const allCharacters = await collectionCharacters
//   .find({ ...queryOptions })
//   .sort({ [`${sortBy}`]: sortDirection } as Sort)
//   .toArray();

//   // just open the page with the team as a paramentr and the fucntion will ttrigger for that team

// const setData = await collectionTeams.updateMany({value: team}, {
//       $set: {
//         members: allCharacters.map((c) => {
//     return {
//       name: c.name,
//       id: c.id
//     }
//   })
//       }
//     }
// );
// const setData = await collectionCharacters.updateMany({}, [
//     {
//       $set: {
//         "connections.groupAffiliation": { $split: ["$connections.groupAffiliation", ", "] }
//       }
//     }
// ]);