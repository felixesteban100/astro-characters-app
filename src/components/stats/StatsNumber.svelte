<script lang="ts">
    import { onMount } from "svelte";
    import { Progress } from "$lib/components/ui/progress/index.js";
   
    export let statName: string;
    export let statValue: number;

    let value = 0;
    onMount(() => {
      const timer = setTimeout(() => (value = statValue), 500);
      return () => clearTimeout(timer);
    });
  </script>
   
  <div class="w-full flex justify-between items-center gap-10 my-5 ">
    <div class="flex items-center gap-2 ">
        <p class='text-xl lg:text-3xl'><slot name="icon"/></p>
        <div class="fond-bold hidden lg:block">{statName}</div>
    </div>
    <Progress {value} class=" ml-5 " />
    <p class="font-bold ">{value}</p>
</div>