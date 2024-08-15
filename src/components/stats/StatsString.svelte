<script lang="ts">
  export let statName: string;
  export let statValue: string;
</script>

<div class="w-full flex justify-between items-center gap-10 my-5">
  <div class="flex items-center gap-2">
    <p class="text-xl lg:text-3xl"><slot name="icon" /></p>
    <div class="fond-bold hidden lg:block">{statName}</div>
    <!-- <div class="fond-bold block">{statName}</div> -->
  </div>
  <p class="font-bold flex items-center gap-5">
    {statValue}
    <slot name="publisher" /><slot name="alignment" />
  </p>
</div>
