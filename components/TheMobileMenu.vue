<script setup lang="ts">
interface Props {
  visible: boolean
}
defineProps<Props>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="md:hidden mx-auto w-full p-4 absolute top-0 left-0 z-10 transition-all"
    >
      <div
        class="flex flex-col gap-2 w-full overflow-hidden rounded-xl bg-neutral/60 backdrop-blur-md shadow-xl border border-band shadow-neutral-950"
      >
        <NuxtLink
          to="/about"
          class="inline-flex items-center py-4 px-8 text-neutral-200"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/#p_services"
          class="inline-flex items-center py-4 px-8 text-neutral-200"
        >
          Services
        </NuxtLink>
        <!-- <NuxtLink
          to="/blog"
          class="inline-flex items-center py-4 px-8 text-neutral-200"
        >
          Blog
        </NuxtLink> -->
        <NuxtLink
          to="/"
          class="inline-flex items-center py-4 px-8 text-neutral-200"
        >
          Stack
        </NuxtLink>
      </div>
    </div>
  </Teleport>
</template>
