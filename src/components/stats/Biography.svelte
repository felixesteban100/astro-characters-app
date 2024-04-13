<script lang="ts">
  import {
    // BarChart,
    // Axe,
    // Shield,
    // Brain,
    // CloudLightning,
    // ChevronsUp,
    // Sword,
    Smile,
    Frown,
    // Meh,
  } from "lucide-svelte";
  // import StatsNumber from "./StatsNumber.svelte";
  import StatsString from "./StatsString.svelte";

  export let biography: {
    fullName: string;
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
</script>

<div class="w-full flex justify-center items-center flex-col">
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
      src={biography.publisher.img}
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
</div>
