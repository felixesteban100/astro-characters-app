<!-- <script lang="ts" context="module">
  import { z } from "zod";

  export const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import { browser } from "$app/environment";
  import * as Form from "@/components/ui/form/index.ts";
  import { Input } from "@/components/ui/input/index.ts";
  import SuperDebug, {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  // import { toast } from "svelte-sonner";

  let data: SuperValidated<Infer<FormSchema>>;
  export { data as form };
  const form = superForm(data, {
    validators: zodClient(formSchema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        console.log("You submitted" + JSON.stringify(f.data, null, 2));
      } else {
        console.log("Please fix the errors in the form.");
      }
    },
  });

  const { form: formData, enhance } = form;
</script>

<form action="/?/username" method="POST" class="w-2/3 space-y-6" use:enhance>
    <Form.Field {form} name="username">
      <Form.Control let:attrs>
        <Form.Label>Username</Form.Label>
        <Input {...attrs} bind:value={$formData.username} />
      </Form.Control>
      <Form.Description>This is your public display name.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Submit</Form.Button>
    {#if browser}
      <SuperDebug data={$formData} />
    {/if}
  </form>
 -->

 <script lang="ts">
  import * as Select from "@/components/ui/select/index.ts";
</script>
 
<Select.Root>
  <Select.Trigger class="w-[180px]">
    <Select.Value placeholder="Theme" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="light">Light</Select.Item>
    <Select.Item value="dark">Dark</Select.Item>
    <Select.Item value="system">System</Select.Item>
  </Select.Content>
</Select.Root>