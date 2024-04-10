<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Drawer from "$lib/components/ui/drawer";
</script>

<Drawer.Root>
  <div class="flex flex-col justify-center items-center">
    <slot name="display" />
    <Drawer.Trigger>
      <Button variant="outline">
        <slot name="trigger" />
      </Button>
    </Drawer.Trigger>
  </div>
  <Drawer.Content class="mb-32">
    <slot name="content" />
  </Drawer.Content>
</Drawer.Root>
