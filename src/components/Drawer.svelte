<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Drawer from "$lib/components/ui/drawer";
</script>

<Drawer.Root backgroundColor="backdrop-blur-md">
  <div class="flex flex-col justify-center items-center">
    <slot name="display" />
    <Drawer.Trigger>
      <Button variant="outline">
        <slot name="trigger" />
      </Button>
    </Drawer.Trigger>
  </div>
  <Drawer.Content
    class="mb-32 bg-background/20 border-none backdrop-blur-md after:backdrop-blur-md"
  >
    <slot name="content" />
    <Drawer.Close>
      <slot name="close" />
    </Drawer.Close>
  </Drawer.Content>
</Drawer.Root>
