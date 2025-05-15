<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    ALLALIGMENTS,
    ALLGENDERS,
    ALLRACES,
  } from "../lib/constants/constants";
  import type { WithId } from "mongodb";
  import { navigate } from "astro:transitions/client";
  import Sheet from "src/components/Sheet.svelte";
  import { Close } from "$lib/components/ui/sheet";
  import SelectForFilter from "./SelectForFilter.svelte";
</script>

<script lang="ts">
  export let href: string;
  export let gender: string;
  export let side: string;
  export let race: string;
  export let power: string;
  export let universe: string;
  // export let team: string;
  export let universesWithTeams: UniverseWithJoinTeams[];

  export let allUniverses: WithId<Universe>[];
  export let allPowers: WithId<Power>[];

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

  // let teamState = getStateVariableFormatted(
  //   team,
  //   universeInfo?.teams,
  //   "All teams",
  // );

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
      // `${href}&gender=${genderState.value}&side=${sideState.value}&race=${raceState.value}&power=${powerState.value}&universe=${universeState.value}&team=${teamState.value}`,
      `${href}&gender=${genderState.value}&side=${sideState.value}&race=${raceState.value}&power=${powerState.value}&universe=${universeState.value}`,
    );
  }
</script>

<Sheet
  variant={"ghost"}
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
            // teamState.value = "All";
            // teamState.label = "All teams";
          }}
          showLabel={true}
        />

        <!-- {#if universeInfo}
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
        {/if} -->

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
