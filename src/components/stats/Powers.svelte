<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { navigate } from "astro:transitions/client";
  export let powers: Power[];
</script>

<div class="flex flex-col items-center justify-center lg:mt-5 gap-5 w-full">
  <p class="font-bold text-primary text-xl">Main powers:</p>
  <div
    class="flex flex-row flex-wrap justify-center items-center space-x-4 w-full overflow-y-scroll h-[5rem]"
  >
    {#if powers.length < 1}
      <span class=" font-bold text-xl">Powers unknown.</span>
    {/if}

    {#each powers as power, index}
      <div>
        <Button
          variant={"link"}
          class="text-foreground"
          on:click={(e) => navigate(`/characters?power=${power.value}`)}
        >
          <span class="block lg:hidden">{power.name.slice(0, 11)}...</span>
          <span class="hidden lg:block">{power.name}</span>
        </Button>
        {#if index < powers.length - 1}
          <Separator class="" orientation={"vertical"} />
        {/if}
      </div>
    {/each}
  </div>
</div>
