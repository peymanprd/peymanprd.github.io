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
      class="inline-flex items-center gap-1 p-2 pr-4 rounded-md border border-band bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-sm font-medium"
    >
      <Icon name="lucide:chevron-left" size="16" />
      Back
    </NuxtLink>
    <ContentRenderer :value="post" class="mt-6" />
  </article>
</template>

<style scoped>
article :deep(h1) {
  @apply text-3xl md:text-subtitle font-semibold text-neutral-100 capitalize mb-6;
}
article :deep(h2) {
  @apply text-lg md:text-xl font-medium text-neutral-200 mb-6;
}

article :deep(p) {
  @apply text-neutral-300;
}

article :deep(pre) {
  @apply w-full overflow-x-auto border border-band bg-neutral-900 py-5 px-6 rounded-xl my-12;
}
article :deep(code) {
  @apply font-['JetBrains_Mono'] text-[.84rem] font-light leading-6;
}
</style>
