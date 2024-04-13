<script lang="ts">
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Button from "$lib/components/ui/button/button.svelte";
  import { navigate } from "astro:transitions/client";

  //   const isDesktop = Med../lib/constants/constantsdth: 768px)");

  //   let count = 20;
  $: siblingCount = /* $isDesktop ? */ 1 /* : 0 */;

  export let url: string;

  export let currentPage: string;
  export let countItems: number;
  export let howManyPerPage: number;

  function createPageURL(pageNumber: number) {
    return `${url}${pageNumber}`;
  }
</script>

<Pagination.Root
  count={countItems}
  perPage={howManyPerPage}
  {siblingCount}
  let:pages
  page={parseInt(currentPage)}
>
  <Pagination.Content class="my-10">
    <Pagination.Item>
      <Pagination.PrevButton
        on:click={(e) =>
          navigate(`${createPageURL(parseInt(currentPage) - 1)}`)}
      >
        <ChevronLeft class="h-4 w-4" />
        <span class="hidden sm:block">Previous</span>
      </Pagination.PrevButton>
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <Button
            on:click={(e) => navigate(`${createPageURL(page.value)}`)}
            variant={currentPage == page.value ? "outline" : "ghost"}
          >
            {page.value}
          </Button>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <Pagination.NextButton
        on:click={(e) =>
          navigate(`${createPageURL(parseInt(currentPage) - 1)}`)}
      >
        <span class="hidden sm:block">Next</span>
        <ChevronRight class="h-4 w-4" />
      </Pagination.NextButton>
      <!-- </a> -->
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
