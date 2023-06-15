<script setup lang="ts">
interface Tool {
  iconName: string
  name: string
  summary: string
  link: string
}
interface Props {
  tools: Array<Tool>
}
defineProps<Props>()
</script>

<template>
  <SectionBox caption="Software, tools and languages I use regularly.">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
      <Tool v-for="(tool, toolKey) in tools" :key="toolKey" :tool="tool" />
    </div>
  </SectionBox>
</template>
