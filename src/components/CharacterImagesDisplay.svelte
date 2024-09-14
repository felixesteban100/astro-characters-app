<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.ts";
  import { Lightbox } from "svelte-lightbox";
  import { COMICS_DEFAULT } from "$lib/constants/constants";

  export let characterInfoImages: { [key: string]: string };
  export let characterInfoComics: string[] | undefined;
  export let publisherComics: string[] | undefined;
  export let characterInfoName: string;

  const images = Object.entries(characterInfoImages)
    .filter(
      ([key, value]) =>
        // key !== "md" &&
        value !== "-" && value !== "" && !value.includes("/api/images/xs/"),
    )
    .map(([key, value]) => value);
  const comics =
    characterInfoComics && characterInfoComics.length > 0
      ? characterInfoComics
      : publisherComics && publisherComics.length > 0
        ? publisherComics
        : COMICS_DEFAULT;
</script>

<!--  w-[31.25rem] md:w-[31.25rem] lg:w-[50rem] -->

<ScrollArea
  class="~w-[31.25rem]/[50rem] h-[630px] whitespace-nowrap "
  orientation="vertical"
>
  <div class="flex flex-col justify-center items-center gap-5 p-4">
    {#each images as image}
      <figure class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <Lightbox>
            <img
              src={image}
              alt={`Photo by`}
              class="h-[600px] w-[400px] object-cover"
              width={800}
              height={800}
            />
          </Lightbox>
        </div>
        <figcaption class="pt-2 text-xs text-muted-foreground">
          Photo by
          <span class="font-semibold text-foreground">
            {characterInfoName}
          </span>
        </figcaption>
      </figure>
    {/each}
    {#each comics as comic}
      <figure class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <Lightbox>
            <img
              src={comic}
              alt={`Photo by`}
              class="h-[600px] w-[400px] object-cover"
              width={300}
              height={400}
            />
          </Lightbox>
        </div>
        <figcaption class="pt-2 text-xs text-muted-foreground">
          Photo by
          <span class="font-semibold text-foreground">
            {characterInfoName}
          </span>
        </figcaption>
      </figure>
    {/each}
  </div>
</ScrollArea>
