<script setup lang="ts">
interface Project {
  logo: string
  name: string
  summary: string
  link: string
}
interface Props {
  projects: Array<Project>
}
defineProps<Props>()
</script>

<template>
  <SectionBox
    id="p_projects"
    caption="Some portfolio projects"
    class="flex flex-col gap-8"
  >
    <Project
      v-for="(project, projectKey) in projects"
      :key="projectKey"
      :project="project"
    />
  </SectionBox>
</template>
