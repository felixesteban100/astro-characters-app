<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";

    export let powers: string[];
</script>

<div class="flex flex-col items-center justify-center h-5 mt-5 gap-5">
    <p class="font-bold text-primary text-xl">Powers: </p>
    <div class="flex justify-center items-center space-x-4">
        {#if powers.length < 1}
        <span class=" font-bold text-xl">Powers unknown.</span>
        {/if}
        {#each powers as power, index }
            <span>{power}</span>
            {#if index < powers.length - 1}
                <Separator class="" orientation={"vertical"} />
            {/if}
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