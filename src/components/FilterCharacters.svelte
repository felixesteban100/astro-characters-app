<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
  import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../lib/constants";
</script>

<script lang="ts">
  export let characterName: string;
  export let gender: string;
  export let side: string;
  export let race: string;
  export let universe: string;
  export let team: string;

  $: characterNameState = characterName;
  $: genderState = gender;
  $: sideState = side;
  $: raceState = race;
  $: universeState = universe;
  $: teamState = team;
</script>

<div class="flex flex-col gap-10">
  <Label class="flex flex-col gap-5"
    >CharacterName <Input id="name" bind:value={characterNameState} /></Label
  >

  <Label class="flex flex-col gap-5"
    >Gender
    <select
      bind:value={genderState}
      class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
    >
      {#each ALLGENDERS as gender}
        <option value={gender.value}>{gender.name}</option>
      {/each}
    </select>
  </Label>

  <Label class="flex flex-col gap-5"
    >Aligment
    <select
      bind:value={sideState}
      class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
    >
      {#each ALLALIGMENTS as aligment}
        <option value={aligment.value}>{aligment.name}</option>
      {/each}
    </select>
  </Label>

  <Label class="flex flex-col gap-5"
    >Race
    <select
      bind:value={raceState}
      class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
    >
      {#each ALLRACES as race}
        <option value={race.value}>{race.name}</option>
      {/each}
    </select>
  </Label>

  <Label class="flex flex-col gap-5"
    >Universe
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

  {#if getTeamByUniverse(universeState).length > 0}
  <Label class="flex flex-col gap-5"
    >Team
    <select
      bind:value={teamState}
      class="bg-background border border-foreground text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
    >
      {#each getTeamByUniverse(universeState) as team}
        <option value={team.value}>{team.name}</option>
      {/each}
    </select>


      </Label>
  {/if}

  <!-- <p>name: {characterNameState}</p> -->
  <!-- <p>gender: {genderState}</p> -->
  <!-- <p>side: {sideState}</p> -->
  <a href={`/characters?characterName=${characterNameState}&gender=${genderState}&side=${sideState}&race=${raceState}&universe=${universeState}&team=${teamState}&currentPage=${1}`}>
    <Button type="submit">Submit</Button>
  </a>
</div>
