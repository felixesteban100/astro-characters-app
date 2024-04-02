// import { FaFemale, FaMale } from "react-icons/fa";
// import { Dna, Globe2, Angry, Meh, Smile } from "lucide-react"
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

/* export function GetColorOfTheLogoByTeam(teamName: string): string {
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
} */
export function GetColorOfTheLogoByTeam(teamName: string): string {
  switch (teamName) {
    case 'X-Men':
      return 'rounded-full invert';
    case 'Supernatural':
    case 'X-Men-Original':
    case 'Midnight Sons':
    case 'Justice League-Original':
      return 'invert';

    case "Inhumans":
    case "Symbiotes":
      return 'rounded-full invert-0';

    default: return '';
  }
}

/* export function GetColorLogosByPublisher(publisher: string): string {
  switch (publisher) {
    case 'George Lucas':
    case 'Shueisha':
      return 'invert dark:invert-0'

    case 'Image Comics':
    case 'Dark Horse Comics':
      return 'invert-0 dark:invert'

    default: return ''
  }
} */
export function GetColorLogosByPublisher(publisher: string): string {
  switch (publisher) {
    case 'George Lucas':
    case 'Shueisha':
      return 'invert-0'

    case 'Image Comics':
    case 'Dark Horse Comics':
      return 'invert'

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
    "😃"
    // <Smile size={size} />
    :
    alignment === "bad" ?
      "😡"
      // <Angry size={size} />
      :
      "😐"
  // < Meh size={size} />
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

export function organizedComicsProperty(
  comics: string[] | null | undefined,
  publisher: string
): string[] {
  if (comics === undefined || comics === null) {
    switch (publisher) {
      case "Marvel Comics":
        return [
          "https://cdn.marvel.com/u/prod/marvel/i/mg/8/c0/4cd03c90ea371/clean.jpg",
          "https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg",
          "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
          "https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d/clean.jpg",
          "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
          // "https://images.saymedia-content.com/.image/t_share/MTc0MzA1MTk3OTc4Mjk4MjM2/getting-into-comics-a-general-guide.jpg",
          "https://cdn.marvel.com/u/prod/marvel/i/mg/f/90/64ecae4a89ba7/clean.jpg",
          "https://2.bp.blogspot.com/VgE-mzd8ctoEG3S--deLN57u5tZ4tT2fCIixOS8qiGoK83Nyi9TQpF_tQIM6K7ohGRF0TpQREeQ-=s0?rhlupa=MjcuNjcuMTQyLjI0Nw&rnvuka=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDUuMC4yOyBBU1VTX1owMExEIEJ1aWxkL0xSWDIyRykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYwLjAuMzExMi4xMTYgTW9iaWxlIFNhZmFyaS81MzcuMzY=",
          "https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/5863dd6a70a67/clean.jpg",
          "https://media.comicbook.com/uploads1/2014/11/super-villain-team-up-14-cover-113584.jpg",
        ];

      case "DC Comics":
        return [
          "https://cdn.europosters.eu/image/1300/julisteet/dc-comics-collage-i15088.jpg",
          // "http://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Justice_League_of_America_poster_Issue_1.jpg",
          "https://d.newsweek.com/en/full/975273/heroes-crisis-tom-king-clay-mann-dc-comics.jpg",
          "https://i.pinimg.com/originals/02/fb/e3/02fbe3db4a82b9b15c9afefe2b9799a9.png",
          "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/05/9781608878321.jpg?fit=696%2C862&quality=80&strip=info&ssl=1",
          "https://www.previewsworld.com/news_images/177217_889486_3.jpg",
          "https://m.media-amazon.com/images/I/A1wC3pAqT1L._AC_UF1000,1000_QL80_.jpg",
          "https://jafcomics.com/cdn/shop/products/83016dbf-2d9c-4240-940b-106388de85a0.jpg?v=1674396057",
          "https://cdn11.bigcommerce.com/s-y48kcaxngv/images/stencil/1280x1280/products/6939/8340/Justice_League_34__88416.1671205006.jpg?c=1",
        ];

      case "Shueisha":
        return [
          "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
          "https://m.media-amazon.com/images/I/81X5Wy1uMUL._AC_UF1000,1000_QL80_.jpg",
          "https://pbs.twimg.com/media/FslBjwGWIAElbQv.jpg:large",
          "https://pbs.twimg.com/media/DbefO60WkAA83cL?format=jpg&name=900x900",
        ];

      case "IDW Publishing":
        return [
          "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1643902801105-VUT092WGQWT7VUD66Y8M/Teenage+Mutant+Ninja+Turtles+Reborn+Vol.+1.jpg?format=1000w",
          "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2066186.jpg",
          "https://static.dc.com/dc/files/default_images/BMTMNT_tp_58cb173a8b8fd6.32122101.jpg",
          "https://m.media-amazon.com/images/I/61O+P3mEyZL.jpg",
        ];

      case "George Lucas":
        return [
          "https://cdn.marvel.com/u/prod/marvel/i/mg/c/00/5ff32d6aad522/clean.jpg",
          "https://tools.toywiz.com/_images/_webp/_products/lg/apr221023.webp",
          "https://i0.wp.com/MynockManor.com/wp-content/uploads/2020/11/Star-Wars-11-Full-Cover-Vol-2.jpeg?ssl=1",
          "https://storage.googleapis.com/hipcomic/p/007ce152f644d7971541cb74253b82cf.jpg",
        ];

      case 'Super Sentai':
        return [
          "https://m.media-amazon.com/images/I/71eevKo5wwL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/91aypLcyUZL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/91nMdRAbRgL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/M/MV5BZmI1NWU4OTAtNGYxNi00NjUxLTgwNzktZTNiNTNjMWYzYmFlXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_FMjpg_UX1000_.jpg",
          "https://rangercentral.com/database/2003_ninjastorm/images/data-top-prns.jpg",
          "https://down-id.img.susercontent.com/file/3ea0350a8f5740d63c9b52baa23df007",
          "https://preview.redd.it/so-spd-takes-place-in-2025-which-is-just-a-couple-years-v0-64wq5od2e5qa1.jpg?width=640&crop=smart&auto=webp&s=e28cbbb3a9f98c7e661efdda388dcf4a940b80ec",
          "https://static.wikia.nocookie.net/maswartz-powerverse/images/1/13/MysticForce.jpg",
          "https://2.bp.blogspot.com/-mQYRzr3fJhU/T15nTBfC_5I/AAAAAAAAC8c/UOGc53cQcUA/s1600/Power+Rangers+Operation+Overdrive.jpg",
          "https://3.bp.blogspot.com/-n0hYRpfNkpY/TdOuacfwnfI/AAAAAAAABcs/dou6CuqyW8E/s1600/PowerRangersJungleWallpaper800.jpg",
          "https://images.purexbox.com/a24c51835112f/1280x720.jpg",
        ]

      default:
        return [
          "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
          "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
          "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
          "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
        ];
    }
  }

  return comics;
}