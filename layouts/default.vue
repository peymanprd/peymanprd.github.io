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
  <div
    id="__default_layout__"
    class="container max-w-4xl mx-auto px-6 min-h-screen flex flex-col"
  >
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
