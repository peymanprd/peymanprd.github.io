<script setup lang="ts">
const route = useRoute()

const { data: post }: null | any = await useAsyncData(
  `content-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
)
</script>

<template>
  <article class="py-10">
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-1 p-2 pr-4 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium"
    >
      <Icon name="lucide:chevron-left" size="16" />
      Back
    </NuxtLink>
    <ContentRenderer :value="post" class="mt-6" />
  </article>
</template>

<style scoped>
article :deep(h1) {
  @apply text-2xl md:text-3xl font-medium text-neutral-900 dark:text-neutral-100 mb-6;
}
article :deep(h2) {
  @apply text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-6;
}

article :deep(p) {
  @apply text-neutral-700 dark:text-neutral-300;
}

article :deep(pre) {
  @apply w-full overflow-x-auto bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md dark:border dark:border-neutral-700 mt-6;
}
article :deep(code) {
  @apply font-['JetBrains_Mono'] text-[.86rem] leading-6;
}
</style>
