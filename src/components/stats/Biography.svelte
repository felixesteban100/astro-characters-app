<script lang="ts">
  import {
    // BarChart,
    // Axe,
    // Shield,
    // Brain,
    // CloudLightning,
    // ChevronsUp,
    Sword,
    Smile,
    Frown,
    // Meh,
  } from "lucide-svelte";
  // import StatsNumber from "./StatsNumber.svelte";
  import StatsString from "./StatsString.svelte";

  export let biography: {
    fullName: string;
    origin: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: Omit<Universe, "teams">;
    alignment: string;
  };
  export let connections: {
    groupAffiliation: Omit<Team, "members" | "universe">[];
    relatives: string;
  };
  export let character_added_by: Date;
</script>

<div class="w-full flex justify-center items-center flex-col">
  <p class="p-2 text-xl text-center">{biography.origin}</p>
  <!-- <StatsString statName={"Origin"} statValue={biography.origin}>
  </StatsString> -->
  <StatsString statName="FullName" statValue={biography.fullName}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Alter Egos" statValue={biography.alterEgos}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString
    statName="Aliases"
    statValue={new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(biography.aliases)}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Place of birth" statValue={biography.placeOfBirth}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString
    statName="First Appearance"
    statValue={biography.firstAppearance}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Publisher" statValue={biography.publisher.name}>
    <img
      src={biography.publisher.logo}
      class="h-10 w-auto"
      slot="publisher"
      alt=""
    />
  </StatsString>
  <StatsString
    statName="Aligment"
    statValue={biography.alignment === "good"
      ? "Hero"
      : biography.alignment === "bad"
        ? "Villain"
        : "Anti-hero"}
  >
    {#if biography.alignment === "good"}
      <Smile slot="alignment" />
    {/if}
    {#if biography.alignment === "bad"}
      <Frown slot="alignment" />
    {/if}
    <!-- {:else if biography.alignment === "bad"}
      <Frown slot="alignment" />
    {:else if biography.alignment === "neutral"}
      <Meh slot="alignment" />
    {/if} -->
  </StatsString>

  <StatsString
    statName="Teams"
    statValue={new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(
      connections.groupAffiliation
        .map((c) => c.name)
        .toString()
        .split(","),
    )}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>

  <StatsString
    statName="AddedByToTheDB"
    statValue={character_added_by.toString()}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
</div>
