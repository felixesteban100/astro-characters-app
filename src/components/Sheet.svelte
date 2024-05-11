<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Sheet from "$lib/components/ui/sheet";

  export let ButtonClassName: string;
  export let variant:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | undefined;
  export let size: "default" | "sm" | "lg" | "icon" | undefined;
  export let buttonTriggerId: string;
</script>

<Sheet.Root>
  <Sheet.Trigger>
    <Button
      class={ButtonClassName ?? ""}
      size={size ?? "icon"}
      variant={variant ?? "ghost"}
      id={buttonTriggerId}
    >
      <slot name="trigger" />
    </Button>
  </Sheet.Trigger>
  <Sheet.Content>
    <slot name="content" />
  </Sheet.Content>
</Sheet.Root>
