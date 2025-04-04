import { collectionCharacters } from "./mongodb";

/* CHARACTERS PAGE */
export function AlignmentTranslator(alignment: string) {
  return alignment === "good" ? "Hero" : alignment === "bad" ? "Villain" : alignment === "neutral" ? "Anti-Hero" : "All"
}

export function BackgroundColorAligment(alignment: string) {
  return alignment === "good" ? "bg-green-800" : alignment === "bad" ? "bg-red-800" : alignment === "neutral" ? "bg-yellow-800" : ""
}

export function BackgroundColorTier(tier: number) {
  switch (tier) {
    case 1:
      return "bg-red-500 text-black"

    case 2:
      return "bg-yellow-500 text-black"

    case 3:
      return "bg-green-500 text-black"

    case 4:
      return "bg-orange-500 text-black"

    case 5:
      return "bg-yellow-800 text-white"

    case 6:
      return "bg-pink-500 text-black"

    case 7:
      return "bg-blue-500 text-black"

    case 8:
      return "bg-cyan-500 text-black"

    case 9:
      return "bg-orange-500 text-black"

    case 10:
      return "bg-purple-500 text-black"

    default:
      return "bg-primary text-primary-foreground"

  }
}

export function BackgroundColorScore(score: number) {
  return "bg-secondary text-secondary-foreground"
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

export function getQueryOptions({
  characterName,
  nameField,
  side,
  universe,
  team,
  gender,
  race,
  power,
  includesOrExact,
}: {
  characterName: string | null,
  nameField: string,
  side: string | null,
  universe: string | null,
  team: string | null,
  gender: string | null,
  race: string | null,
  power: string | null,
  includesOrExact: boolean
}) {
  const queryOptions: QueryOptions = {};

  if (characterName && characterName !== "") {
    const characterNames = characterName.split(",");

    const options: string = includesOrExact ? "ig" : "i"

    const names: RegExp[] = characterNames.reduce((acc, name, index) => {
      // if (index === 0) {
      //   acc.push(new RegExp(includesOrExact ? name.trim() : `^(${name.trim()})$`, options))
      //   return acc
      // };
      acc.push(new RegExp(includesOrExact ? name.trim() : `^(${name.trim()})$`, options))
      return acc;
    }, new Array<RegExp>());

    if (nameField === "name") {
      queryOptions.name = { $in: names };
    } else {
      queryOptions[`biography.${nameField as "fullName"}`] = { $in: names }
    }
  }

  if (side && side !== "All") queryOptions["biography.alignment"] = side;
  if (universe && universe !== "All") {
    queryOptions["biography.publisher.value"] = universe;
    if (team && team !== "All")
      // fix this so that the filters like the avengers doesn't add characters like green goblin because he has the dark avengers
      // queryOptions["connections.groupAffiliation.value"] = new RegExp(
      //   team,
      //   "g"
      // );

      queryOptions["connections.groupAffiliation.value"] = team
    /* new RegExp(`^(\\b${team}\\b|[ ,]${team}\\b)`, "i"); */
  }
  if (gender && gender !== "both") queryOptions["appearance.gender"] = gender;
  if (race && race !== "All") queryOptions["appearance.race"] = new RegExp(race, "ig");
  if (power && power !== "All") queryOptions["powers.value"] = new RegExp(power, "ig");

  return queryOptions;
}

export async function getRandomIdRecursively(queryOptions: QueryOptions) {
  try {
    // const randomCharacter = await collectionCharacters.findOne({
    //   ...queryOptions,
    //   id: parseInt((Math.floor(Math.random() * 862) + 1).toString()),
    // })
    const [randomCharacter] = await collectionCharacters
      .aggregate<CharacterWithJoinTeamUniversePower>(
        joinTeam_universe_power_toCharacter(
          { ...queryOptions },
          "random",
          "desc",
          0,
          1,
          [],
        ),
      )
      .toArray()

    // if (!randomCharacter) {
    //   return getRandomIdRecursively(queryOptions)
    // }
    return randomCharacter.id.toString()
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function getRandomIdsRecursively(queryOptions: QueryOptions, howMany: number) {
  try {
    const randomCharacters = await collectionCharacters
      .aggregate<CharacterWithJoinTeamUniversePower>(
        joinTeam_universe_power_toCharacter(
          { ...queryOptions },
          "random",
          "desc",
          0,
          howMany,
          [],
        ),
      )
      .toArray()


    // if (!randomCharacter) {
    //   return getRandomIdRecursively(queryOptions)
    // }
    return randomCharacters.map(c => {
      if (Number.isNaN(c.id)) return 0
      return c.id
    })
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export const joinTeam_universe_power_toCharacter = (queryOptions: QueryOptions, sortBy: string, sortDirection: string, offset: number, howManyPerPage: number, charactersNames: string[]) => {

  const baseLookups = [
    {
      $lookup: {
        from: "powers",
        localField: "powers",
        foreignField: "id",
        as: "powers",
      },
    },
    {
      $lookup: {
        from: "universes",
        localField: "biography.publisher",
        foreignField: "value",
        pipeline: [{ $project: { teams: 0 } }],
        as: "biography.publisher",
      },
    },
    { $unwind: "$biography.publisher" },
    {
      $lookup: {
        from: "teams",
        localField: "connections.groupAffiliation",
        foreignField: "id",
        pipeline: [{ "$project": { "universe": 0 } }],
        as: "connections.groupAffiliation",
      },
    },
    { $match: { ...queryOptions } },
  ]

  if (sortBy === 'random') {
    return [
      ...baseLookups,
      { $sample: { size: howManyPerPage } },
    ]
  }

  if (charactersNames.length > 1 && sortBy === "names_sended") {
    return [
      {
        $addFields: {
          names_sended: {
            $indexOfArray: [charactersNames.map(c => c.toLowerCase().trim()), { $toLower: "$name" }]
          }
        }
      },
      ...baseLookups,
      { $skip: offset },
      { $limit: howManyPerPage },
      { $sort: { [`${sortBy}`]: sortDirection === "desc" ? -1 : 1 } },
    ]
  }



  return [
    ...baseLookups,
    { $sort: { [`${sortBy}`]: sortDirection === "desc" ? -1 : 1 } },
    { $skip: offset },
    { $limit: howManyPerPage },
  ]
}

/* {
        $lookup: {
          from: "powers",
          localField: "powers",
          foreignField: "id",
          as: "powers",
        },
      },
      {
        $lookup: {
          from: "universes",
          localField: "biography.publisher",
          foreignField: "value",
          pipeline: [{ $project: { teams: 0 } }],
          as: "biography.publisher",
        },
      },
      { $unwind: "$biography.publisher" },
      {
        $lookup: {
          from: "teams",
          localField: "connections.groupAffiliation",
          foreignField: "id",
          pipeline: [{ "$project": { "universe": 0 } }],
          as: "connections.groupAffiliation",
        },
      },
 */


/*  */

/*  */

/* {
      "$lookup": {
        "from": "teams",
        "let": { "groupAffiliation": "$connections.groupAffiliation" },
        "pipeline": [
          {
            "$match": {
              "$expr": {
                "$or": [
                  {
                    "$in": [
                      true,
                      {
                        "$map": {
                          "input": "$$groupAffiliation",
                          "in": {
                            "$regexMatch": {
                              "input": { "$toString": "$$this" },
                              "regex": "$name",
                              "options": "i"
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          { "$project": { "members": 0, "universe": 0 } }
        ],
        "as": "connections.groupAffiliation"
      }
    }, */





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


// // add description to all teams
// const currentTeamsToUpdate: { [key: string]: string } = {}
// // {"db property of collection": "value I want to fill that property with"}

// for (let i = 0; i < Object.entries(currentTeamsToUpdate).length; i++) {
//   const [key, value] = Object.entries(currentTeamsToUpdate)[i];

//   const setData = await collectionTeams.updateOne(
//     { value: key },
//     {
//       $set: {
//         description: value,
//       },
//     },
//   );
// }
// //add description to all teams







/* const currentCharactersToUpdate: { [key: string]: string } = {};
// {"db property of collection": "value I want to fill that property with"}

for (let i = 0; i < Object.entries(currentCharactersToUpdate).length; i++) {
  const [key, value] = Object.entries(currentCharactersToUpdate)[i];

  const setData = await collectionCharacters.updateOne(
    { name: key },
    {
      $set: {
        "biography.origin": value,
      },
    },
  );
}

console.log(characterJoinTeamAndUniverse.map((c) => c.name).join(", "));
 */