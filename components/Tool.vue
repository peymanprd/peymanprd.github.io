<script setup lang="ts">
interface Tool {
  iconName: string
  name: string
  summary: string
  link: string
}
interface Props {
  tool: Tool
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="tool.link"
    target="_blank"
    class="group/item flex items-center gap-2 w-full md:w-auto text-xs font-medium text-white py-4 px-5 rounded-xl hover:bg-neutral-850 transition"
  >
    <div
      class="flex items-center gap-5 group-hover/item:translate-x-1 transition"
    >
      <Icon :name="tool.iconName" size="34" />
      <div class="flex flex-col gap-1">
        <h4 class="text-3sm font-medium capitalize text-neutral-200">
          {{ tool.name }}
        </h4>
        <p class="text-3sm font-normal text-neutral-400 leading-5">
          {{ tool.summary }}
        </p>
      </div>
    </div>
    <Icon
      name="iconamoon:arrow-top-right-1-bold"
      size="18"
      class="mr-1 ml-auto invisible group-hover/item:visible transition"
    />
  </NuxtLink>
</template>
