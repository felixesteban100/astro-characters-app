<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<Tooltip.Root>
  <Tooltip.Trigger><slot name="trigger" /></Tooltip.Trigger>
  <Tooltip.Content>
    <slot name="content" />
  </Tooltip.Content>
</Tooltip.Root>
