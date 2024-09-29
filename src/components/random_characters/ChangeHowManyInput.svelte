<script lang="ts" context="module">
  import { Input } from "$lib/components/ui/input/index";
  import Button from "$lib/components/ui/button/button.svelte";
  import { navigate } from "astro:transitions/client";
  import { Hash } from "lucide-svelte";
</script>

<script lang="ts">
  export let howMany: number;
  export let all: number[];
  export let locked: number[];

  function changeHowMany() {
    navigate(
      `/random_characters?all=${all.join("-")}&howMany=${howMany}&locked=${locked.join("-")}`,
    );
  }
</script>

<div class="flex gap-2">
  <Input class="w-[5rem]" bind:value={howMany} />
  <Button size="icon" on:click={changeHowMany}><Hash /></Button>
</div>
