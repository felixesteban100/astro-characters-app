<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index";
  import {
    BarChart,
    Eye,
    Library,
    Group,
    PictureInPicture,
  } from "lucide-svelte";
  import Stats from "./stats/Stats.svelte";
  import CharacterImagesDisplay from "./CharacterImagesDisplay.svelte";
  // import CharacterTeamsDisplay from "./CharacterTeamsDisplay.svelte";
  // import CharacterTeamsDisplay from "./CharacterTeamsDisplay.astro";
  import Appereance from "./stats/Appereance.svelte";
  import Biography from "./stats/Biography.svelte";
  //   import {organizedComicsProperty} from '../lib/charactersUtils';

  export let characterInfo: /* Character */ CharacterWithJoinTeamUniversePower;
  export let publisherInfo: Omit<Universe, "teams">;
  export let teams: Omit<Team, "members" | "universe">[];
  export let character_added_by: Date;

  const relativesArr = characterInfo.connections.relatives.split(",");
</script>

<Tabs.Root
  value="Stats"
  class="h-[44rem] w-full flex justify-start flex-col items-center gap-5"
>
  <Tabs.List class="grid w-full grid-cols-5 bg-accent">
    <Tabs.Trigger class="text-base-content hidden md:block" value="Stats">
      Stats
    </Tabs.Trigger>
    <Tabs.Trigger
      class="text-base-content md:hidden flex justify-center"
      value="Stats"
    >
      <BarChart size={20} />
    </Tabs.Trigger>
    <Tabs.Trigger class="text-base-content hidden md:block" value="Appereance">
      Appereance
    </Tabs.Trigger>
    <Tabs.Trigger
      class="text-base-content md:hidden flex justify-center"
      value="Appereance"
    >
      <Eye size={20} />
    </Tabs.Trigger>
    <Tabs.Trigger class="text-base-content hidden md:block" value="Biography">
      Biography
    </Tabs.Trigger>
    <Tabs.Trigger
      class="text-base-content md:hidden flex justify-center"
      value="Biography"
    >
      <Library size={20} />
    </Tabs.Trigger>
    <Tabs.Trigger class="text-base-content hidden md:block" value="Connections">
      Connections
    </Tabs.Trigger>
    <Tabs.Trigger
      class="text-base-content md:hidden flex justify-center"
      value="Connections"
    >
      <Group size={20} />
    </Tabs.Trigger>
    <Tabs.Trigger class="text-base-content hidden md:block" value="Gallery">
      Gallery
    </Tabs.Trigger>
    <Tabs.Trigger
      class="text-base-content md:hidden flex justify-center"
      value="Gallery"
    >
      <PictureInPicture size={20} />
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content class="h-full w-[90%]" value="Stats">
    <Stats
      powerstats={characterInfo.powerstats}
      powers={characterInfo.powers}
      showNameAtAll={true}
    />
  </Tabs.Content>
  <Tabs.Content class="h-full w-[90%]" value="Appereance">
    <Appereance appereance={characterInfo.appearance} />
  </Tabs.Content>
  <Tabs.Content class="h-full w-[90%]" value="Biography">
    <Biography
      biography={characterInfo.biography}
      connections={characterInfo.connections}
      {character_added_by}
    />
  </Tabs.Content>
  <Tabs.Content value="Connections">
    <!-- <slot name="character-images-display"/> -->
    <div
      class="overflow-y-scroll whitespace-nowrap w-[500px] md:w-[500px] lg:w-[800px] h-[630px] space-y-5"
    >
      <div class="flex flex-col gap-5 justify-center items-center">
        <p class="text-3xl font-bold">Teams</p>
        {#if teams.length < 1}
          <p class="text-xl font-medium">No teams</p>
        {/if}

        {#each teams as team}
          <a
            href={`/characters?universe=${characterInfo.biography.publisher.value}&team=${team.value}`}
            class="hover:underline"
          >
            <figure class="shrink-0">
              <div class="overflow-hidden rounded-md">
                <img
                  src={team.logo}
                  alt={`Photo by`}
                  width={300}
                  height={400}
                />
              </div>

              <p class="pt-2 text-xs text-muted-foreground">
                Team - <span class="font-semibold text-foreground"
                  >{team.name}</span
                >
              </p>
            </figure>
          </a>
        {/each}
      </div>
      <div class="flex flex-col gap-5 justify-center items-center">
        <p class="text-3xl font-bold">Relatives</p>
        {#if relativesArr.length < 1}
          <p class="text-xl font-medium">No relatives</p>
        {/if}

        {#each relativesArr as relative}
          <!-- <a href={`/characters`} class="hover:underline"> -->
          <p>{relative}</p>
          <!-- </a> -->
        {/each}
      </div>
    </div>
  </Tabs.Content>
  <Tabs.Content value="Gallery">
    <CharacterImagesDisplay
      characterInfoComics={characterInfo.comics}
      publisherComics={publisherInfo.comics}
      characterInfoImages={characterInfo.images}
      characterInfoName={characterInfo.name}
    />
  </Tabs.Content>
</Tabs.Root>

<!-- characterInfoPublisher={characterInfo.biography.publisher} -->
