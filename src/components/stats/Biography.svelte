<script lang="ts">
  import {
    BarChart,
    Axe,
    Shield,
    Brain,
    CloudLightning,
    ChevronsUp,
    Sword,
    Smile,
    Frown,
    Meh,
  } from "lucide-svelte";
  import StatsNumber from "./StatsNumber.svelte";
  import StatsString from "./StatsString.svelte";

  export let biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  export let connections: {
    groupAffiliation: string;
    relatives: string;
  };

  function publisherIMG(publisher: string) {
    switch (publisher) {
      case "Marvel Comics":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png";

      case "DC Comics":
        // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png";

      case "Shueisha":
        return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png";

      case "George Lucas":
        return "https://www.lucasfilm.com/app/uploads/logo_home2.png";

      case "Warner Bros":
        // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png";

      case "Dark Horse Comics":
        return "https://d2lzb5v10mb0lj.cloudfront.net/dhc/common/dh_direct.png";

      case "Image Comics":
        return "https://seeklogo.com/images/I/image-comics-logo-16D25B0126-seeklogo.com.png";

      case "IDW Publishing":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg/800px-Nickelodeon_Rise_of_the_Teenage_Mutant_Ninja_Turtles.svg.png";

      case "Microsoft":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png";

      case "Super Sentai":
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0edd84a8-10d0-47e4-919d-bd37e670d24e/df8jt2a-c466bdae-03b1-4101-9b7d-ff9b390f3690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlZGQ4NGE4LTEwZDAtNDdlNC05MTlkLWJkMzdlNjcwZDI0ZVwvZGY4anQyYS1jNDY2YmRhZS0wM2IxLTQxMDEtOWI3ZC1mZjliMzkwZjM2OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v7K-_yO7lBPO-ovgXQIZ3WQRIkamd7md2DajHQYv52w";

      case "SEGA":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/800px-SEGA_logo.svg.png";

      /**
       * "Angel"
       * "NBC - Heroes"
       * Tempest
       * SyFy
       * ABC Studios
       * Icon Comics
       * Universal Studios
       * Gemini V
       * null
       * Star Trek
       * Goliath
       * Deadpool
       * Wildstorm
       * South Park
       * Sony Pictures
       * Vindicator II
       * Titan Books
       * J. K. Rowling
       * Microsoft
       * She-Thing
       * Rebellion
       *
       */

      default:
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU";
    }
  }
</script>

<div class="w-full flex justify-center items-center flex-col">
  <StatsString statName="FullName" statValue={biography.fullName}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Alter Egos" statValue={biography.alterEgos}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString
    statName="Aliases"
    statValue={new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(biography.aliases)}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Place of birth" statValue={biography.placeOfBirth}>
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString
    statName="First Appearance"
    statValue={biography.firstAppearance}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
  <StatsString statName="Publisher" statValue={biography.publisher}>
    <img
      src={publisherIMG(biography.publisher)}
      class="h-10 w-auto"
      slot="publisher"
      alt=""
    />
  </StatsString>
  <StatsString
    statName="Aligment"
    statValue={biography.alignment === "good"
      ? "Hero"
      : biography.alignment === "bad"
        ? "Villain"
        : "Anti-hero"}
  >
    {#if biography.alignment === "good"}
      <Smile slot="alignment" />
      {/if}
      {#if biography.alignment === "bad"}
      <Frown slot="alignment" />
      {/if}
    <!-- {:else if biography.alignment === "bad"}
      <Frown slot="alignment" />
    {:else if biography.alignment === "neutral"}
      <Meh slot="alignment" />
    {/if} -->
  </StatsString>

  <StatsString
    statName="Teams"
    statValue={new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(connections.groupAffiliation.split(","))}
  >
    <!-- <Sword slot="icon" /> -->
  </StatsString>
</div>
