<script lang="ts">
  import {
    BarChart,
    Axe,
    Shield,
    Brain,
    CloudLightning,
    ChevronsUp,
    Sword,
    Percent,
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
</script>

<div class="w-full flex justify-center items-center flex-col">
  <StatsNumber statName="Combat" statValue={powerstats.combat}>
    <Sword slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Durability" statValue={powerstats.durability}>
    <Shield slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Intelligence" statValue={powerstats.durability}>
    <Brain slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Power" statValue={powerstats.power}>
    <CloudLightning slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Speed" statValue={powerstats.speed}>
    <ChevronsUp slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Strength" statValue={powerstats.strength}>
    <Axe slot="icon" />
  </StatsNumber>
  <StatsNumber statName="Total" statValue={powerstats.total}>
    <Percent slot="icon" />
  </StatsNumber>
  <Powers {powers} />
</div>
