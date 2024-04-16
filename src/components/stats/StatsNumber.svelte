<script lang="ts">
  import { onMount } from "svelte";
  import { Progress } from "$lib/components/ui/progress/index.js";

  export let statName: string;
  export let statValue: number;
  export let showNameAtAll: boolean;

  let value = 0;
  onMount(() => {
    const timer = setTimeout(() => (value = statValue), 2200);
    return () => clearTimeout(timer);
  });
</script>

<!-- grid grid-cols-6 -->
<!-- flex justify-between -->
<div
  class="w-full grid grid-cols-2 lg:grid-cols-[20%_65%_5%] xl:grid-cols-[15%_70%_5%] justify-center items-center gap-5 my-5"
>
  <div class="flex items-center gap-2">
    <p class="text-xl lg:text-3xl"><slot name="icon" /></p>
    {#if showNameAtAll}
      <div class="fond-bold hidden xl:flex">{statName}</div>
    {/if}
  </div>
  <Progress {value} class="w-full hidden lg:flex" />
  <p class="font-bold flex justify-end">{value}</p>
</div>
