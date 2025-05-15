<script lang="ts" context="module">
  import { Input } from "$lib/components/ui/input/index";
  import Button from "$lib/components/ui/button/button.svelte";
  import { navigate } from "astro:transitions/client";
  import { Hash } from "lucide-svelte";
</script>

<script lang="ts">
  export let howMany: number;
  export let allGenerated: number[];
  export let locked: number[];
  export let valuesFilterParams: string;

  function changeHowMany() {
    if (allGenerated.length < howMany) {
      const howManyAreLeft = howMany - allGenerated.length;

      for (let i = 0; i < howManyAreLeft; i++) {
        allGenerated.push(0); // Add 0 to the end of the array
      }
    }

    if (allGenerated.length > howMany) {
      allGenerated.splice(howMany);
    }

    if (howMany > 0 && howMany < 40) {
      navigate(
        `/random_characters?all=${allGenerated.join("/")}&howMany=${howMany}&locked=${locked.join("/")}${valuesFilterParams}`,
      );
    }
  }
</script>

<div class="flex gap-2">
  <Input class="w-[5rem] h-[4rem] text-2xl" bind:value={howMany} />
  <Button
    size="icon"
    variant="ghost"
    on:click={changeHowMany}
    class="h-[4rem] w-[4rem]"
  >
    <Hash class="h-[2.5rem] w-[2.5rem]" />
  </Button>
</div>
