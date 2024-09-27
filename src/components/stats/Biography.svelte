<script lang="ts">
  import {
    // BarChart,
    // Axe,
    // Shield,
    // Brain,
    // CloudLightning,
    // ChevronsUp,
    Calendar,
    Pencil,
    ALargeSmall,
    Sword,
    Smile,
    Frown,
    Annoyed,
    Users,
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

<div class="w-full flex justify-center items-center flex-col h-full px-5">
  <p class="p-2 text-xl text-center">{biography.origin}</p>
  <!-- <StatsString statName={"Origin"} statValue={biography.origin}>
  </StatsString> -->
  <StatsString statName="FullName" statValue={biography.fullName}>
    <ALargeSmall slot="icon" />
  </StatsString>
  <StatsString
    statName="Alter Egos"
    statValue={biography.alterEgos !== "-" ? biography.alterEgos : "Unknown"}
  >
    <ALargeSmall slot="icon" />
  </StatsString>
  <StatsString
    statName="Aliases"
    statValue={new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(biography.aliases)}
  >
    <ALargeSmall slot="icon" />
  </StatsString>
  <StatsString
    statName="Place of birth"
    statValue={biography.placeOfBirth !== "-"
      ? biography.placeOfBirth
      : "Unknown"}
  >
    <Calendar slot="icon" />
  </StatsString>
  <StatsString
    statName="First Appearance"
    statValue={biography.firstAppearance !== "-"
      ? biography.firstAppearance
      : "Unknown"}
  >
    <Calendar slot="icon" />
  </StatsString>
  <StatsString statName="Publisher" statValue={biography.publisher.name}>
    <Pencil slot="icon" />
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
    <div slot="icon">
      {#if biography.alignment === "good"}
        <Smile />
      {/if}
      {#if biography.alignment === "bad"}
        <Frown />
      {/if}
      {#if biography.alignment === "neutral"}
        <Annoyed />
      {/if}
    </div>
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
    <Users slot="icon" />
  </StatsString>

  <StatsString
    statName="AddedByToTheDB"
    statValue={character_added_by.toString()}
  >
    <Calendar slot="icon" />
  </StatsString>
</div>
