<script setup lang="ts">
// interface Status {}
// interface Props {}
// defineProps<Props>()
</script>

<template>
  <div
    class="inline-flex items-center gap-2 px-3 py-1.5 w-max rounded-full bg-neutral-950/20 border border-band/40"
  >
    <span class="relative flex justify-center items-center h-2.5 w-2.5">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
    </span>
    <span class="text-xs font-normal text-brand capitalize">
      currently available for work
    </span>
  </div>
</template>
