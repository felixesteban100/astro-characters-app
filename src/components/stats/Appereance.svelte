<script lang="ts">
    import {
      BarChart,
      Axe,
      Shield,
      Brain,
      CloudLightning,
      ChevronsUp,
      Sword,
    } from "lucide-svelte";
  import StatsNumber from "./StatsNumber.svelte";
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


<div class="w-full flex justify-center items-center flex-col">
    <StatsString
      statName="Gender"
      statValue={appereance.gender}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Race"
      statValue={appereance.race ?? "unknown"}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Height"
      statValue={`${appereance.height[0] ?? "unknown''"} | ${appereance.height[1] ?? "unknown cm"}`}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Weight"
      statValue={`${appereance.weight[0] ?? "unknown lb"} | ${appereance.weight[1] ?? "unknown kg"}`}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Eye color"
      statValue={appereance.eyeColor}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Hair color"
      statValue={appereance.hairColor}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
    <StatsString
      statName="Age"
      statValue={appereance.age}
    >
      <!-- <Sword slot="icon" /> -->
    </StatsString>
  </div>