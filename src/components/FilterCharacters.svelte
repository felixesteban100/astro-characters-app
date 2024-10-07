<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import { Textarea } from "$lib/components/ui/textarea";
  import {
    ALLALIGMENTS,
    ALLGENDERS,
    ALLRACES,
    NAME_FIELD_VALUES,
    SORT_BY_VALUES,
  } from "../lib/constants/constants";
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
  $: howManyPerPageState = howManyPerPage;
  $: sortDirectionState = sortDirection;

  let nameFieldState = {
    value: nameField,
    label: nameField,
  };

  let sortByState = {
    value: sortBy,
    label: sortBy,
  };

  let includesOrExactState =
    sortByState.value === "names_sended" ? false : includesOrExact;

  // let selectedIncludesOrExactState;

  $: selectedIncludesOrExactState =
    sortByState.value === "names_sended"
      ? "false"
      : includesOrExactState
        ? "true"
        : "false";

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

  $: universeInfo = universesWithTeams.find(
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
    const result = {
      value: value,
      label: value === "All" || value === "both" ? labelForAllValue : value,
    };

    if (labelForAllValue !== "All teams") {
      result.label =
        value === "All" || value === "both" || arrItems === undefined
          ? labelForAllValue
          : arrItems.filter((c) => c.value === value)[0]?.name ??
            labelForAllValue;
    }

    return result;
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
  variant={"secondary"}
  size={"default"}
  ButtonClassName={/* "pointer-events-none" */ "h-[4rem] w-[4rem]"}
  buttonTriggerId={"filterCharacters"}
  from="characters"
  side="right"
>
  <slot name="trigger" slot="trigger" />

  <div slot="content">
    <div class="h-[44rem] w-full overflow-y-scroll">
      <div class="flex flex-col gap-10 p-2">
        <Label class="flex flex-col gap-5 capitalize">
          <!-- {nameFieldState.label} -->
          <SelectForFilter
            bind:selectedValue={nameFieldState}
            label_plural=""
            allItems={NAME_FIELD_VALUES}
            needsAnAllOption={false}
            needsAnBothOption={false}
            label={"Name field"}
            onchangeFunction={() => {}}
            showLabel={false}
          />
          <Textarea
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

        <Label class="flex flex-col gap-5">
          Name Matching Options
          <RadioGroup.Root
            bind:value={selectedIncludesOrExactState}
            onValueChange={(value) => {
              includesOrExactState = value === "true";
              selectedIncludesOrExactState = value;
            }}
            disabled={sortByState.value === "names_sended" ? true : false}
          >
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value={"true"} id="true" />
              <Label for="true">Flexible Name (RegExp Allowed)</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="false" id="false" />
              <Label for="false">Exact Name (No Patterns)</Label>
            </div>
          </RadioGroup.Root>
        </Label>

        <SelectForFilter
          bind:selectedValue={sortByState}
          label_plural=""
          allItems={SORT_BY_VALUES}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"Sort By"}
          onchangeFunction={() => {}}
          showLabel={true}
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
          showLabel={true}
        />

        <SelectForFilter
          bind:selectedValue={sideState}
          label_plural="aligments"
          allItems={ALLALIGMENTS}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"aligment"}
          onchangeFunction={() => {}}
          showLabel={true}
        />

        <SelectForFilter
          bind:selectedValue={raceState}
          label_plural="races"
          allItems={ALLRACES}
          needsAnAllOption={false}
          needsAnBothOption={false}
          label={"race"}
          onchangeFunction={() => {}}
          showLabel={true}
        />

        <SelectForFilter
          bind:selectedValue={powerState}
          label_plural="powers"
          allItems={allPowers}
          needsAnAllOption={true}
          needsAnBothOption={false}
          label={"power"}
          onchangeFunction={() => {}}
          showLabel={true}
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
          showLabel={true}
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
            showLabel={true}
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
