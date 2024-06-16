<script lang="ts" context="module">
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input/index";
  import { Label } from "$lib/components/ui/label/index";
  import { navigate } from "astro:transitions/client";
  import Sheet from "src/components/Sheet.svelte";
  import { Close } from "$lib/components/ui/sheet";
  import { Checkbox } from "$lib/components/ui/checkbox";
</script>

<script lang="ts">
  export let powerName: string;
  export let howManyPerPage: number;
  export let tierRange: number[];

  const tiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $: powerNameState = powerName;
  $: tierRangeState = tierRange;
  $: howManyPerPageState = howManyPerPage;

  function addItem(tier: number) {
    tierRangeState = [...tierRangeState, tier];
  }

  function removeItem(tier: number) {
    tierRangeState = tierRangeState.filter((t) => t !== tier);
  }

  function TextColorTier(tier: number) {
    switch (tier) {
      case 1:
        return "text-red-500";
      case 2:
        return "text-yellow-500";
      case 3:
        return "text-green-500";
      case 4:
        return "text-orange-500";
      case 5:
        return "text-yellow-800";
      case 6:
        return "text-pink-500";
      case 7:
        return "text-blue-500";
      case 8:
        return "text-cyan-500";
      case 9:
        return "text-orange-500";
      case 10:
        return "text-purple-500";
      default:
        return "text-primary";
    }
  }

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
      `/powers?powerName=${powerNameState}&howManyPerPage=${howManyPerPageState ?? 12}&currentPage=${1}&tierRange=${tierRangeState.toString()}`,
      // `/powers?powerName=${powerNameState}&howManyPerPage=${howManyPerPageState ?? 12}&currentPage=${1}`,
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
          Power Name
          <Input
            id="name"
            placeholder="flight, energy projection, superhuman strength..."
            bind:value={powerNameState}
          />
        </Label>

        <Label class="flex flex-col gap-5">
          How many per page
          <!-- <Slider max={60} step={12} bind:value={[howManyPerPageState]} /> -->
          <Input
            type="number"
            id="howManyPerPageState"
            bind:value={howManyPerPageState}
          />
          <!-- <p>{howManyPerPageState}</p> -->
        </Label>

        <div class="space-y-5">
          {#each tiers as tier}
            <div class="flex items-center gap-2">
              <Checkbox
                id={`tier-${tier}`}
                checked={tierRangeState.includes(tier)}
                onCheckedChange={(v) => {
                  if (v) {
                    addItem(tier);
                  } else {
                    removeItem(tier);
                  }
                }}
              />

              <Label
                for={`tier-${tier}`}
                class={`font-normal ${TextColorTier(tier)}`}
              >
                Tier {tier}
              </Label>
            </div>
          {/each}
        </div>

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
      </div>
    </div>
  </div>
</Sheet>

<svelte:window on:keydown={goPageKeyShortcut} />
