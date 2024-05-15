<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
  import {
    ALLALIGMENTS,
    ALLGENDERS,
    ALLRACES,
    SORT_BY_VALUES,
  } from "../lib/constants/constants";
  import { Checkbox } from "../lib/components/ui/checkbox/index";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import type { WithId } from "mongodb";
  import type { Power, Universe, UniverseWithJoinTeams } from "$lib/types";
  // import { Slider } from "$lib/components/ui/slider/index.js";
  import { navigate } from "astro:transitions/client";
  import Sheet from "src/components/Sheet.svelte";
  import { Close } from "$lib/components/ui/sheet";
</script>

<script lang="ts">
  export let characterOrFullName: boolean;
  export let howManyPerPage: number;
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
  export let universesWithTeams: UniverseWithJoinTeams[];

  export let allUniverses: WithId<Universe>[];
  export let allPowers: WithId<Power>[];

  $: characterNameState = characterName;
  $: characterOrFullNameState = characterOrFullName;
  $: howManyPerPageState = howManyPerPage;
  $: sortByState = sortBy;
  $: sortDirectionState = sortDirection;
  $: includesOrExactState = includesOrExact;
  $: genderState = gender;
  $: sideState = side;
  $: raceState = race;
  $: powerState = power;
  $: universeState = universe;
  $: teamState = team;

  $: universeInfo = universesWithTeams.find((c) => c.value === universeState);

  function goPageKeyShortcut(
    e: KeyboardEvent & {
      currentTarget: EventTarget & Window;
    },
  ) {
    if (e.key === "Enter") {
      // Prevent the default behavior (form submission, etc.)
      e.preventDefault();
      document.getElementById("filter_characters")?.click();
      goPageonClick();
    }
  }

  function goPageonClick() {
    navigate(
      `/characters?characterName=${characterNameState}&howManyPerPage=${howManyPerPageState ?? 12}&gender=${genderState}&side=${sideState}&race=${raceState}&power=${powerState}&universe=${universeState}&team=${teamState}&characterOrFullName=${characterOrFullNameState}&includesOrExact=${sortByState === "names_sended" ? false : includesOrExactState}&sortBy=${sortByState}&sortDirection=${sortDirectionState}&currentPage=${1}`,
    );
  }
</script>

<Sheet
  variant={undefined}
  size={"default"}
  ButtonClassName=""
  buttonTriggerId={"filterCharacters"}
  from="characters"
>
  <slot name="trigger" slot="trigger" />

  <div slot="content">
    <div class="h-[850px] w-full overflow-y-scroll">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="flex flex-col gap-10">
        <Label class="flex flex-col gap-5">
          CharacterName
          <Input
            id="name"
            placeholder="batman, superman, iron man, spider-man..."
            bind:value={characterNameState}
          />
        </Label>

        <Label class="flex flex-col gap-5">
          howManyPerPageState
          <!-- <Slider max={60} step={12} bind:value={[howManyPerPageState]} /> -->
          <Input
            type="number"
            id="howManyPerPageState"
            bind:value={howManyPerPageState}
          />
          <!-- <p>{howManyPerPageState}</p> -->
        </Label>

        <div class="flex flex-col gap-5">
          <Label class="flex gap-5 items-center justify-start"
            ><Checkbox bind:checked={characterOrFullNameState} /> Fullname (Checked)
            | CharacterName (Unchecked)
          </Label>
          <Label
            class={`${sortByState === "names_sended" ? "hidden" : "flex"} gap-5 items-center justify-start`}
            ><Checkbox bind:checked={includesOrExactState} /> Include charactes in
            name (checked) | Exact name (Unchecked)
          </Label>
        </div>

        <Label class="flex flex-col gap-5">
          Sort By
          <select
            bind:value={sortByState}
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
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
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
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
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
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
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
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
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value={"All"}>All powers</option>
            {#each allPowers as power}
              <option value={power.value}>{power.name}</option>
            {/each}
          </select>
        </Label>

        <Label class="flex flex-col gap-5">
          Universe
          <select
            bind:value={universeState}
            on:change={() => {
              teamState = "All";
            }}
            class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          >
            <option value={"All"}>All universes</option>
            {#each allUniverses as universe}
              <option value={universe.value}>{universe.name}</option>
            {/each}
          </select>
        </Label>

        {#if universeInfo}
          <Label class="flex flex-col gap-5">
            Team
            <select
              bind:value={teamState}
              class="bg-background border border-foreground/50 text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            >
              <option value="All">All Teams</option>
              {#each universeInfo.teams as team}
                <option value={team.value}>{team.name}</option>
              {/each}
            </select>
          </Label>
        {/if}

        <!-- <p>name: {characterNameState}</p> -->
        <!-- <p>gender: {genderState}</p> -->
        <!-- <p>side: {sideState}</p> -->
        <!-- <p>universe: {universeState}</p> -->
        <Close class="w-full" id="filter_characters">
          <div class="flex flex-row gap-5 items-center justify-center">
            <Button on:click={goPageonClick} type="submit">Submit</Button>
            |
            <p>Press 'ENTER'</p>
          </div>
        </Close>
        <!-- <a
            href={`/characters?characterName=${characterNameState}&howManyPerPage=${howManyPerPageState ?? 12}&gender=${genderState}&side=${sideState}&race=${raceState}&power=${powerState}&universe=${universeState}&team=${teamState}&characterOrFullName=${characterOrFullNameState}&includesOrExact=${includesOrExactState}&sortBy=${sortByState}&sortDirection=${sortDirectionState}&currentPage=${1}`}
            class="flex justify-center items-center gap-5"
          >
            <Button id="filter_characters" type="submit">Submit</Button>
            |
            <p>Press 'ENTER'</p>
          </a> -->
      </div>
    </div>
  </div>
</Sheet>

<!-- <svelte:window on:keydown|preventDefault={(e) => goPage(e)} /> -->
<svelte:window on:keydown={goPageKeyShortcut} />
