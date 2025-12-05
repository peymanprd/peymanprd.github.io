<script setup lang="ts">
import { Activity, Layout, Zap, Server } from "lucide-vue-next";
import type { Project } from "~/types/portfolio";

const projects = shallowRef<Project[]>([
  {
    id: "01",
    title: "Next-Gen Banking Portal",
    role: "Lead Engineer",
    metric: "40% TTI Reduction",
    icon: Layout,
    description:
      "Architected micro-frontend asset management dashboard. Implemented Nuxt 4 server components to minimize hydration costs.",
    stack: ["Vue 3", "Nuxt 4", "Micro-frontends"],
    link: "#",
  },
  {
    id: "02",
    title: "Pro Crypto Terminal",
    role: "Senior Dev",
    metric: "60fps Data Stream",
    icon: Zap,
    description:
      "High-frequency trading interface handling 50k+ updates/sec. Custom virtual scroller implementation for zero-lag rendering.",
    stack: ["Nuxt 3", "WebGL", "WebSocket"],
    link: "#",
  },
  {
    id: "03",
    title: "Aura Design System",
    role: "Architect",
    metric: "100% Test Coverage",
    icon: Server,
    description:
      "Enterprise library used by 5+ products. Automated semantic versioning and changelog generation via CI/CD pipelines.",
    stack: ["Storybook", "Vitest", "Headless UI"],
    link: "#",
  },
]);
</script>

<template>
  <section id="projects" class="pb-24">
    <div class="flex items-center gap-2 mb-4 border-b border-zinc-800/80 pb-4">
      <Activity :size="14" class="text-teal-400" />
      <h2 class="text-xs font-mono text-zinc-400 uppercase tracking-widest">
        Deployed_Units
      </h2>
    </div>

    <div class="flex flex-col gap-1">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
