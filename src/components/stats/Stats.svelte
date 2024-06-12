<script lang="ts">
  import {
    Axe,
    Shield,
    Brain,
    ChevronsUp,
    Sword,
    Percent,
    Zap,
  } from "lucide-svelte";
  import StatsNumber from "./StatsNumber.svelte";
  import Powers from "./Powers.svelte";

  export let powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
    total: number;
  };
  export let powers: Power[];

  export let showNameAtAll: boolean = false;
</script>

<!-- class="w-full flex justify-center items-center flex-col" -->
<div
  class=" whitespace-nowrap h-[44rem] w-full flex justify-start items-center flex-col"
>
  <StatsNumber {showNameAtAll} statName="Combat" statValue={powerstats.combat}>
    <Sword slot="icon" />
  </StatsNumber>
  <StatsNumber
    {showNameAtAll}
    statName="Durability"
    statValue={powerstats.durability}
  >
    <Shield slot="icon" />
  </StatsNumber>
  <StatsNumber
    {showNameAtAll}
    statName="Intelligence"
    statValue={powerstats.intelligence}
  >
    <Brain slot="icon" />
  </StatsNumber>
  <StatsNumber {showNameAtAll} statName="Power" statValue={powerstats.power}>
    <Zap slot="icon" />
  </StatsNumber>
  <StatsNumber {showNameAtAll} statName="Speed" statValue={powerstats.speed}>
    <ChevronsUp slot="icon" />
  </StatsNumber>
  <StatsNumber
    {showNameAtAll}
    statName="Strength"
    statValue={powerstats.strength}
  >
    <Axe slot="icon" />
  </StatsNumber>
  <StatsNumber {showNameAtAll} statName="Total" statValue={powerstats.total}>
    <Percent slot="icon" />
  </StatsNumber>
  <Powers {powers} />
</div>
