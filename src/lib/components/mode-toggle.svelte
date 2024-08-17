<script lang="ts">
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";

  import { resetMode, setMode, userPrefersMode } from "mode-watcher";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Check } from "lucide-svelte";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" size="icon">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item on:click={() => setMode("light")}>
      Light
      {#if $userPrefersMode === "light"}
        <Check class="text-primary" />
      {/if}
    </DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => setMode("dark")}
      >Dark {#if $userPrefersMode === "dark"}
        <Check class="text-primary" />
      {/if}</DropdownMenu.Item
    >
    <DropdownMenu.Item on:click={() => resetMode()}
      >System {#if $userPrefersMode === "system"}
        <Check class="text-primary" />
      {/if}</DropdownMenu.Item
    >
  </DropdownMenu.Content>
</DropdownMenu.Root>
