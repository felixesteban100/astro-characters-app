<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
    import * as Sheet from "$lib/components/ui/sheet";

    export let ButtonClassName: string
</script>

<Sheet.Root>
  <Sheet.Trigger><Button class={ButtonClassName ?? ""} size={"icon"} variant={"ghost"} ><slot name="trigger" /></Button></Sheet.Trigger>
  <Sheet.Content>
    <slot name="content" />
  </Sheet.Content>
</Sheet.Root>
