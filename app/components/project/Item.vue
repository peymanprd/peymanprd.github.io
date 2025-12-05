<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import type { Project } from "~/types/portfolio";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <a
    :href="project.link"
    class="group relative flex flex-col md:flex-row gap-6 p-5 -mx-5 rounded-xl hover:bg-zinc-800/20 transition-all duration-300 border border-transparent hover:border-zinc-700/30"
  >
    <!-- ID Column -->
    <div class="hidden md:block pt-1">
      <span
        class="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors"
      >
        0{{ project.id }}
      </span>
    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2"
      >
        <div class="flex items-center gap-3">
          <div
            class="p-1.5 rounded-md bg-zinc-800/60 text-zinc-400 group-hover:text-teal-300 transition-colors"
          >
            <Component :is="project.icon" :size="14" />
          </div>
          <h3
            class="text-zinc-200 font-bold text-sm group-hover:text-teal-400 transition-colors"
          >
            {{ project.title }}
          </h3>
        </div>

        <!-- Metric Badge -->
        <div
          class="self-start md:self-auto flex items-center gap-2 text-[10px] font-mono font-medium text-teal-300/90 bg-teal-950/20 px-2.5 py-0.5 rounded-full border border-teal-900/30 shadow-[0_0_10px_rgba(20,184,166,0.05)]"
        >
          {{ project.metric }}
        </div>
      </div>

      <p
        class="text-xs text-zinc-400 leading-relaxed mb-4 max-w-lg group-hover:text-zinc-300 transition-colors"
      >
        {{ project.description }}
      </p>

      <div
        class="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-600"
      >
        <span class="text-zinc-400 border-r border-zinc-700/30 pr-4">
          {{ project.role }}
        </span>
        <span
          v-for="t in project.stack"
          :key="t"
          class="group-hover:text-zinc-400 transition-colors"
          >{{ t }}</span
        >
      </div>
    </div>

    <!-- Arrow Action -->
    <div
      class="hidden md:flex items-start pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
    >
      <ArrowUpRight :size="16" class="text-zinc-500" />
    </div>
  </a>
</template>
