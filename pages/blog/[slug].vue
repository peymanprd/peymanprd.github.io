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
      class="inline-flex items-center gap-1 rounded-md border border-band bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-sm font-medium"
    >
      <span class="inline-flex justify-center items-center py-2 px-3">
        Back
      </span>
      <span
        class="inline-flex justify-center items-center p-2 border-l border-l-band"
      >
        <Icon name="solar:undo-left-bold" size="16" />
      </span>
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
  @apply w-full overflow-x-auto border border-band bg-neutral-900 py-3 px-5 rounded-xl my-12;
}
article :deep(code) {
  @apply font-['JetBrains_Mono'] text-[.84rem] font-light leading-6;
}
</style>
