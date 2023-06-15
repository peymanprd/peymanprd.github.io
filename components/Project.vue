<script setup lang="ts">
interface Project {
  logo: string
  name: string
  summary: string
  link: string
}
interface Props {
  project: Project
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col gap-8 md:flex-row md:justify-between md:items-center rounded-2xl py-6 px-8 border border-band"
  >
    <div class="flex items-center gap-8">
      <NuxtImg :src="project.logo" />
      <div class="flex flex-col gap-1">
        <h4 class="text-2sm font-medium capitalize text-neutral-200">
          {{ project.name }}
        </h4>
        <p class="text-3sm font-normal text-neutral-400">
          {{ project.summary }}
        </p>
      </div>
    </div>
    <NuxtLink
      :to="project.link"
      class="group/item inline-flex justify-center items-center gap-2 w-full md:w-auto text-xs font-medium text-white py-3 px-6 rounded-lg bg-neutral-850 hover:bg-neutral-800 transition"
    >
      Preview
      <Icon
        name="iconamoon:arrow-top-right-1-bold"
        size="16"
        class="group-hover/item:translate-x-1 transition"
      />
    </NuxtLink>
  </div>
</template>
