<script setup lang="ts">
interface Props {
  caption: string
}

defineProps<Props>()
</script>

<template>
  <section class="my-8 md:my-20">
    <h3
      class="text-2xl font-medium text-neutral-100 text-center md:text-left ml-1"
    >
      {{ caption }}
    </h3>
    <slot />
  </section>
</template>
