<script lang="ts">
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Button from "$lib/components/ui/button/button.svelte";
  import { CHARACTERS_PER_PAGE } from "../lib/constants";

  //   const isDesktop = MediaQuery("(min-width: 768px)");

  //   let count = 20;
  $: siblingCount = /* $isDesktop ? */ 1 /* : 0 */;

  export let currentPage: string;
  export let countCharacters: number;
  export let characterOrFullName: boolean;
  export let includesOrExact: boolean;
  export let sortBy: string;
  export let sortDirection: string;
  export let characterName: string;
  export let gender: string;
  export let side: string;
  export let race: string;
  export let universe: string;
  export let team: string;

  function createPageURL(pageNumber: number) {
    return `/characters?characterName=${characterName ?? ""}&gender=${gender ?? "both"}&side=${side ?? "All"}&race=${race ?? "All"}&universe=${universe ?? "All"}&team=${team ?? "All"}&characterOrFullName=${characterOrFullName}&includesOrExact=${includesOrExact}&sortBy=${sortBy}&sortDirection=${sortDirection}&currentPage=${pageNumber}`;
  }
</script>

<Pagination.Root
  count={countCharacters}
  perPage={CHARACTERS_PER_PAGE}
  {siblingCount}
  let:pages
  page={parseInt(currentPage)}
>
  <Pagination.Content>
    <Pagination.Item>
      <a href={`${createPageURL(parseInt(currentPage) - 1)}`}>
        <Pagination.PrevButton>
          <ChevronLeft class="h-4 w-4" />
          <span class="hidden sm:block">Previous</span>
        </Pagination.PrevButton>
      </a>
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <!-- <Pagination.Link {page} isActive={currentPage == page.value}>
            {page.value}
          </Pagination.Link> -->
          <a href={`${createPageURL(page.value)}`}>
            <Button variant={currentPage == page.value ? "outline" : "ghost"}
              >{page.value}</Button
            >
          </a>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <a href={`${createPageURL(parseInt(currentPage) + 1)}`}>
        <Pagination.NextButton>
          <span class="hidden sm:block">Next</span>
          <ChevronRight class="h-4 w-4" />
        </Pagination.NextButton>
      </a>
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
