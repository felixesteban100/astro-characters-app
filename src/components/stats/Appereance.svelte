<script lang="ts">
  import {
    Ruler,
    Weight,
    Eye,
    PaintBucket,
    Calendar,
    Activity,
    Earth,
  } from "lucide-svelte";
  /* import {
    BarChart,
    Axe,
    Shield,
    Brain,
    CloudLightning,
    ChevronsUp,
    Sword,
  } from "lucide-svelte"; */
  import StatsString from "./StatsString.svelte";

  export let appereance: {
    gender: string;
    race: string | null;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
    age: string;
  };
</script>

<div class="w-full flex justify-center items-center flex-col px-5">
  <StatsString statName="Gender" statValue={appereance.gender}>
    <!-- {#if appereance.gender === "female"}
      <Sword slot="icon" />
    {:else if appereance.gender === "male"}
      <Sword slot="icon" />
    {/if} -->
    <Activity slot="icon" />
  </StatsString>
  <StatsString statName="Race" statValue={appereance.race ?? "unknown"}>
    <Earth slot="icon" />
  </StatsString>
  <StatsString
    statName="Height"
    statValue={`${appereance.height[0] && appereance.height[0] !== "-" ? appereance.height[0] : "unknown"} | ${appereance.height[1] && appereance.height[1] !== "-" ? appereance.height[1] : "unknown cm"}`}
  >
    <Ruler slot="icon" />
  </StatsString>
  <StatsString
    statName="Weight"
    statValue={`${appereance.weight[0] && !appereance.weight[0].includes("-") ? appereance.weight[0] : "unknown lb"} | ${appereance.weight[1] && !appereance.weight[1].includes("-") ? appereance.weight[1] : "unknown kg"}`}
  >
    <Weight slot="icon" />
  </StatsString>
  <StatsString
    statName="Eye color"
    statValue={appereance.eyeColor && appereance.eyeColor !== "-"
      ? appereance.eyeColor
      : "Unknown"}
  >
    <Eye slot="icon" />
  </StatsString>
  <StatsString
    statName="Hair color"
    statValue={appereance.hairColor && appereance.hairColor !== "-"
      ? appereance.hairColor
      : "Unknown"}
  >
    <PaintBucket slot="icon" />
  </StatsString>
  <StatsString
    statName="Age"
    statValue={appereance.age && appereance.age !== "-"
      ? appereance.age
      : "Unknown"}
  >
    <Calendar slot="icon" />
  </StatsString>
</div>
