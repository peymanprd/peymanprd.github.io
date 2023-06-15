<script setup lang="ts">
//
</script>

<template>
  <footer class="flex flex-col gap-20 mb-4 md:mb-0 mt-auto py-4 relative">
    <div
      class="absolute -top-60 left-0 md:-top-80 md:-left-60 bg-high/90 w-60 h-60 md:w-80 md:h-80 rounded-full blur-2max"
    ></div>
    <Getintouch />
    <div
      class="flex flex-col items-center gap-2 md:flex-row px-4 text-xs font-medium text-zinc-400 dark:text-zinc-500"
    >
      <span class="inline-flex items-center gap-1">
        Created by creative mind &#x1f60e; & Some knowledge
      </span>
      <span class="inline-flex items-center gap-1 md:ml-auto md:mr-0">
        Copyright
        <Icon name="lucide:copyright" size="14" />
        {{ new Date().getFullYear() }}
      </span>
    </div>
  </footer>
</template>
