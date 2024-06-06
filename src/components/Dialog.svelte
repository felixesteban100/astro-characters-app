<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";

  export let open;
</script>

<Dialog.Root {open}>
  <Dialog.Trigger class={buttonVariants({ variant: "outline" })}>
    <slot name="trigger" />
  </Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title><slot name="title" /></Dialog.Title>
      <Dialog.Description>
        <slot name="description" />
      </Dialog.Description>
    </Dialog.Header>
    <slot name="content" />
    <Dialog.Close>
      <slot name="close" />
    </Dialog.Close>
    <!-- <Dialog.Footer>
      <Button type="submit">Save changes</Button>
    </Dialog.Footer> -->
  </Dialog.Content>
</Dialog.Root>
