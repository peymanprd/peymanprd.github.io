<script setup lang="ts">
const route = useRoute()

useHead({
  title: `${route.meta.title}`,
  meta: [
    { name: 'description', content: `${route.meta.content}` },
    { property: 'og:title', content: `[ ${route.meta.title} ]` },
  ],
})
</script>

<template>
  <div id="__default_layout__" class="min-h-screen flex flex-col">
    <!-- <div class="sticky top-0 z-[5] bg-neutral-900/10"> -->
    <TheNavbar />
    <!-- </div> -->
    <main class="max-w-4xl mx-auto px-6 min-h-screen flex flex-col">
      <TheCommand />
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
