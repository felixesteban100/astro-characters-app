<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  // import { ScrollArea } from "$lib/components/ui/scroll-area/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
  import { ALLALIGMENTS, ALLGENDERS, ALLPOWERS, ALLRACES, ALLUNIVERSE, /* getTeamByUniverse, */ SORT_BY_VALUES } from "../lib/constants/constants";
  import { Checkbox } from "../lib/components/ui/checkbox/index";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import { collectionUniverses } from "$lib/mongodb";
</script>

<script lang="ts">
  export let characterOrFullName: boolean;
  export let includesOrExact: boolean;
  export let sortBy: string;
  export let sortDirection: string;
  export let characterName: string;
  export let gender: string;
  export let side: string;
  export let race: string;
  export let power: string;
  export let universe: string;
  export let team: string;

  $: characterNameState = characterName;
  $: characterOrFullNameState = characterOrFullName;
  $: sortByState = sortBy;
  $: sortDirectionState = sortDirection;
  $: includesOrExactState = includesOrExact;
  $: genderState = gender;
  $: sideState = side;
  $: raceState = race;
  $: powerState = power;
  $: universeState = universe;
  $: teamState = team;


  const universeSelectedInfo = collectionUniverses.findOne({value: universe/* universeState */})

  console.log(universeState)

</script>

<!-- <ScrollArea class="h-[850px] w-full" orientation="vertical"> -->
<div class="h-[850px] w-full overflow-y-scroll">
  <div class="flex flex-col gap-10">
    <Label class="flex flex-col gap-5">
      CharacterName 
      <Input id="name" placeholder="batman, superman, iron man, spider-man..." bind:value={characterNameState} />
    </Label>
  
    <div class="flex flex-col gap-5">
      <Label class="flex gap-5 items-center justify-start"><Checkbox bind:checked={characterOrFullNameState}/> Fullname (Checked) | CharacterName (Unchecked)  </Label>
      <Label class="flex gap-5 items-center justify-start"><Checkbox bind:checked={includesOrExactState}/> Include charactes in name (checked) | Exact name (Unchecked) </Label>
    </div>
  
    <Label class="flex flex-col gap-5">
      Sort By
      <select
        bind:value={sortByState}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each SORT_BY_VALUES as sort}
          <option value={sort}>{sort}</option>
        {/each}
      </select>
    </Label>
  
    <Label class="flex flex-col gap-5">
      Sort Direction
      <RadioGroup.Root bind:value={sortDirectionState}>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="desc" id="desc" />
          <Label for="desc">Descending</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="asc" id="asc" />
          <Label for="asc">Ascending</Label>
        </div>
      </RadioGroup.Root>
    </Label>
    
    <Label class="flex flex-col gap-5">
      Gender
      <select
        bind:value={genderState}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each ALLGENDERS as gender}
          <option value={gender.value}>{gender.name}</option>
        {/each}
      </select>
    </Label>
  
    <Label class="flex flex-col gap-5">
      Aligment
      <select
        bind:value={sideState}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each ALLALIGMENTS as aligment}
          <option value={aligment.value}>{aligment.name}</option>
        {/each}
      </select>
    </Label>
  
    <Label class="flex flex-col gap-5">
      Race
      <select
        bind:value={raceState}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each ALLRACES as race}
          <option value={race.value}>{race.name}</option>
        {/each}
      </select>
    </Label>

    <Label class="flex flex-col gap-5">
      Powers
      <select
        bind:value={powerState}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each ALLPOWERS as power}
          <option value={power.value}>{power.name}</option>
        {/each}
      </select>
    </Label>
  
    <Label class="flex flex-col gap-5">
      Universe
      <select
        bind:value={universeState}
        on:change={() => {
          teamState = "All"
        }}
        class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
      >
        {#each ALLUNIVERSE as universe}
          <option value={universe.value}>{universe.name}</option>
        {/each}
      </select>
    </Label>
  
    <!-- {#await universeSelectedInfo then universeInfo}
    <p>{JSON.stringify(universeInfo)}</p>
    {#if universeInfo && universeInfo.teams.length > 0}
        <Label class="flex flex-col gap-5">
          Team
          <select
            bind:value={teamState}
            class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            {#each universeInfo.teams as team}
              <option value={team.value}>{team.name}</option>
            {/each}
          </select>
        </Label>
      {/if}
    {/await} -->
  
    <!-- <p>name: {characterNameState}</p> -->
    <!-- <p>gender: {genderState}</p> -->
    <!-- <p>side: {sideState}</p> -->
    <p>universe: {universeState}</p>
    <a href={`/characters?characterName=${characterNameState}&gender=${genderState}&side=${sideState}&race=${raceState}&power=${powerState}&universe=${universeState}&team=${teamState}&characterOrFullName=${characterOrFullNameState}&includesOrExact=${includesOrExactState}&sortBy=${sortByState}&sortDirection=${sortDirectionState}&currentPage=${1}`}>
      <Button type="submit">Submit</Button>
    </a>
  </div>
</div>
<!-- </ScrollArea> -->
