<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
  import { ALLPOWERS } from "$lib/constants";

    export let powers: string[];
</script>

<div class="flex flex-col items-center justify-center h-5 my-32 lg:mt-5 gap-5">
    <p class="font-bold text-primary text-xl">Main powers: </p>
    <div class="hidden lg:flex flex-col lg:flex-row justify-center items-center space-x-4">
        {#if powers.length < 1}
        <span class=" font-bold text-xl">Powers unknown.</span>
        {/if}

        {#each powers as power, index }
        <a href={`/characters?power=${power}`} class="hover:underline "><span>{power}</span></a>
            {#if index < powers.length - 1}
                <Separator class="" orientation={"vertical"} />
            {/if}
        {/each}
    </div>
    <div class="flex lg:hidden flex-col lg:flex-row justify-center items-center gap-8 ">
      {#if powers.length < 1}
      <span class=" font-bold text-xl">Powers unknown.</span>
      {/if}

      {#each powers as power }
        <a href={`/characters?power=${power}`} class="hover:underline "><span>{power}</span></a>
      {/each}
  </div>
    <!-- <div>
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
          <p class="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div> -->
</div>