<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
  import { navigate } from "astro:transitions/client";
  import Sheet from "src/components/Sheet.svelte";
  import { Close } from "$lib/components/ui/sheet";
</script>

<script lang="ts">
  export let powerName: string;
  export let howManyPerPage: number;

  $: powerNameState = powerName;
  $: howManyPerPageState = howManyPerPage;

  function goPageKeyShortcut(
    e: KeyboardEvent & {
      currentTarget: EventTarget & Window;
    },
  ) {
    if (e.key === "Enter") {
      // Prevent the default behavior (form submission, etc.)
      e.preventDefault();
      document.getElementById("filter_characters")?.click();
      goPageonClick();
    }
  }

  function goPageonClick() {
    navigate(
      `/powers?powerName=${powerNameState}&howManyPerPage=${howManyPerPageState ?? 12}&currentPage=${1}`,
    );
  }
</script>

<Sheet
  variant={undefined}
  size={"default"}
  ButtonClassName=""
  buttonTriggerId={"filterCharacters"}
  from="characters"
>
  <slot name="trigger" slot="trigger" />

  <div slot="content">
    <div class="h-[850px] w-full overflow-y-scroll">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="flex flex-col gap-10">
        <Label class="flex flex-col gap-5">
          PowerName
          <Input
            id="name"
            placeholder="flight, energy projection, superhuman strength..."
            bind:value={powerNameState}
          />
        </Label>

        <Label class="flex flex-col gap-5">
          howManyPerPageState
          <!-- <Slider max={60} step={12} bind:value={[howManyPerPageState]} /> -->
          <Input
            type="number"
            id="howManyPerPageState"
            bind:value={howManyPerPageState}
          />
          <!-- <p>{howManyPerPageState}</p> -->
        </Label>

        <!-- <p>name: {characterNameState}</p> -->
        <!-- <p>gender: {genderState}</p> -->
        <!-- <p>side: {sideState}</p> -->
        <!-- <p>universe: {universeState}</p> -->
        <Close class="w-full" id="filter_characters">
          <div class="flex flex-row gap-5 items-center justify-center">
            <Button on:click={goPageonClick} type="submit">Submit</Button>
            |
            <p>Press 'ENTER'</p>
          </div>
        </Close>
        <!-- <a
              href={`/characters?characterName=${characterNameState}&howManyPerPage=${howManyPerPageState ?? 12}&gender=${genderState}&side=${sideState}&race=${raceState}&power=${powerState}&universe=${universeState}&team=${teamState}&characterOrFullName=${characterOrFullNameState}&includesOrExact=${includesOrExactState}&sortBy=${sortByState}&sortDirection=${sortDirectionState}&currentPage=${1}`}
              class="flex justify-center items-center gap-5"
            >
              <Button id="filter_characters" type="submit">Submit</Button>
              |
              <p>Press 'ENTER'</p>
            </a> -->
      </div>
    </div>
  </div>
</Sheet>

<!-- <svelte:window on:keydown|preventDefault={(e) => goPage(e)} /> -->
<svelte:window on:keydown={goPageKeyShortcut} />
