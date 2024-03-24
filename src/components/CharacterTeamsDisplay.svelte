<script lang="ts">
  import type { Character } from "$lib/types";
  import { getTeamByUniverse } from "$lib/constants";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.ts";

  export let characterInfo: Character;

  function getTeamsImagesByCharacter(characterInfo: Character) {
    const imagesget = getTeamByUniverse(
      characterInfo.biography.publisher
    ).reduce((acc, teamToFind) => {
      const teamsByCharacter =
        characterInfo.connections.groupAffiliation.split(/,|;/);
      let imageTeam;

      function findWordBetweenSpaces(
        inputString: string,
        targetWord: string
      ): boolean {
        const regex = new RegExp(`\\b${targetWord}\\b`);
        return regex.test(inputString);
      }

      teamsByCharacter.forEach((team) => {
        if (
          findWordBetweenSpaces(
            team.trim().toLowerCase(),
            teamToFind.value.toLowerCase().trim()
          )
        ) {
          imageTeam = teamToFind;
        }
      });
      if (imageTeam) acc.push(imageTeam);
      return acc;
    }, new Array());

    const uniqueIds = new Set();
    const filteredArray = imagesget.filter((obj: { value: string }) => {
      const value = obj.value;
      if (value !== undefined && !uniqueIds.has(value)) {
        uniqueIds.add(value);
        return true;
      }
      return false;
    });

    return filteredArray;
  }

  const teamsImages = getTeamsImagesByCharacter(characterInfo);

  function GetColorOfTheLogoByTeam(teamName: string): string {
    switch (teamName) {
      case "X-Men":
        return "rounded-full invert";
      case "Supernatural":
      case "X-Men-Original":
      case "Midnight Sons":
      case "Justice League-Original":
        return "invert";

      case "Inhumans":
      case "Symbiotes":
        return "rounded-full invert-0";

      default:
        return "";
    }
  }
</script>

<ScrollArea
  class="w-[500px] lg:w-[800px] h-[660px] whitespace-nowrap rounded-md border"
  orientation="vertical"
>
  <div class="flex flex-col gap-5 justify-center items-center my-5">
    {#each teamsImages as team}
      <a
        href={`/characters?universe=${characterInfo.biography.publisher}&team=${team.value}`}
        class="hover:underline"
      >
        <figure class="shrink-0">
          <div class="overflow-hidden rounded-md">
            <img
              src={team.img}
              alt={`Photo by`}
              class={`${GetColorOfTheLogoByTeam(team.name)}`}
              width={300}
              height={400}
            />
          </div>

          <p class="pt-2 text-xs text-muted-foreground">
            Photo by
            <span class="font-semibold text-foreground">
              {team.name}
            </span>
          </p>
        </figure>
      </a>
    {/each}
  </div>
</ScrollArea>
