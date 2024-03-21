// import { FaFemale, FaMale } from "react-icons/fa";
import { Dna, Globe2, Angry, Meh, Smile } from "lucide-react"
import { collectionCharacters } from "./mongodb";
// import { FaRobot } from "react-icons/fa";
// import { RiAliensFill } from 'react-icons/ri'
// import { WithId } from "mongodb";
// import { getPlaiceholder } from "plaiceholder";

export function publisherIMG(publisher: string) {
  switch (publisher) {
    case "Marvel Comics":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";

    case "DC Comics":
      // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png";

    case "Shueisha":
      return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png";

    case "George Lucas":
      return "https://www.lucasfilm.com/app/uploads/logo_home2.png";

    case "Warner Bros":
      // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png";

    case "Dark Horse Comics":
      return "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png";

    case "Image Comics":
      return "https://seeklogo.com/images/I/image-comics-logo-16D25B0126-seeklogo.com.png";

    case "IDW Publishing":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png";

    case "Microsoft":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png";

    case 'Super Sentai':
      return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0edd84a8-10d0-47e4-919d-bd37e670d24e/df8jt2a-c466bdae-03b1-4101-9b7d-ff9b390f3690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlZGQ4NGE4LTEwZDAtNDdlNC05MTlkLWJkMzdlNjcwZDI0ZVwvZGY4anQyYS1jNDY2YmRhZS0wM2IxLTQxMDEtOWI3ZC1mZjliMzkwZjM2OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v7K-_yO7lBPO-ovgXQIZ3WQRIkamd7md2DajHQYv52w"

    case 'SEGA':
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/800px-SEGA_logo.svg.png"

    /**
* "Angel"
* "NBC - Heroes"
* Tempest
* SyFy
* ABC Studios
* Icon Comics
* Universal Studios
* Gemini V
* null
* Star Trek
* Goliath
* Deadpool
* Wildstorm
* South Park
* Sony Pictures
* Vindicator II
* Titan Books
* J. K. Rowling
* Microsoft
* She-Thing
* Rebellion
*
*/

    default:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU";
  }
}

/* CHARACTERS PAGE */

export function GetColorOfTheLogoByTeam(teamName: string): string {
  switch (teamName) {
    case 'X-Men':
      return 'rounded-full invert-0 dark:invert';
    case 'Supernatural':
    case 'X-Men-Original':
    case 'Midnight Sons':
    case 'Justice League-Original':
      return 'invert-0 dark:invert';

    case "Inhumans":
    case "Symbiotes":
      return 'rounded-full invert dark:invert-0';

    default: return '';
  }
}

export function GetColorLogosByPublisher(publisher: string): string {
  switch (publisher) {
    case 'George Lucas':
    case 'Shueisha':
      return 'invert dark:invert-0'

    case 'Image Comics':
    case 'Dark Horse Comics':
      return 'invert-0 dark:invert'

    default: return ''
  }
}

export function GetDimentionsOfTheLogoForCard(publisher: string): string {
  switch (publisher) {
    case 'DC Comics' || 'Microsoft':
      return 'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'

    case 'Warner Bros':
      return 'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'

    default:
      return 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'
  }
}


// export function getGenderIcon(gender: string, size: number) {
//   return gender.toLowerCase() === "male" ?
//     // "🚹"
//     <FaMale size={size} />
//     :
//     gender.toLowerCase() === "female" ?
//       // "🚺"
//       <FaFemale size={size} />
//       :
//       <div></div>

// }

// export function getRaceIcon(race: string, size: number) {
//   return race.toLowerCase().includes("meta") ?
//     // "🧬"
//     <Dna size={40} />
//     :
//     race?.toLowerCase() === "human" ?
//       // "🌎"
//       <Globe2 size={40} />
//       :
//       race?.toLowerCase() === "mutant" ?
//         // "🧬"
//         <Dna size={40} />
//         :
//         race?.toLowerCase() === "android" || race?.toLowerCase() === "cyborg" && (race !== null) ?
//           // "🤖"
//           <FaRobot size={40} />
//           :
//           race?.toLowerCase() === "alien" || race?.toLowerCase() === "eternal" || race?.toLowerCase() === "asgardian" || race?.toLowerCase() === "kryptonian" && (race !== null) ?
//             // "👽"
//             <RiAliensFill size={40} />
//             :
//             // "🌎"
//             <Globe2 size={40} />

// }

export function getAlignmentIcon(alignment: string, size: number) {
  return alignment === "good" ?
    // "😃"
    <Smile size={size} />
    :
    alignment === "bad" ?
      // "😡"
      <Angry size={size} />
      :
      // "😐"
      < Meh size={size} />
}

export function AlignmentTranslator(alignment: string) {
  return alignment === "good" ? "Hero" : alignment === "bad" ? "Villain" : "Anti-Hero"
}

export function getJustTheImagesFromTheImagesObject(images: { [key: string]: string }, otherKey?: string) {
  return Object.entries(images).filter(([key, value]) => key !== otherKey && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => {
    return { key: c[0], value: c[1] }
  })
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


export function getRandomImage(character: Character) {
  const allImages: { key: string, value: string }[] = [
    {
      key: 'md',
      value: character?.images.md,
    },
    ...getJustTheImagesFromTheImagesObject(character?.images)
  ]

  const selectedRandomImage = allImages[Math.floor(Math.random() * allImages.length)]
  // const blurSelectedRandomImage = await dynamicBlurDataUrl(selectedRandomImage.value)

  return {
    selectedRandomImage,
    // blurSelectedRandomImage
  }
}

export function getQueryOptions(
  characterName: string | null,
  side: string | null,
  universe: string | null,
  team: string | null,
  gender: string | null,
  race: string | null,
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
  if (race && race !== "All")
    queryOptions["appearance.race"] = new RegExp(race, "ig");

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