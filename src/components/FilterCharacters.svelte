<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import {
    ALLALIGMENTS,
    ALLGENDERS,
    ALLRACES,
    NAME_FIELD_VALUES,
    SORT_BY_VALUES,
  } from "../lib/constants/constants";
  import { Checkbox } from "../lib/components/ui/checkbox/index";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";
  import type { WithId } from "mongodb";
  import { navigate } from "astro:transitions/client";
  import Sheet from "src/components/Sheet.svelte";
  import { Close } from "$lib/components/ui/sheet";
  import { Label } from "$lib/components/ui/label/index";
  import SelectForFilter from "./SelectForFilter.svelte";
</script>

<script lang="ts">
  export let characterName: string;
  export let nameField: string;
  export let howManyPerPage: number;
  export let includesOrExact: boolean;
  export let sortBy: string;
  export let sortDirection: string;
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

  let nameFieldState = {
    value: nameField,
    label: nameField,
  };
  $: howManyPerPageState = howManyPerPage;

  let sortByState = {
    value: sortBy,
    label: sortBy,
  };
  $: sortDirectionState = sortDirection;

  $: includesOrExactState =
    sortByState.value === "names_sended" ? false : includesOrExact;

  let genderState = getStateVariableFormatted(
    gender,
    ALLGENDERS,
    "All genders",
  );

  let sideState = getStateVariableFormatted(
    side,
    ALLALIGMENTS,
    "All aligments",
  );

  let raceState = getStateVariableFormatted(race, ALLRACES, "All races");

  let powerState = getStateVariableFormatted(power, allPowers, "All powers");

  let universeState = getStateVariableFormatted(
    universe,
    allUniverses,
    "All universes",
  );

  let universeInfo = universesWithTeams.find(
    (c) => c.value === universeState.value,
  );

  let teamState = getStateVariableFormatted(
    team,
    universeInfo?.teams,
    "All teams",
  );

  function getStateVariableFormatted(
    value: string,
    arrItems: ItemsForFilter | undefined,
    labelForAllValue: string,
  ) {
    return {
      value: value,
      label:
        value === "All" || value === "both" || arrItems === undefined
          ? labelForAllValue
          : arrItems.filter((c) => c.value === value)[0].name,
    };
  }

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
      `/characters?characterName=${characterNameState}&howManyPerPage=${howManyPerPageState ?? 12}&gender=${genderState.value}&side=${sideState.value}&race=${raceState.value}&power=${powerState.value}&universe=${universeState.value}&team=${teamState.value}&nameField=${nameFieldState.value}&includesOrExact=${sortByState.value === "names_sended" ? false : includesOrExactState}&sortBy=${sortByState.value}&sortDirection=${sortDirectionState}&currentPage=${1}`,
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
      <div class="flex flex-col gap-10 p-2">
        <Label class="flex flex-col gap-5 capitalize">
          {nameFieldState.label}
          <Input
            id="name"
            placeholder={nameFieldState.value === "name"
              ? "batman, superman, iron man, spider-man..."
              : nameFieldState.value === "fullName"
                ? "bruce wayne, clark kent, tony stark, peter parker..."
                : nameFieldState.value === "aliases"
                  ? "dark knight, man of steel, your friendly neighbor spider-man..."
                  : "batman, superman, iron man, spider-man..."}
            bind:value={characterNameState}
          />
        </Label>

        <SelectForFilter
          bind:selectedValue={nameFieldState}
          label_plural=""
          allItems={NAME_FIELD_VALUES}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"Name field"}
          onchangeFunction={() => {}}
        />

        <div class="flex flex-col gap-5">
          <div class="flex gap-2 items-center">
            {#if sortByState.value !== "names_sended"}
              <Checkbox id="regex-ornot" bind:checked={includesOrExactState} />
            {:else}
              <Checkbox id="regex-ornot" checked={true} disabled={true} />
            {/if}
            <Label
              for="regex-ornot"
              class={`${sortByState.value === "names_sended" ? "text-primary" : ""} flex gap-5 items-center justify-start`}
            >
              {#if sortByState.value !== "names_sended"}
                Include charactes in name (checked) | Exact name (Unchecked)
              {:else}
                Write Exact name to find character
              {/if}
            </Label>
          </div>
        </div>

        <SelectForFilter
          bind:selectedValue={sortByState}
          label_plural=""
          allItems={SORT_BY_VALUES}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"Sort By"}
          onchangeFunction={() => {}}
        />

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

        <SelectForFilter
          bind:selectedValue={genderState}
          label_plural="genders"
          allItems={ALLGENDERS}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"gender"}
          onchangeFunction={() => {}}
        />

        <SelectForFilter
          bind:selectedValue={sideState}
          label_plural="aligments"
          allItems={ALLALIGMENTS}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"aligment"}
          onchangeFunction={() => {}}
        />

        <SelectForFilter
          bind:selectedValue={raceState}
          label_plural="races"
          allItems={ALLRACES}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"race"}
          onchangeFunction={() => {}}
        />

        <SelectForFilter
          bind:selectedValue={powerState}
          label_plural="powers"
          allItems={allPowers}
          needsAnAllOption={true}
          needsAnBothOption={false}
          label={"power"}
          onchangeFunction={() => {}}
        />

        <SelectForFilter
          bind:selectedValue={universeState}
          label_plural="universes"
          allItems={allUniverses}
          needsAnAllOption={true}
          needsAnBothOption={false}
          label={"universe"}
          onchangeFunction={() => {
            teamState.value = "All";
            teamState.label = "All teams";
          }}
        />

        {#if universeInfo}
          <SelectForFilter
            bind:selectedValue={teamState}
            label_plural="teams"
            allItems={universeInfo.teams}
            needsAnAllOption={true}
            needsAnBothOption={false}
            label={"team"}
            onchangeFunction={() => {}}
          />
        {/if}

        <Label class="flex flex-col gap-5">
          How many characters per page
          <Input
            type="number"
            id="howManyPerPageState"
            bind:value={howManyPerPageState}
          />
        </Label>

        <Close class="w-full" id="filter_characters">
          <div class="flex flex-row gap-5 items-center justify-center">
            <Button on:click={goPageonClick} type="submit">Submit</Button>
            |
            <p>Press 'ENTER'</p>
          </div>
        </Close>
      </div>
    </div>
  </div>
</Sheet>

<!-- <svelte:window on:keydown|preventDefault={(e) => goPage(e)} /> -->
<svelte:window on:keydown={goPageKeyShortcut} />
