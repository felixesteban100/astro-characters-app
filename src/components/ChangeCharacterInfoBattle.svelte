<script lang="ts">
  import * as Command from "$lib/components/ui/command/index.js";
  import { Loader } from "lucide-svelte";
  import Dialog from "./Dialog.svelte";
  import { navigate } from "astro:transitions/client";

  export let selectedCharacter: CharacterWithJoinTeamUniversePower;
  export let position: string;
  export let otherCharacterId: number;
  export let allCharacters_Id_Name: { name: string; id: number }[];
  const otherPosition: string = position === "first" ? "second" : "first";

  let open = false;
</script>

<Dialog {open}>
  <p slot="trigger">
    Change {selectedCharacter.name}
  </p>
  <p slot="title">Change {selectedCharacter.name}</p>
  <p slot="description">
    type the name of another character in order to replace the current one
  </p>
  <div slot="content">
    <Loader id="loader-dialog" class={`hidden animate-spin text-primary`} />
    <Command.Root class="max-w-[450px] rounded-lg border shadow-md">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          {#each allCharacters_Id_Name as character}
            <Command.Item>
              <button
                on:click={() => {
                  open = false;
                  setTimeout(
                    () =>
                      navigate(
                        `/compare?${position}=${character.id}&${otherPosition}=${otherCharacterId}`,
                      ),
                    500,
                  );
                }}
              >
                <span>{character.id}-{character.name}</span>
              </button>
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </div>
</Dialog>
