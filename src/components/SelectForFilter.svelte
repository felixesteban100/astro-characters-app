<script lang="ts" context="module">
  import * as Select from "$lib/components/ui/select/index.js";
  import { Label } from "$lib/components/ui/label/index";
  import type { WithId } from "mongodb";
</script>

<script lang="ts">
  export let selectedValue: { value: string; label: string };
  export let label_plural: string;
  export let allItems: ItemsForFilter;
  export let needsAnAllOption: boolean;
  export let needsAnBothOption: boolean;
  export let label: string;
  export let showLabel: boolean;
  export let onchangeFunction: () => void;

  // console.log(selectedValue);
</script>

<div class="flex flex-col justify-center items-start gap-5">
  {#if showLabel === true}
    <Label class="flex flex-col gap-5 capitalize">
      {label}
    </Label>
  {/if}
  <Select.Root
    bind:selected={selectedValue}
    onSelectedChange={() => onchangeFunction()}
    portal={null}
  >
    <Select.Trigger>
      <Select.Value class="capitalize" placeholder={`Select a ${label}`} />
    </Select.Trigger>
    <Select.Content class="max-h-[12rem] overflow-y-scroll capitalize">
      <Select.Group>
        {#if needsAnAllOption === true}
          <Select.Item value={"All"}>All {label_plural}</Select.Item>
        {/if}
        {#if needsAnBothOption === true}
          <Select.Item value={"both"}>Both {label_plural}</Select.Item>
        {/if}
        {#each allItems as item}
          <Select.Item class="capitalize" value={item.value} label={item.name}>
            <!-- {item.id != null && `${item.id} -`} -->
            {item.name}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
  </Select.Root>
</div>
